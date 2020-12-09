import React from 'react';
import Header from './Header';
import Main from './Main';
import ImagePopup from './ImagePopup';
import '../index.css';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {


  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(!isEditProfilePopupOpen);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(!isAddPlacePopupOpen);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);

  const [selectedCard, setSelectedCard] = React.useState(undefined);
  const handleCardClick = (card) => setSelectedCard(card)

  const closePopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(undefined)
  }


  return (
    <div className="page">
   <div className="page__container">
    
    
  <Header/>
  <Main 
  onEditProfile={handleEditProfileClick}
  onAddPlace={handleAddPlaceClick}
  onEditAvatar={handleEditAvatarClick}
  onCardClick={handleCardClick}
  />
  <Footer />
  <PopupWithForm   
  title="Редактировать профиль"
  name="edit-profile"
  buttonName="Сохранить"
  isOpen={isEditProfilePopupOpen}
  onClose={closePopups}>
  <div>
    <input name="name" placeholder="Введите текст" type="text" required
                        className="popup__input popup__input_type_name"  minLength={2} maxLength={40}/>
                    <span className="popup__error" id="name-error"/>
                    <input name="job" placeholder="Введите текст" type="text" required
                        className="popup__input popup__input_type_job"  minLength={2} maxLength={200}/>
                    <span className="popup__error" id="job-error"/>
                    
  </div>         
  </PopupWithForm>
  <PopupWithForm 
  title="Новое место"
  name="add-card"
  buttonName="Создать"
  isOpen={isAddPlacePopupOpen}
  onClose={closePopups}>
    <div>
    <input name="place" placeholder="Название" type="text" className="popup__input popup__input_type_place"
                        minLength={2} maxLength={30} autoComplete="off" required/>
                    <span className="popup__error" id="place-error"/>
                    <input name="url" placeholder="Ссылка на картинку" type="url"
                        className="popup__input popup__input_type_url" autoComplete="off" required/>
                    <span className="popup__error" id="url-error"/>
    </div>
  </PopupWithForm>
  <PopupWithForm 
  title="Обновить аватар"
  name="add-avatar"
  buttonName="Создать"
  isOpen={isEditAvatarPopupOpen}
  onClose={closePopups}>
    <div>
    <input name="url" placeholder="Ссылка на новый аватар" type="url"
                        className="popup__input popup__input_type_url" autoComplete="off" required/>
                    <span className="popup__error" id="url-error"/>
    </div>
  </PopupWithForm>
  <ImagePopup onClose={closePopups} card={selectedCard} />
       
   </div>
   </div>
  );
}


export default App;
