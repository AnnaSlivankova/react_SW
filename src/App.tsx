import React from 'react';
import './App.css';
import Header from "./Header";
import Technologies from "./Technologies";
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div>
            <input/>
            <input type="password"/>
            <input type="date"/>
            <Header/>
            <Technologies/>
            <Accordion titleValue={"Menu"} collapsedValue={true}/>
            <Accordion titleValue={"Users"} collapsedValue={false}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Rating value={20}/>
            <div className="App">
                Hello, samurai! Let's go! I can do this!
            </div>
        </div>
    );
}

export default App
