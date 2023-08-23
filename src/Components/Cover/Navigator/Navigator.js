import './Navigator.css';

const Navigator = () => {
    return (
        <div className="navigator">
            <ul className="navigator-button__ul">
                <li className="navigator-button__li"><a href="#" className="navigator-button__ul-link">О компании</a>
                </li>
                <li><a href="#" className="navigator-button__ul-link">Продукция</a></li>
                <li><a href="#" className="navigator-button__ul-link">Документы</a></li>
                <li><a href="https://hh.ru/vacancy/84372351?from=share_ios" className="navigator-button__ul-link"
                    target="_blank">Карьера</a></li>
                <li><a href="#" className="navigator-button__ul-link">Контакты</a></li>
            </ul>
        </div>
    )
}

export default Navigator;