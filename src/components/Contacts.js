import React from 'react';
import MapWebP from '../assets/img/map.webp'
import MapPng from '../assets/img/map.png'

function Contacts() {

    return (
        <div className="contact">
            <form className="call-back">
                <h3 className="tf">Залишилися питання?</h3>
                <p className="massage">Задайте їх нам!</p>
                <input className="call-name" type="text" placeholder="Введіть ваше им'я"/>
                <input className="call-phone mask" type="tel" placeholder="+7 (906) 600-00-09"/>
                <input className="send-number" type="submit" value="Замовити дзвінок"/>
                <div className="agreed">
                    <input className="agree" type="checkbox"/>
                    <p className="agreement">Натискаючи на кнопку ви погоджуєтеся з політикою
                        конфіденційності.</p>
                </div>
            </form>
            <picture className="map">
                <source srcSet={MapWebP} type="image/webp"/>
                <source srcSet={MapPng} type="image/png"/>
                <img alt="alternate" loading="lazy" src={MapPng}/>
            </picture>
        </div>

    )
}

export default Contacts;