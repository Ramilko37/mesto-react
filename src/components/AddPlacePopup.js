import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onAddPlace({
      name: name,
      link: link,
    });
    setName("");
    setLink("");
  };

  return (
    <PopupWithForm
      title="Новое место"
      name="add-card"
      buttonName="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <div>
        <input
          name="place"
          placeholder="Название"
          type="text"
          className="popup__input popup__input_type_place"
          minLength={2}
          maxLength={30}
          autoComplete="off"
          required
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__error" id="place-error" />
        <input
          name="url"
          placeholder="Ссылка на картинку"
          type="url"
          className="popup__input popup__input_type_url"
          autoComplete="off"
          required
          value={link}
          onChange={handleLinkChange}
        />
        <span className="popup__error" id="url-error" />
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
