import React from 'react';
import '../src/assets/css/style.css';
import Header from "./components/Header";
import Rent from "./components/Rent";
import Back from "./components/Back";
import ChoiceZone from "./components/ChoiceZone";

function App() {
    return (
        <div className="App main">
            <Header/>
            <Rent/>
            <Back/>
            <ChoiceZone/>
            {/*    <app-choicezone [ngClass]="{'first': true, 'second': true, 'third': false}"></app-choicezone>*/}
            {/*<app-conditions></app-conditions>*/}
            {/*<app-free></app-free>*/}
            {/*<app-advantages class="advantage"></app-advantages>*/}
            {/*<app-imotions></app-imotions>*/}
            {/*<app-rentauto></app-rentauto>*/}
            {/*<app-faq></app-faq>*/}
            {/*<app-morefaq></app-morefaq>*/}
            {/*<app-contacts></app-contacts>*/}
            {/*<app-foot></app-foot>*/}
        </div>
    );
}

export default App;
