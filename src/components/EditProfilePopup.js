import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handlDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      buttonName="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <div>
        <input
          name="name"
          value={name}
          placeholder="Введите текст"
          type="text"
          required
          className="popup__input popup__input_type_name"
          minLength={2}
          maxLength={40}
          onChange={handleNameChange}
        />
        <span className="popup__error" id="name-error" />
        <input
          name="job"
          value={description}
          placeholder="Введите текст"
          type="text"
          required
          className="popup__input popup__input_type_job"
          minLength={2}
          maxLength={200}
          onChange={handlDescriptionChange}
        />
        <span className="popup__error" id="job-error" />
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
