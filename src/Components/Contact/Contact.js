import './Contact.css';

const Contact = () => {
    return (
        <section className="contact">
            <h3 className="product__title">Контакты</h3>
            <p className="contact__text">
                <span className="contact__text-span">Юридический адрес:</span>
                <p>394018, Воронежская область, г. Воронеж, ул. Свободы, д. 75, офис 307/1</p>
                {/* <br /> */}
                <span className="contact__text-span">Руководитель отдела продаж:</span>
                <p>Полянская Юлия Анатольевна 8930-404-50-34</p>
                <span className="contact__text-span">Менеджеры:</span>
                <p>8996-451-35-50</p>
                <p>8996-450-20-61</p>
                <p>8996-452-62-02</p>
                <p><span className="contact__text-span">Элуктронная почта:</span> soyzdizel@mail.ru</p>
                <p><span className="contact__text-span">Группа ВКонтакте:</span><a className="contact__text-vk"
                    href="https://vk.com/soyzdizel" title="Вконтакте" target="_blank">
                    https://vk.com/soyzdizel</a></p>
            </p>
        </section>
    )
}

export default Contact;