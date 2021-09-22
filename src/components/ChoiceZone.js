import React from 'react';

function ChoiceZone() {
    let controlList = [];
    let controlItems = [];
    let controlClasses = {
        0: 'HideAutoDetail',
        1: 'ShowAutoDetail',
        2: 'HideTechDetail',
        3: 'ShowTechDetail'
    };

    function cashedControls() {
        if (!controlList[0]) {
            controlList = document.querySelectorAll('.kind.li');
            controlItems = document.querySelectorAll('.techno');
        }
    }

    function MechanicList(e) {
        cashedControls();
        e.preventDefault();
        e.target.setAttribute('class', 'active kind li mechanic Choice Active');
        controlList[1].setAttribute('class', 'automate kind li not-active Choice NotActive');
        controlItems[0].classList.add(controlClasses["1"]);
        controlItems[0].classList.remove(controlClasses["0"]);
        controlItems[1].classList.add(controlClasses["2"]);
        controlItems[1].classList.remove(controlClasses["3"]);
    }

    function AutoList(e) {
        cashedControls();
        e.preventDefault();
        e.target.setAttribute('class', 'automate kind li not-active Choice Active');
        controlList[0].setAttribute('class', 'active kind li mechanic Choice NotActive');
        controlItems[0].classList.add(controlClasses["0"]);
        controlItems[0].classList.remove(controlClasses["1"]);
        controlItems[1].classList.add(controlClasses["3"]);
        controlItems[1].classList.remove(controlClasses["2"]);
    }

    return (
        <div className="choice zone">
            <h2 className="choice title">ОБЕРІТЬ АВТОМОБІЛЬ</h2>
            <h3 className="variant">Оберіть різновид <strong>КПП</strong></h3>
            <ul className="what">
                <li onClick={MechanicList} className="active kind li cursor">Механічна</li>
                <li onClick={AutoList} className="kind li cursor">Автоматична</li>
            </ul>
            <div className="techno auto">
                <div className="car">
                    <div className="data">
                        <h3 className="info read">ВАЗ kalina</h3>
                        <ol className="info">
                            <li className="text read">Застава:</li>
                            <li className="mean read">5 тыс грн</li>
                        </ol>
                        <ol className="info">
                            <li className="text read">Різновид КПП:</li>
                            <li className="mean read">Механіка</li>
                        </ol>
                        <ol className="info">
                            <li className="text read">Кузов/привід:</li>
                            <li className="mean read">Хетчбэк 5 дв/передній</li>
                        </ol>
                        <ol className="info">
                            <li className="text read">Паливо/витрати:</li>
                            <li className="mean read">(АИ-95) 8л/100км</li>
                        </ol>
                        <ol className="info">
                            <li className="text read">Доп. опції:</li>
                            <li className="mean read">-</li>
                        </ol>
                        <div className="info order">
                            <p className="changing"><a href="/#" title="Title" className="read">Виберіть автомобіль</a>
                            </p>
                            <div className="add">
                                <p className="read">Вартість:</p>
                                <p className="read price"><strong>900</strong> грн/день</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="car">
                    <div className="data">
                        <h3 className="info read">ВАЗ 2112</h3>
                        <ol className="info">
                            <li className="text read">Застава:</li>
                            <li className="mean read">5 тыс грн</li>
                        </ol>
                        <ol className="info">
                            <li className="text read">Різновид КПП:</li>
                            <li className="mean read">Механіка</li>
                        </ol>
                        <ol className="info">
                            <li className="text read">Кузов/привід:</li>
                            <li className="mean read">Хетчбэк 5 дв/передній</li>
                        </ol>
                        <ol className="info">
                            <li className="text read">Паливо/витрати:</li>
                            <li className="mean read">(АИ-95) 8л/100км</li>
                        </ol>
                        <ol className="info">
                            <li className="text read">Доп. опції:</li>
                            <li className="mean read">-</li>
                        </ol>
                        <div className="info order">
                            <p className="changing"><a href="/#" title="Title" className="read">Виберіть автомобіль</a>
                            </p>
                            <div className="add">
                                <p className="read">Вартість:</p>
                                <p className="read price"><strong>800</strong> грн/день</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="techno mech">
                <div className="car">
                    <div className="data">
                        <h3 className="info read">Mazda 6</h3>
                        <ol className="info">
                            <li className="text read">Застава:</li>
                            <li className="mean read">10 тыс грн</li>
                        </ol>
                        <ol className="info">
                            <li className="text read">Різновид КПП:</li>
                            <li className="mean read">Автоматическая</li>
                        </ol>
                        <ol className="info">
                            <li className="text read">Кузов/привід:</li>
                            <li className="mean read">Седан/передній</li>
                        </ol>
                        <ol className="info">
                            <li className="text read">Паливо/витрати:</li>
                            <li className="mean read">(АИ-95) 8л/100км</li>
                        </ol>
                        <ol className="info">
                            <li className="text read">Доп. опції:</li>
                            <li className="mean read">Кондиціонер</li>
                        </ol>
                        <div className="info order">
                            <p className="changing"><a href="/#" title="Title" className="read">Виберіть автомобіль</a>
                            </p>
                            <div className="add">
                                <p className="read">Вартість:</p>
                                <p className="read price"><strong>1300</strong> грн/день</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="car">
                    <div className="data">
                        <h3 className="info read">Chevrolet Lacetti</h3>
                        <ol className="info">
                            <li className="text read">Застава:</li>
                            <li className="mean read">10 тыс грн</li>
                        </ol>
                        <ol className="info">
                            <li className="text read">Різновид КПП:</li>
                            <li className="mean read">Автоматическая</li>
                        </ol>
                        <ol className="info">
                            <li className="text read">Кузов/привід:</li>
                            <li className="mean read">Седан/передній</li>
                        </ol>
                        <ol className="info">
                            <li className="text read">Паливо/витрати:</li>
                            <li className="mean read">(АИ-95) 8л/100км</li>
                        </ol>
                        <ol className="info">
                            <li className="text read">Доп. опції:</li>
                            <li className="mean read">Кондиціонер</li>
                        </ol>
                        <div className="info order">
                            <p className="changing"><a href="/#" title="Title" className="read">Виберіть автомобіль</a>
                            </p>
                            <div className="add">
                                <p className="read">Вартість:</p>
                                <p className="read price"><strong>1200</strong> грн/день</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="car">
                    <div className="data">
                        <h3 className="info read">Chevrolet Aveo</h3>
                        <ol className="info">
                            <li className="text read">Застава:</li>
                            <li className="mean read">10 тыс грн</li>
                        </ol>
                        <ol className="info">
                            <li className="text read">Різновид КПП:</li>
                            <li className="mean read">Автоматическая</li>
                        </ol>
                        <ol className="info">
                            <li className="text read">Кузов/привід:</li>
                            <li className="mean read">Седан/передній</li>
                        </ol>
                        <ol className="info">
                            <li className="text read">Паливо/витрати:</li>
                            <li className="mean read">(АИ-95) 8л/100км</li>
                        </ol>
                        <ol className="info">
                            <li className="text read">Доп. опції:</li>
                            <li className="mean read">Кондиціонер</li>
                        </ol>
                        <div className="info order">
                            <p className="changing"><a href="/#" title="Title" className="read">Виберіть автомобіль</a>
                            </p>
                            <div className="add">
                                <p className="read">Вартість:</p>
                                <p className="read price"><strong>1400</strong> грн/день</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ChoiceZone;