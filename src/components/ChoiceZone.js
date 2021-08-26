import React from 'react';
import Images from '../assets/img/index'

function ChoiceZone() {
    function handleClick(e) {
        e.preventDefault();
        console.log('Посилання було натиснуте.');
    }
    return (
        <div className="choice zone">
            <h2 class="choice title">ОБЕРІТЬ АВТОМОБІЛЬ</h2>
            <h3 class="variant">Оберіть різновид <strong>КПП</strong></h3>
            <ul class="what">
                <li  onClick={handleClick} className=" li">Механічна</li>
            <li onClick={handleClick} className=" li">Автоматична</li>
            </ul>
    // <div class="techno auto {{autoDetailAct}}">
    //     <div class="car">
    //         <div class="data">
    //             <h3 class="info read">ВАЗ kalina</h3>
    //             <ol class="info">
    //                 <li class="text read">Застава:</li>
    //                 <li class="mean read">5 тыс грн</li>
    //             </ol>
    //             <ol class="info">
    //                 <li class="text read">Різновид КПП:</li>
    //                 <li class="mean read">Механіка</li>
    //             </ol>
    //             <ol class="info">
    //                 <li class="text read">Кузов/привід:</li>
    //                 <li class="mean read">Хетчбэк 5 дв/передній</li>
    //             </ol>
    //             <ol class="info">
    //                 <li class="text read">Паливо/витрати:</li>
    //                 <li class="mean read">(АИ-95) 8л/100км</li>
    //             </ol>
    //             <ol class="info">
    //                 <li class="text read">Доп. опції:</li>
    //                 <li class="mean read">-</li>
    //             </ol>
    //             <div class="info order">
    //                 <p class="changing"><a routerLink="#" title="Title" class="read">Виберіть автомобіль</a></p>
    //                 <div class="add">
    //                     <p class="read">Вартість:</p>
    //                     <p class="read price"><strong>900</strong> грн/день</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     <div class="car">
    //         <div class="data">
    //             <h3 class="info read">ВАЗ 2112</h3>
    //             <ol class="info">
    //                 <li class="text read">Застава:</li>
    //                 <li class="mean read">5 тыс грн</li>
    //             </ol>
    //             <ol class="info">
    //                 <li class="text read">Різновид КПП:</li>
    //                 <li class="mean read">Механіка</li>
    //             </ol>
    //             <ol class="info">
    //                 <li class="text read">Кузов/привід:</li>
    //                 <li class="mean read">Хетчбэк 5 дв/передній</li>
    //             </ol>
    //             <ol class="info">
    //                 <li class="text read">Паливо/витрати:</li>
    //                 <li class="mean read">(АИ-95) 8л/100км</li>
    //             </ol>
    //             <ol class="info">
    //                 <li class="text read">Доп. опції:</li>
    //                 <li class="mean read">-</li>
    //             </ol>
    //             <div class="info order">
    //                 <p class="changing"><a routerLink="#" title="Title" class="read">Виберіть автомобіль</a></p>
    //                 <div class="add">
    //                     <p class="read">Вартість:</p>
    //                     <p class="read price"><strong>800</strong> грн/день</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    // <div class="techno mech {{techDetailAct}}">
    //     <div class="car">
    //         <div class="data">
    //             <h3 class="info read">Mazda 6</h3>
    //             <ol class="info">
    //                 <li class="text read">Застава:</li>
    //                 <li class="mean read">10 тыс грн</li>
    //             </ol>
    //             <ol class="info">
    //                 <li class="text read">Різновид КПП:</li>
    //                 <li class="mean read">Автоматическая</li>
    //             </ol>
    //             <ol class="info">
    //                 <li class="text read">Кузов/привід:</li>
    //                 <li class="mean read">Седан/передній</li>
    //             </ol>
    //             <ol class="info">
    //                 <li class="text read">Паливо/витрати:</li>
    //                 <li class="mean read">(АИ-95) 8л/100км</li>
    //             </ol>
    //             <ol class="info">
    //                 <li class="text read">Доп. опції:</li>
    //                 <li class="mean read">Кондиціонер</li>
    //             </ol>
    //             <div class="info order">
    //                 <p class="changing"><a routerLink="#" title="Title" class="read">Виберіть автомобіль</a></p>
    //                 <div class="add">
    //                     <p class="read">Вартість:</p>
    //                     <p class="read price"><strong>1300</strong> грн/день</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     <div class="car">
    //         <div class="data">
    //             <h3 class="info read">Chevrolet Lacetti</h3>
    //             <ol class="info">
    //                 <li class="text read">Застава:</li>
    //                 <li class="mean read">10 тыс грн</li>
    //             </ol>
    //             <ol class="info">
    //                 <li class="text read">Різновид КПП:</li>
    //                 <li class="mean read">Автоматическая</li>
    //             </ol>
    //             <ol class="info">
    //                 <li class="text read">Кузов/привід:</li>
    //                 <li class="mean read">Седан/передній</li>
    //             </ol>
    //             <ol class="info">
    //                 <li class="text read">Паливо/витрати:</li>
    //                 <li class="mean read">(АИ-95) 8л/100км</li>
    //             </ol>
    //             <ol class="info">
    //                 <li class="text read">Доп. опції:</li>
    //                 <li class="mean read">Кондиціонер</li>
    //             </ol>
    //             <div class="info order">
    //                 <p class="changing"><a routerLink="#" title="Title" class="read">Виберіть автомобіль</a></p>
    //                 <div class="add">
    //                     <p class="read">Вартість:</p>
    //                     <p class="read price"><strong>1200</strong> грн/день</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     <div class="car">
    //         <div class="data">
    //             <h3 class="info read">Chevrolet Aveo</h3>
    //             <ol class="info">
    //                 <li class="text read">Застава:</li>
    //                 <li class="mean read">10 тыс грн</li>
    //             </ol>
    //             <ol class="info">
    //                 <li class="text read">Різновид КПП:</li>
    //                 <li class="mean read">Автоматическая</li>
    //             </ol>
    //             <ol class="info">
    //                 <li class="text read">Кузов/привід:</li>
    //                 <li class="mean read">Седан/передній</li>
    //             </ol>
    //             <ol class="info">
    //                 <li class="text read">Паливо/витрати:</li>
    //                 <li class="mean read">(АИ-95) 8л/100км</li>
    //             </ol>
    //             <ol class="info">
    //                 <li class="text read">Доп. опції:</li>
    //                 <li class="mean read">Кондиціонер</li>
    //             </ol>
    //             <div class="info order">
    //                 <p class="changing"><a routerLink="#" title="Title" class="read">Виберіть автомобіль</a></p>
    //                 <div class="add">
    //                     <p class="read">Вартість:</p>
    //                     <p class="read price"><strong>1400</strong> грн/день</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
</div>

)
}

export default ChoiceZone;