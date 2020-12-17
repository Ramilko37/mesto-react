import React from "react";
import api from "../utils/api.js";
import Header from "./Header";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import "../index.css";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import CurrentUserContext from "./../contexts/CurrentUserContext";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const handleEditProfileClick = () =>
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const handleAddPlaceClick = () =>
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const handleEditAvatarClick = () =>
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);

  const [selectedCard, setSelectedCard] = React.useState(undefined);
  const handleCardClick = (card) => setSelectedCard(card);

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  const closePopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(undefined);
  };

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, card]) => {
        setCurrentUser(userData);
        setCards(card);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.like(card._id, !isLiked).then((newCard) => {
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      setCards(newCards);
    });
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
      })
      .catch((err) => {
        console.log(`Ошибка`);
      });
  }

  function handleUpdateUser(info) {
    api
      .setUserInfo(info)
      .then((res) => {
        setCurrentUser(res);
        closePopups();
      })
      .catch((err) => {
        console.log(`Ошибка обновления данных пользователя. ${err}`);
      });
  }

  function handleUpdateAvatar(data) {
    api
      .setUserAvatar(data)
      .then((data) => {
        setCurrentUser(data);
        closePopups();
      })
      .catch((err) =>
        console.log(`Ошибка при замене аватара пользователя: ${err}`)
      );
  }

  function handleAddPlaceSubmit(data) {
    api
      .addCard(data)
      .then((res) => {
        const newCard = res;
        setCards([newCard, ...cards]);
        closePopups();
      })
      .catch((err) => console.log(`Ошибка `));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closePopups}
            onUpdateUser={handleUpdateUser}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closePopups}
            onAddPlace={handleAddPlaceSubmit}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closePopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <ImagePopup onClose={closePopups} card={selectedCard} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
