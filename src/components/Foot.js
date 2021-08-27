import React from 'react';
import Images from '../assets/img/index'
import InstagramSketched from '../assets/img/instagram-sketched.png'
import WhatsApp from '../assets/img/whatsapp.png'
import IconVK from '../assets/img/iconfinder_vkontakte_386743.png'

function Foot() {

    return (
        <footer>
            <div className="top-info">
                <a href="/#" title="Title" className="logo"><img alt="alternate" src={Images.logo}/></a>
                <h1 className="common title">Оренда авто</h1>
                <p className="slogan">Автомобіль який <br/>Вас не підведе</p>
                <ul className="nets">
                    <li className="name">Нашы контакти:</li>
                    <li className="icon">
                        <a href="/#" title="Title">
                            <img alt="alternate" className="connect" src={InstagramSketched}/>
                        </a>
                    </li>
                    <li className="icon">
                        <a href="/#" title="Title">
                            <img alt="alternate" className="connect" src={WhatsApp}/>
                        </a>
                    </li>
                    <li className="icon">
                        <a href="/#" title="Title">
                            <img alt="alternate" className="connect"
                                 src={IconVK}/>
                        </a>
                    </li>
                </ul>
                <p className="confident">
                    <a href="/#" title="Title">Політика конфіденційності</a>
                </p>
                <ul className="top phones">
                    <li className="phone">
                        <a title="Title" className="call" href="tel:+79066000009">+7 (906) 600-00-09</a>
                    </li>
                    <li className="phone">
                        <a title="Title" className="call" href="tel:+79290006665">+7 (929) 000-66-65</a>
                    </li>
                    <li className="work time">Без вихідних з 8:00 до 20:00</li>
                </ul>
            </div>
        </footer>

    )
}

export default Foot;