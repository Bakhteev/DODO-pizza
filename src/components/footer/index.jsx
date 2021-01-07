import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <h2 className="footer__title-main">Доставка и оплата</h2>
                <div className="row footer__row">
                    <div className="col-4 footer__item">
                        <h3 className="footer__title">60 МИНУТ ИЛИ ПИЦЦА БЕСПЛАТНО</h3>
                        <p className="footer__text">Если мы не успеем доставить любые продукты, кроме сувенирной продукции и соусов, в течение 60 минут, курьер подарит вам сертификат на большую пиццу.</p>
                    </div>
                    <div className="col-4 footer__item">
                        <h3 className="footer__title">345 СОМ</h3>
                        <p className="footer__text">Минимальная сумма доставки без учета товаров из категории «Другие товары»</p>
                        <h3 className="footer__title">7 000 СОМ</h3>
                        <p className="footer__text">Максимальная сумма при оплате наличным
                    <span style={{ marginBottom: 10 + 'px' }}>и</span>
                    Изображения продуктов могут отличаться от продуктов в заказе.</p>
                    </div>
                    <div className="col-4 footer__item">
                        <h3 className="footer__title">ЗОНА ДОСТАВКИ ОГРАНИЧЕНА</h3>
                        <a className="footer__link" href="https://maps.yandex.ru/?um=constructor:mKHoo9GGh9SRP15bo2TGcvdcQ0dTIqEf&amp;source=constructor" target="_blank"><img className="footer__img" src="https://dodopizza-a.akamaihd.net/site-static/dist/fcd1f4fda959e86e45a7.jpg" alt="map" /><span className="footer__delivery">Зона доставки</span></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
