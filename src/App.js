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
import RentAuto from "./components/RentAuto";
import Faq from "./components/Faq";
import MoreFaq from "./components/MoreFaq";
import Contact from "./components/Contacts";
import Foot from "./components/Foot";

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
            <RentAuto/>
            <Faq/>
            <MoreFaq/>
            <Contact/>
            <Foot/>
        </div>
    );
}

export default App;
