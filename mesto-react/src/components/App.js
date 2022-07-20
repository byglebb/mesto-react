import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function openEditProfilePopup() {
    setIsEditProfilePopupOpen(true);
  }

  function openAddPlacePopup() {
    setIsAddPlacePopupOpen(true);
  }

  function openEditAvatarPopup() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  // const isOpen = isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen;

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={openEditProfilePopup}
          onAddPlace={openAddPlacePopup}
          onEditAvatar={openEditAvatarPopup}
        />
        <Footer />
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          submitButton="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          children={
            <>
              <input
                type="text"
                className="popup__input popup__input_data_name"
                name="name"
                id="name-input"
                minlength="2"
                maxlength="40"
                required />
              <span className="popup__input-error name-input-error"></span>
              <input
                type="text"
                className="popup__input popup__input_data_activity"
                name="about"
                id="activity-input"
                minlength="2"
                maxlength="200"
                required />
              <span className="popup__input-error activity-input-error"></span>
            </>
          }
        />
        <PopupWithForm
          name="addcard"
          title="Новое место"
          submitButton="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          children={
            <>
              <input
                type="text"
                className="popup__input popup__input_data_place"
                name="name"
                id="place-input"
                minlength="2"
                maxlength="30"
                placeholder="Название"
                required />
              <span className="popup__input-error place-input-error"></span>
              <input
                type="url"
                className="popup__input popup__input_data_link"
                name="link"
                id="link-input"
                placeholder="Ссылка на картинку"
                required />
              <span className="popup__input-error link-input-error"></span>
            </>
          }
        />
        <PopupWithForm
          name="confirmation"
          title="Вы уверены?"
          submitButton="Да"
        />
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          submitButton="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          children={
            <>
              <input
                type="url"
                className="popup__input popup__input_data_avatar"
                name="avatar"
                id="avatar-input"
                placeholder="Ссылка на аватар"
                required />
              <span className="popup__input-error avatar-input-error"></span>
            </>
          }
        />
        <ImagePopup />
      </div>

      <template id="default-element">
        <article className="element">
          <button className="element__delete-button" type="button"></button>
          <img className="element__image" />
          <div className="element__description">
            <h2 className="element__place"></h2>
            <div className="element__like-container">
              <button className="element__like" type="button"></button>
              <p className="element__like-counter"></p>
            </div>
          </div>
        </article>
      </template>
    </>
  );
}

export default App;