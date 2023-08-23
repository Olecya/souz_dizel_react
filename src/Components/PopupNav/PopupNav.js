import React from 'react';
// import { a } from 'react-router-dom';
import './popupnav.css';

function PopupNav({ isOpen, onClose }) {

    return (
        <section className={`popup ${isOpen && "popup-opened"}`}>
            <div className="popup__form">
                <button className="popup__close" type="button" aria-label="close popup" onClick={onClose}></button>
                <div className="popup__conteiner">
                    <a to='/' className="popup__link" onClick={onClose}>О компании</a>
                    <a to="/movies" className="popup__link" onClick={onClose}>Продукция</a>
                    <a to="/saved-movies" className="popup__link" onClick={onClose}>Документы</a>
                    <a to="/saved-movies" className="popup__link" onClick={onClose}>Карьера</a>
                    <a to="/saved-movies" className="popup__link" onClick={onClose}>Контакты</a>
                </div>
                {/* <div className="popup__navigation navigation__account">
                    <a to='/profile' className="navigation__email" onClick={onClose}>Аккаунт</a>
                    <a to='/profile' className="navigation__icon" onClick={onClose}></a>
                </div> */}
            </div>
        </section>
    );
}

export default PopupNav;