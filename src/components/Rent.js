import React from 'react';
import Images from '../assets/img/index'

function Rent() {

    return (
        <div className="rent">
            <h2 className="sub title">ОРЕНДА АВТОМОБІЛІВ В <br/> БЄЛГОРОД</h2>
            <h3 className="per day">Від <strong>800</strong> грн/день та <strong>знижки</strong> от тижня оренди</h3>
            <a href="#" title="Title" className="make choice">Виберіть автомобіль</a>
            <p className="image"> </p>
            <img alt="alternate" className="arrow" src={Images.arrowDown}/>
            <ul className="nets">
                <li className="name">Наші контакти:</li>
                <li><a href="#" title="Title"><img alt="alternate" className="connect"
                                                   src={Images.instagramSketched}/></a>
                </li>
                <li><a href="#" title="Title"><img alt="alternate" className="connect"
                                                   src={Images.whatsapp}/></a></li>
                <li><a href="#" title="Title"><img alt="alternate" className="connect"
                                                   src={Images.iconfinderVkontakte_386743}/></a></li>
            </ul>
        </div>
    )
}

export default Rent;