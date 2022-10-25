import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogsItemType = {
    id: string
    name: string
}
type DialogMessageType = {
    message: string
}

const DialogsItems = (props: DialogsItemType) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}
const DialogMessage = (props: DialogMessageType) => {
    return <div className={s.message}>{props.message}</div>
}


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogsItems id="anna" name="Anna"/>
                <DialogsItems id="alex" name="Alex"/>
                <DialogsItems id="ron" name="Ron"/>
                <DialogsItems id="helga" name="Helga"/>
            </div>
            <div className={s.messages}>
                <DialogMessage message={"Hi! When do you come to as?"}/>
                <DialogMessage message={"Nice to meet you!"}/>
                <DialogMessage message={"Call you boss! Immediately...he is so angry"}/>
                <DialogMessage message={"You need this car)) look..."}/>
            </div>
        </div>
    );
}

export default Dialogs;