export default function Card({card, onCardClick}) {
  function handleImageClick() {
    onCardClick(card);
  } 

  return (
    <article className="element" key={card._id}>
      <button className="element__delete-button" type="button"></button>
      <img 
        className="element__image" 
        src={card.link} 
        alt={card.name} 
        onClick={handleImageClick}/>
      <div className="element__description">
        <h2 className="element__place">{card.name}</h2>
        <div className="element__like-container">
          <button className="element__like" type="button"></button>
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}