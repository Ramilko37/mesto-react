import React from 'react';


function ImagePopup(props) {
    return(
        <div className={`popup popup_type_${props.name} ${props.card && `popup_opened`}`}>
      <div className="popup__container-image">
        <button type="button" className="popup__close-button" onClick={props.onClose} />
        <img className="popup__image" src={props.card && props.card.link} alt={props.card && `Картинка ${props.card.name}`} />
        <h3 className="popup__caption">{props.card && props.card.name}</h3>
      </div>
    </div>   
    )
}

export default ImagePopup;