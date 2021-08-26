import React from 'react';
import ArrowDown from '../assets/img/arrow-down.svg'
import InstagramSketched from '../assets/img/instagram-sketched.png'
import WhatsApp from '../assets/img/whatsapp.png'
import IconVK from '../assets/img/iconfinder_vkontakte_386743.png'

function RentAuto() {

    return (
        <div className="rent">
            <h2 className="sub title">ОРЕНДА АВТОМОБІЛІВ В <br/> БЄЛГОРОД</h2>
            <h3 className="per day">Від <strong>800</strong> грн/день та <strong>знижки</strong> от тижня оренди</h3>
            <p>
                <a href="/#" title="Title" className="make choice">Виберіть автомобіль</a>
            </p>
            <p className="image"> </p>
            <img alt="alternate" className="arrow" src={ArrowDown}/>
            <ul className="nets">
                <li className="name">Наші контакти:</li>
                <li><a href="/#" title="Title"><img alt="alternate" className="connect" src={InstagramSketched}/></a></li>
                <li><a href="/#" title="Title"><img alt="alternate" className="connect" src={WhatsApp}/></a></li>
                <li><a href="/#" title="Title"><img alt="alternate" className="connect" src={IconVK}/></a></li>
            </ul>
        </div>
)
}

export default RentAuto;