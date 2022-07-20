export default function ImagePopup() {
  return (
    <div className="popup popup_image">
      <div className="popup__overlay popup__overlay_image"></div>
      <div className="popup__image-window">
        <img className="popup__image" src="#" alt="Изображение" />
        <button className="popup__close-button popup__close-button_image" type="button"></button>
        <h2 className="popup__title-image"></h2>
      </div>
    </div>
  );
}