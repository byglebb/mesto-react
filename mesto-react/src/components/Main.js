import { useEffect } from 'react';
import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

export default function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

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
        {cards.map(card =>
          <Card
            key={card._id}
            card={card}
            onCardClick={props.onCardClick}
          />
        )}
      </section>
    </main>
  );
}