import React, { useState, useEffect } from 'react';
import './Header.css';
import CD from '../../images/СД.png'
// import PopupNavigation from '../PopupNavigation/PopupNavigation';
import PopupNav from '../PopupNav/PopupNav';
const Header = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [popupNavOpened, setPopupNavOpened] = useState(false);

    useEffect(() => {
        const handleResize = (event) => {
            setWidth(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="header">
            <img src={CD} className="header__logo" alt="Союз Дизель" />


            {(width > 797 ?
                <div className="header_contacts">
                    <div className="header_contact">
                        <span>E-mail:</span>
                        soyzdizel@mail.ru
                        <div className="header_soc">
                            Мы в соцсетях:
                            <a className="header_vk" href="https://vk.com/soyzdizel" title="Вконтакте" target="_blank">
                                <div className="header_vk-img"></div>
                            </a>
                        </div>
                    </div>
                    <div className="header_contact">
                        <span>Телефон:</span>
                        +7 (930) 404-50-34
                        <span>+7 (996) 451-35-50</span>
                    </div>
                </div>
                :
                <>
                    <button className="navigation__bar" onClick={() => setPopupNavOpened(true)} />
                    <PopupNav isOpen={popupNavOpened} onClose={() => setPopupNavOpened(false)} />
                    {/* <PopupNavigation></PopupNavigation> */}

                </>
            )}




        </header>
    )
}

export default Header;