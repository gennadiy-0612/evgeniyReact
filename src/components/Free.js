import React from 'react';

function Free() {

    return (
        <div className="free">
            <h2 className="cons">БЕЗКОШТОВНА КОНСУЛЬТАЦІЯ</h2>
            <form className="call-back" method="post" id="ajax_form" action="#">
                <h3 className="tf">Введіть свої данні</h3>
                <p className="massage">мы перетелефонуєм протягом <strong>5</strong><br/> хвилин и проконсультуємо Вас
                </p>
                <input className="call-name" type="text" name="name" placeholder="Дмитро"/>
                    <input className="call-phone mask" type="tel" name="phonenumber" placeholder="+3 (096) 000-00-00"
                           pattern="[7-9]{1}[0-9]{9}"
                           title="Phone number with 7-9 and remaing 9 digit with 0-9"/>
                        <input className="send-number" type="submit" value="Замовити дзвінок"/>
                            <div className="agreed">
                                <input className="agree" type="checkbox"/>
                                <p className="agreement">Натискаючи на кнопку ви погоджуєтеся з політикою
                                    конфіденційності.</p>
                            </div>
                            <div id="result_form">Надіслано</div>
            </form>
            <p className="our">Наші клієнти відзначають факт, <strong> ввічливого</strong> спілкування. Зв'яжіться і
                переконайтесь самі.</p>
        </div>

)
}

export default Free;