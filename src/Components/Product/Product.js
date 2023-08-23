import Canistra from '../../images/Canistra.png';
import './Product.css'





const Product = () => {
    return (
        <section className="product">
            <h3 className="product__title">Продукция</h3>
            <div className="product__link">
                <a className="product__link-text">ДТ Евро (зимнее, летнее)</a>
                <button className="product__link-but"></button>
            </div>
            <div className="product__cards">
                <div className="product__card">
                    <img src={Canistra} className="product__card-img" />
                    <h2 className="product__card-text">Роснефть</h2>
                </div>
                <div className="product__card">
                    <img src={Canistra} className="product__card-img" />
                    <h2 className="product__card-text">Лукойл</h2>
                </div>
            </div>
            <div className="product__link">
                <a className="product__link-text">Аналоги дизельного топлива</a>
                <button className="product__link-but"></button>
            </div>
            <div className="product__cards">
                <div className="product__card">
                    <img src={Canistra} className="product__card-img" />
                    <h2 className="product__card-text">НПЗ Ильский</h2>
                </div>
                <div className="product__card">
                    <img src={Canistra} className="product__card-img" />
                    <h2 className="product__card-text">НПЗ Славянский</h2>
                </div>
                <div className="product__card">
                    <img src={Canistra} className="product__card-img" />
                    <h2 className="product__card-text">НПЗ<br />Новошах&shy;тинский</h2>
                </div>
            </div>
            <div className="product__link">
                <a className="product__link-text">Бензин</a>
                <button className="product__link-but"></button>
            </div>
            <div className="product__cards">
                <div className="product__card">
                    <img src={Canistra} className="product__card-img" />
                    <h2 className="product__card-text">АИ-95</h2>
                </div>
                <div className="product__card">
                    <img src={Canistra} className="product__card-img" />
                    <h2 className="product__card-text">АИ-92</h2>
                </div>
                <div className="product__card">
                    <img src={Canistra} className="product__card-img" />
                    <h2 className="product__card-text">АИ-80</h2>
                </div>
            </div>
        </section>
    )
}

export default Product;