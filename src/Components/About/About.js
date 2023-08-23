import './About.css';
import logo from '../../images/logo.png'

const About = () => {
    return (
        <section className="about">
            <article className="abouts">
                <div className="about-imgs">
                    <img className="about-img" src={logo} alt="логотип компании" />
                </div>
                <p className="about-text">Компания «Союз-Дизель» молодая, динамичная и активно развивающаяся. На
                    сегодняшний
                    день мы уже сотрудничаем с более 300 фермерскими хозяйствами.
                    Работаем по Ростовской, Воронежской, Волгоградской, Тамбовской области. А также доставляем в
                    Краснодарский и Ставропольский край. </p>
            </article>
            <article className="abouts">
                <ul className="about__uls">
                    <li href="#" className="about-text">Работаем с более 20 НПЗ.</li>
                    <li href="#" className="about-text">Доставку осуществляем своими бензовозами.</li>
                    <li href="#" className="about-text">Минимальный объем для заказа 5 000 л.</li>
                </ul>
            </article>
        </section>
    )
}

export default About;