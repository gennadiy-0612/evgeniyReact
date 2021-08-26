import React from 'react';
import Work from "../assets/img/work.png"
import Debt from "../assets/img/work.png"
import PersonalInfo from "../assets/img/personal-information.png"
import Security from "../assets/img/security.png"

function Conditions() {

    return (
        <div className="conditions">
            <h2 className="t">Умови</h2>
            <h3 className="d">Виконавши їх ви точно зможете <br/> орендувати будь-який автомобіль</h3>
            <div className="condition">
                <div className="cond details">
                    <ul className="view">
                        <li className="images"><img alt="alternate" src={Work}/></li>
                        <li className="text"><strong>3</strong> роки стажу володіння автомобілем</li>
                    </ul>
                </div>
                <div className="cond details">
                    <ul className="view">
                        <li className="images"><img alt="alternate" src={Debt}/></li>
                        <li className="text"><strong>Відсутність</strong> <br/>судових заборгованостей</li>
                    </ul>
                </div>
                <div className="cond details">
                    <ul className="view">
                        <li className="images"><img alt="alternate" src={PersonalInfo}/></li>
                        <li className="text"><strong> Наявність </strong>паспорта і посвідчення водія</li>
                    </ul>
                </div>
                <div className="cond details">
                    <ul className="view">
                        <li className="images"><img alt="alternate" src={Security}/></li>
                        <li className="text"><strong>Застава</strong> от 5000 грн і вище в залежності від автомобіля
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Conditions;