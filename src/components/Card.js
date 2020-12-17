import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card(props) {
const currentUser = React.useContext(CurrentUserContext);

const isOwn = props.card.owner._id === currentUser._id;
const cardDeleteButtonClassName = (
  `location__delete ${isOwn ? '' : 'location__delete location__delete_hidden'}`
);
const isLiked = props.card.likes.some(i => i._id === currentUser._id);

const cardLikeButtonClassName =  (
`location__like ${isLiked ? 'location__like_active' : ''}`
);

function handleClick() { props.onCardClick(props.card); }

function handleLikeClick() { props.onCardLike(props.card); }

function handleDeleteCard() { props.onCardDelete(props.card); }

    return(
        <CurrentUserContext.Provider value={currentUser}>
        <div className="location" > 
        <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteCard}/>
        <img className="location__image" onClick={handleClick} src={props.card.link} alt={`Картинка ${props.card.name}`}/>
        <div className="location__description">
        <h2 className="location__title">{props.card.name}</h2>
            <div className="location__like-container">
                <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}/>
                <span className="location__like-counter">{props.card.likes.length}</span>
            </div>
        </div>
        </div>
        </CurrentUserContext.Provider> 
    )   
}

export default Card;