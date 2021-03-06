import React from 'react';

function Emotions() {
    let change = {
        is: 0,
        counter: 0,
        changeAll: 0,
        allItems: {},
        indicate: {}
    }

    function cashedList(classTag, indicate) {
        if (!change.is) {
            change.allItems = document.querySelectorAll(classTag);
            change.indicate = document.querySelectorAll(indicate);
            change.changeAll = change.allItems.length - 1;
            change.is = 1;
        }
    }

    function backGo(e) {
        e.preventDefault();
        cashedList('.slider', '.emotion-number');
        change.allItems[change.counter].setAttribute('class', 'slider');
        change.indicate[change.counter].setAttribute('class', 'emotion-number');
        change.counter--;
        if (change.counter < 0) change.counter = change.changeAll;
        change.allItems[change.counter].setAttribute('class', 'slider show');
        change.indicate[change.counter].setAttribute('class', 'emotion-number active');
    }

    function forwardGo(e) {
        e.preventDefault();
        cashedList('.slider', '.emotion-number');
        change.allItems[change.counter].setAttribute('class', 'slider');
        change.indicate[change.counter].setAttribute('class', 'emotion-number');
        change.counter++;
        if (change.counter > change.changeAll) change.counter = 0;
        change.allItems[change.counter].setAttribute('class', 'slider show');
        change.indicate[change.counter].setAttribute('class', 'emotion-number active');
    }

    function indicateChange(e) {
        cashedList('.slider', '.emotion-number');
        change.allItems[change.counter].setAttribute('class', 'slider');
        change.indicate[change.counter].setAttribute('class', 'emotion-number');
        change.counter = e.target.textContent - 1;
        change.allItems[change.counter].setAttribute('class', 'slider show');
        change.indicate[change.counter].setAttribute('class', 'emotion-number active');
    }

    return (
        <div className="emotions" id="counter">
            <h2 className="t">Відгуки</h2>
            <div className="slider show">
                <p className="port"> </p>
                <h3 className="tt">Катерина Воронцова</h3>
                <p className="te">Брала авто Mazda 6 на три дні - и не прогавила. Помітноб що машина була в обслугованні и доглянута. Цена влаштовує. Оформили оренду швидко через інтернет, на все про все пішло хвилин 15</p>
                <div className="buttons">
                    <a href="/#" title="Title" className="make choice">Аудіо-відгук</a>
                    <a href="/#" title="Title" className="make choice">Відео-відгук</a>
                </div>
            </div>
            <div className="slider">
                <p className="port"> </p>
                <h3 className="tt">Александр</h3>
                <p className="te">Хороші хлопці, товариські, ввічливі, завжди готові допомогти, підказати. Автомобіль
                    виявився без проблем, в загальному всім задоволений. Бажаю удачі і хороших клієнтів. Рекомендую
                    (ЯНАО).</p>
                <div className="buttons">
                    <a href="/#" title="Title" className="make choice">Аудіо-відгук</a>
                    <a href="/#" title="Title" className="make choice">Відео-відгук</a>
                </div>
            </div>
            <div className="slider">
                <p className="port"> </p>
                <h3 className="tt">Станислав </h3>
                <p className="te">Умови прокату, оперативність, технічний стан автомобілів на рівні. Спасибі!</p>
                <div className="buttons">
                    <a href="/#" title="Title" className="make choice">Аудіо-відгук</a>
                    <a href="/#" title="Title" className="make choice">Відео-відгук</a>
                </div>
            </div>
            <div className="slider">
                <p className="port"> </p>
                <h3 className="tt">Роман Ивашов</h3>
                <p className="te">Хороші автомобілі і господар, і ставлення до клієнтів. Раджу</p>
                <div className="buttons">
                    <a href="/#" title="Title" className="make choice">Аудіо-відгук</a>
                    <a href="/#" title="Title" className="make choice">Відео-відгук</a>
                </div>
            </div>
            <div className="slider">
                <p className="port"> </p>
                <h3 className="tt">Алексей</h3>
                <p className="te">Машина в хорошому технічному стані, звозила на "дальняк" без ексцесів.</p>
                <div className="buttons">
                    <a href="/#" title="Title" className="make choice">Аудіо-відгук</a>
                    <a href="/#" title="Title" className="make choice">Відео-відгук</a>
                </div>
            </div>
            <p className="counter">
                <span className="emotion-number active" onClick={indicateChange}>1</span>
                <span className="emotion-number" onClick={indicateChange}>2</span>
                <span className="emotion-number" onClick={indicateChange}>3</span>
                <span className="emotion-number" onClick={indicateChange}>4</span>
                <span className="emotion-number" onClick={indicateChange}>5</span>
            </p>
            <a href="#counter" onClick={backGo} title="Title" className="back-go"> </a>
            <a href="#counter" onClick={forwardGo} title="Title" className="forward-go"> </a>
        </div>

    )
}

export default Emotions;