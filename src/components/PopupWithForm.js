import React from 'react';

function PopupWithForm(props) {
    return (
      <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ``}`} id="edit-profile">
      <div className="popup__container">
        <button type="button" className="popup__close-button"  onClick={props.onClose}/>
        <h2 className="popup__title">{props.title}</h2>
        <form name={`${props.name}`} className="popup__form" method="get" action="#" noValidate>
          {props.children}
          <button type="submit" className="popup__button" onClick={props.onSubmit}>{props.buttonName}</button> </form>
      </div>
    </div>
    )
}

export default PopupWithForm;