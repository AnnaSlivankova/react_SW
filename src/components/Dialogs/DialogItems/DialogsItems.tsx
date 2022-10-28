import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogsItemType = {
    id: number
    name: string
}

const DialogsItems = (props: DialogsItemType) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={"/dialogsItems/" + props.id}>{props.name}</NavLink>
    </div>
}

export default DialogsItems;