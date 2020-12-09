import React from 'react';

function Card(props) {
    return(
        <>
        <div className="location">
        <button type="button" className="location__delete"/>
        <img className="location__image" onClick={props.onCardClick} src={props.card.link} alt={`Картинка ${props.card.name}`}/>
        <div className="location__description">
    <h2 className="location__title">{props.card.name}</h2>
            <div className="location__like-container">
                <button type="button" className="location__like"/>
                <span className="location__like-counter">{props.card.likes.length}</span>
            </div>
        </div>
        </div>
    </>  
    )   
}

export default Card;