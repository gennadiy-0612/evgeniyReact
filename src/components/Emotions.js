import React from 'react';

function Emotions() {
    function backGo(e) {
        e.preventDefault();
        console.log('back')
    }

    function forwardGo(e) {
        e.preventDefault();
        console.log('toward')
    }

    return (
        <div className="emotions" id="counter">
            <h2 className="t">Відгуки</h2>
            <div className="slider show">
                <p className="port"> </p>
                <h3 className="tt">Катерина Воронцова</h3>
                <p className="te">Брала авто Mazda 6 на три дні - и не прогавила. Помітноб що машина була в обслугованні и
                    доглянута. Цена
                    влаштовує. Оформили оренду швидко через інтернет, на все про все пішло хвилин 15</p>
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
                <span className="emotion-number active">1</span>
                <span className="emotion-number">2</span>
                <span className="emotion-number">3</span>
                <span className="emotion-number">4</span>
                <span className="emotion-number">5</span>
            </p>
            <a href="#counter" onClick={backGo} title="Title" className="back-go"> </a>
            <a href="#counter" onClick={forwardGo} title="Title" className="forward-go"> </a>
        </div>

    )
}

export default Emotions;