import React from 'react';
import s from './Dialogs.module.css';
import DialogsItems from "./DialogItems/DialogsItems";
import DialogMessage from "./DialogMessage/DialogMessage";
import {DialogsType, MessagesType} from "../../../src/Redux/State";


type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

const Dialogs = (props: DialogsPropsType) => {
    const dialogsElement = props.dialogs.map(d => <DialogsItems id={d.id} name={d.name}/>)
    const messagesElement = props.messages.map(m => <DialogMessage message={m.message}/>)

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