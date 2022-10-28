import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogsItems from "./DialogItems/DialogsItems";
import DialogMessage from "./DialogMessage/DialogMessage";

const dialogs = [
    {id: 1, name: "Anna"},
    {id: 2, name: "Alex"},
    {id: 3, name: "Ron"},
    {id: 4, name: "Helga"},
]
const messages = [
    {id: 1, message: "Hi! When do you come to as?"},
    {id: 2, message: "Nice to meet you!"},
    {id: 3, message: "Call you boss! Immediately...he is so angry"},
    {id: 4, message: "You need this car)) have a look..."},
]

const dialogsElement = dialogs.map(d => <DialogsItems id={d.id} name={d.name}/>)
const messagesElement = messages.map(m => <DialogMessage message={m.message}/>)

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    );
}

export default Dialogs;