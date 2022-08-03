import { useEffect } from 'react';
import { useContext } from 'react';
import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

export default function Main(props) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);
  const cardsElements = cards.map(card =>
    <Card
      key={card._id}
      card={card}
      onCardClick={props.onCardClick}
    />);

  useEffect(() => {
    Promise.all([api.getInitialCards()])
      .then(([cards]) => {
        setCards(cards);
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      })
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-shell" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
        </div>
        <div className="profile__profile-info">
          <div className="profile__name-change">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__activity">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
        {cardsElements}
      </section>
    </main>
  );
}