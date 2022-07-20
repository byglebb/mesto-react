import Avatar from '../images/Avatar.png'

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
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-shell" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={Avatar} alt="Аватар" />
        </div>
        <div className="profile__profile-info">
          <div className="profile__name-change">
            <h1 className="profile__name">Gleb Bychkov</h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__activity">Developer</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
      </section>
    </main>
    );
}