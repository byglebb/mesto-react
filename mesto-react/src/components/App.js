import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <div className="popup popup_profile">
          <div className="popup__overlay popup__overlay_profile"></div>
          <div className="popup__window">
            <button className="popup__close-button popup__close-button_profile" type="button"></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="popup__form popup__form_profile" name="popup-form-profile" novalidate>
              <input type="text" className="popup__input popup__input_data_name" name="name" id="name-input" minlength="2"
                maxlength="40" required />
              <span className="popup__input-error name-input-error"></span>
              <input type="text" className="popup__input popup__input_data_activity" name="about" id="activity-input"
                minlength="2" maxlength="200" required />
              <span className="popup__input-error activity-input-error"></span>
              <button className="popup__submit-button" type="submit">Сохранить</button>
            </form>
          </div>
        </div>

        <div className="popup popup_addcard">
          <div className="popup__overlay popup__overlay_addcard"></div>
          <div className="popup__window">
            <button className="popup__close-button popup__close-button_addcard" type="button"></button>
            <h2 className="popup__title">Новое место</h2>
            <form className="popup__form popup__form_addcard" name="popup-form-addcard" novalidate>
              <input type="text" className="popup__input popup__input_data_place" name="name" id="place-input" minlength="2"
                maxlength="30" placeholder="Название" required />
              <span className="popup__input-error place-input-error"></span>
              <input type="url" className="popup__input popup__input_data_link" name="link" id="link-input"
                placeholder="Ссылка на картинку" required />
              <span className="popup__input-error link-input-error"></span>
              <button className="popup__submit-button" type="submit">Создать</button>
            </form>
          </div>
        </div>

        <div className="popup popup_image">
          <div className="popup__overlay popup__overlay_image"></div>
          <div className="popup__image-window">
            <img className="popup__image" src="#" alt="Изображение" />
            <button className="popup__close-button popup__close-button_image" type="button"></button>
            <h2 className="popup__title-image"></h2>
          </div>
        </div>

        <div className="popup popup_confirmation">
          <div className="popup__overlay popup__overlay_confirmation"></div>
          <div className="popup__window">
            <button className="popup__close-button popup__close-button_confirmation" type="button"></button>
            <h2 className="popup__title popup__title_confirmation">Вы уверены?</h2>
            <form className="popup__form popup__form_confirmation" name="popup-form-confirmation" novalidate>
              <button className="popup__submit-button" type="submit">Да</button>
            </form>
          </div>
        </div>

        <div className="popup popup_avatar">
          <div className="popup__overlay popup__overlay_avatar"></div>
          <div className="popup__window">
            <button className="popup__close-button popup__close-button_avatar" type="button"></button>
            <h2 className="popup__title">Обновить аватар</h2>
            <form className="popup__form popup__form_avatar" name="popup-form-avatar" novalidate>
              <input type="url" className="popup__input popup__input_data_avatar" name="avatar" id="avatar-input"
                placeholder="Ссылка на аватар" required />
              <span className="popup__input-error avatar-input-error"></span>
              <button className="popup__submit-button" type="submit">Сохранить</button>
            </form>
          </div>
        </div>

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
