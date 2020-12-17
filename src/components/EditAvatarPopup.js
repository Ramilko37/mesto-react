import React from 'react';
import PopupWithForm from './PopupWithForm';



function EditAvatarPopup(props) {

  const avatarRef = React.useRef(0);

  function handleAvatarChange() {
    avatarRef.current.focus();
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }


return (
<PopupWithForm 
  title="Обновить аватар"
  name="add-avatar"
  buttonName="Создать"
  isOpen={props.isOpen}
  onClose={props.onClose}
  onSubmit={handleSubmit}
>
  
     <input name="url"
             placeholder="Ссылка на новый аватар"
           type="url"
            className="popup__input popup__input_type_url"
            autoComplete="off" 
            required 
            ref={avatarRef}
            onChange={handleAvatarChange}/>
      <span className="popup__error" id="url-error"/>
  </PopupWithForm>

)


}


export default EditAvatarPopup;