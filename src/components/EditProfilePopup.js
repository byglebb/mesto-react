import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      submitButton="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        type="text"
        value={name || ''}
        onChange={handleChangeName}
        className="popup__input popup__input_data_name"
        name="name"
        id="name-input"
        minLength="2"
        maxLength="40"
        placeholder="Ваше имя"
        required />
      <span className="popup__input-error name-input-error"></span>
      <input
        type="text"
        value={description || ''}
        onChange={handleChangeDescription}
        className="popup__input popup__input_data_activity"
        name="about"
        id="activity-input"
        minLength="2"
        maxLength="200"
        placeholder="Ваша профессия"
        required />
      <span className="popup__input-error activity-input-error"></span>
    </PopupWithForm>
  );
}