import React from 'react';
import Images from '../assets/img/index'

function Header() {

    return (
        <div className="top-info">
            <a href="#" title="Title" className="logo"><img alt="alternate" src={Images.logo}/>
            </a>
            <h1 className="common title"><span className="desktop">Оренда авто</span></h1>
            <p className="slogan">Автомобіль який<br/>вас не підведе</p>
            <p className="address">Вільна вулиця, 16 м. Бєлгород</p>
            <ul className="top phones">
                <li className="phone"><a href="#" title="Title" className="call" href="tel:+79066000009">+7 (906)
                    600-00-09</a></li>
                <li className="phone"><a href="#" title="Title" className="call" href="tel:+79290006665">+7 (929)
                    000-66-65</a></li>
                <li className="work time">Без вихідних з <strong>8:00</strong> до <strong>20:00</strong></li>
            </ul>
            <a href="#" title="Title" className="to order make">Замовити дзвінок</a>
        </div>
    )
};

export default Header;