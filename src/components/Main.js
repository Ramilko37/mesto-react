import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import api from '../utils/api.js';
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';


function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setInitialCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  const errHandler = err => console.log(err);

  React.useEffect(() => {
    api.getUserInfo()
      .then(profileInfoData => {
        setUserName(profileInfoData.name);
        setUserDescription(profileInfoData.about);
        setUserAvatar(profileInfoData.avatar);
      })
      .catch(errHandler);

  api.getInitialCards()
  .then(initialCards => {
    setInitialCards(initialCards)
  })
  .catch(errHandler)
}, [])


    return (
    <>
    <main className="content">
        <section className="profile">
          <div className="profile__info">
            <div className="profile__avatar" src={userAvatar} alt="Аватар автора">
              <button className="profile__button-avatar" onClick={props.onEditAvatar} aria-label="сменить аватар" />
            </div>
            <div className="profile__form">
              <h1 className="profile__name">{userName}</h1>
              <p className="profile__description">{userDescription}</p>
            </div>
            <button className="profile__edit-button" onClick={props.onEditProfile} type="button" />
          </div>
          <button className="profile__add-button" onClick={props.onAddPlace} type="button" />
        </section>
      </main>   
        <section className="places">
                {cards.map((card) => (
                  <Card card={card} onCardClick={() => props.onCardClick(card)} key={card._id} />
                ))}
            </section>
    </>
    )
}

export default Main;





