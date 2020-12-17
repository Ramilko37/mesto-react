import React from "react";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__info">
            <div className="profile__img">
              <span className="profile__overlay" onClick={onEditAvatar} />
              <img
                className="profile__avatar"
                src={currentUser.avatar}
                alt="Аватар"
              />
            </div>

            <div className="profile__form">
              <h1 className="profile__name">{currentUser.name}</h1>
              <p className="profile__description">{currentUser.about}</p>
            </div>
            <button
              className="profile__edit-button"
              onClick={onEditProfile}
              type="button"
            />
          </div>

          <button
            className="profile__add-button"
            onClick={onAddPlace}
            type="button"
          />
        </section>
        <section className="places">
          {cards.map((card) => (
            <Card
              card={card}
              onCardDelete={onCardDelete}
              onCardClick={() => onCardClick(card)}
              onCardLike={onCardLike}
              key={card._id}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Main;
