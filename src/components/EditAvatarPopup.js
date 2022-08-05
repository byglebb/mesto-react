import PopupWithForm from "./PopupWithForm";
import { useRef, useEffect } from "react";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen])

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      submitButton="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit} >
      <input
        type="url"
        className="popup__input popup__input_data_avatar"
        name="avatar"
        id="avatar-input"
        placeholder="Ссылка на аватар"
        ref={avatarRef}
        required />
      <span className="popup__input-error avatar-input-error"></span>
    </PopupWithForm>
  );
}