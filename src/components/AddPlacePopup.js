import PopupWithForm from "./PopupWithForm";
import { useState, useEffect } from "react";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeLink(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({ name, link });
  }

  useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  return (
    <PopupWithForm
      name="addcard"
      title="Новое место"
      submitButton="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        type="text"
        className="popup__input popup__input_data_place"
        name="name"
        id="place-input"
        minLength="2"
        maxLength="30"
        placeholder="Название"
        value={name || ''}
        onChange={handleChangeName}
        required />
      <span className="popup__input-error place-input-error"></span>
      <input
        type="url"
        className="popup__input popup__input_data_link"
        name="link"
        id="link-input"
        placeholder="Ссылка на картинку"
        value={link || ''}
        onChange={handleChangeLink}
        required />
      <span className="popup__input-error link-input-error"></span>
    </PopupWithForm>
  );
}