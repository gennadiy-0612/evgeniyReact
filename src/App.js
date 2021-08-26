import React from 'react';
import '../src/assets/css/style.css';
import Header from "./components/Header";
import Rent from "./components/Rent";
import Back from "./components/Back";
import ChoiceZone from "./components/ChoiceZone";
import Conditions from "./components/Conditions";
import Free from "./components/Free";
import Advantages from "./components/Advantages";
import Emotions from "./components/Emotions";
import Emotions from "./components/RentAuto";

function App() {
    return (
        <div className="App main">
            <Header/>
            <Rent/>
            <Back/>
            <ChoiceZone/>
            <Conditions/>
            <Free/>
            <Advantages/>
            <Emotions/>
            {/*<app-rentauto></app-rentauto>*/}
            {/*<app-faq></app-faq>*/}
            {/*<app-morefaq></app-morefaq>*/}
            {/*<app-contacts></app-contacts>*/}
            {/*<app-foot></app-foot>*/}
        </div>
    );
}

export default App;
