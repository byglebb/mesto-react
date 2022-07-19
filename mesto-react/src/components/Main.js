import Avatar from '../images/Avatar.png'

export default function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-shell">
          <img className="profile__avatar" src={Avatar} alt="Аватар" />
        </div>
        <div className="profile__profile-info">
          <div className="profile__name-change">
            <h1 className="profile__name">Gleb Bychkov</h1>
            <button className="profile__edit-button" type="button"></button>
          </div>
          <p className="profile__activity">Developer</p>
        </div>
        <button className="profile__add-button" type="button"></button>
      </section>

      <section className="elements">
      </section>
    </main>
    );
}