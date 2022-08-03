import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useEffect } from 'react';
import api from '../utils/Api';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then((userDataInfo) => {
        setCurrentUser(userDataInfo);
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      });

    api.getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      });
  }, [])

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
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.toggleLikeButton(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(
        setCards((state) => state.filter((c) => c._id !== card._id)))
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={openEditProfilePopup}
          onAddPlace={openAddPlacePopup}
          onEditAvatar={openEditAvatarPopup}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
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
                minLength="2"
                maxLength="40"
                placeholder="Ваше имя"
                required />
              <span className="popup__input-error name-input-error"></span>
              <input
                type="text"
                className="popup__input popup__input_data_activity"
                name="about"
                id="activity-input"
                minLength="2"
                maxLength="200"
                placeholder="Ваша профессия"
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
                minLength="2"
                maxLength="30"
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
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
