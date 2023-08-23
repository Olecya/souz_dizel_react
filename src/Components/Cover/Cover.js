import './Cover.css';
import Navigator from "./Navigator/Navigator";

const Cover = () => {
    return (
        <section className="cover">
            <div href="https://stampsy.com/na-elektrichkakh-do-baikala" className="cover__link">
                <Navigator />
                <h2 className="cover__title">Союз Дизель - Выбирай качество!</h2>
                <p className="cover__subtitle">Надежный партнер в сельскохозяйственной сфере!</p>
            </div>
        </section>
    )
}

export default Cover;