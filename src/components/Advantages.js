import React from 'react';
import Gear from "../assets/img/gear.svg"
import Insurance from "../assets/img/car-insurance.svg"
import License from "../assets/img/license.svg"
import Sale from "../assets/img/sale.svg"
import Tablet from "../assets/img/tablet.svg"
import OnlinePayment from "../assets/img/online-payment.svg"

function Advantages() {

    return (
        <div className="advantage">
            <h2 className="t">ПЕРЕВАГИ</h2>
            <div className="condition">
                <div className="cond details">
                    <ul className="view">
                        <li className="images"><img alt="alternate" src={Gear}/></li>
                        <li className="text">Всі автомобілі з <strong>ТО</strong>і гарантією, <strong>ОСАГО</strong>
                        </li>
                    </ul>
                </div>
                <div className="cond details">
                    <ul className="view">
                        <li className="images"><img alt="alternate" src={Insurance}/></li>
                        <li className="text">Автомобілі с <br/>підвищеним<br/> <strong>комфортом</strong></li>
                    </ul>
                </div>
                <div className="cond details">
                    <ul className="view">
                        <li className="images"><img alt="alternate" src={License}/></li>
                        <li className="text"><strong>Швидке</strong> оформлення договору за паспортом та посвідченю
                            водія
                        </li>
                    </ul>
                </div>
                <div className="cond details">
                    <ul className="view">
                        <li className="images"><img alt="alternate" src={Sale}/></li>
                        <li className="text"><strong>Знижки</strong> від 10% при оренді автомобилю на строк більше тижня
                        </li>
                    </ul>
                </div>
                <div className="cond details">
                    <ul className="view">
                        <li className="images"><img alt="alternate" src={Tablet}/></li>
                        <li className="text">Оформлення<br/> оренди авто<br/> <strong>онлайн</strong></li>
                    </ul>
                </div>
                <div className="cond details">
                    <ul className="view">
                        <li className="images"><img alt="alternate" src={OnlinePayment}/></li>
                        <li className="text">Сплата готівкою, безготівковим<br/> платіжом,<br/> вивід на карту</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Advantages;