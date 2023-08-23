import { Link } from 'react-router-dom';

const PopupNavigation = ({ isOpen, onClose }) => {
    return (
        <section className={`popup ${isOpen && "popup-opened"}`}>
            <div className="popup__form">
                <button className="popup__close" type="button" aria-label="close popup" onClick={onClose}></button>
                <div className="popup__conteiner">
                    {/* <Link to='/' className="popup__link" onClick={onClose}>Главная</Link>
                    <Link to="/movies" className="popup__link popup__link-decoration" onClick={onClose}>О компании</Link>
                    <Link to="/saved-movies" className="popup__link" onClick={onClose}>Сохраненные фильмы</Link> */}
                </div>
                <div className="popup__navigation navigation__account">
                    {/* <Link to='/profile' className="navigation__email" onClick={onClose}>Аккаунт</Link>
                    <Link to='/profile' className="navigation__icon" onClick={onClose}></Link> */}
                </div>
            </div>
        </section>
    )
}

export default PopupNavigation;