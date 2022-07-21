import { useEffect } from 'react';
import React from 'react';
// import Avatar from '../images/Avatar.png'
import api from '../utils/Api.js';

// function handleEditAvatarClick() {
//   document.querySelector('.popup_avatar').classList.add('popup_opened');
// }

// function handleEditProfileClick() {
//   document.querySelector('.popup_profile').classList.add('popup_opened');
// }

// function handleAddPlaceClick() {
//   document.querySelector('.popup_addcard').classList.add('popup_opened');
// }

export default function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  // console.log(api.getUserInfo());

  useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([cards, userDataInfo]) => {
        setUserName(userDataInfo.name);
        setUserAvatar(userDataInfo.avatar);
        setUserDescription(userDataInfo.about);
        setCards([...cards]);
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      })
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-shell" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt="Аватар" />
        </div>
        <div className="profile__profile-info">
          <div className="profile__name-change">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__activity">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
        {cards.map(card => (
          <article className="element" key={card._id}>
            <button className="element__delete-button" type="button"></button>
            <img className="element__image" src={card.link} alt={card.name}/>
            <div className="element__description">
              <h2 className="element__place">{card.name}</h2>
              <div className="element__like-container">
                <button className="element__like" type="button"></button>
                <p className="element__like-counter">{card.likes.length}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}