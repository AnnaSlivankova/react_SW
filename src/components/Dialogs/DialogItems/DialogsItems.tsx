import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogsItemType = {
    id: number
    name: string
    avatar: string
}

const DialogsItems = (props: DialogsItemType) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={"/dialogsItems/" + props.id}><img className={s.ava} src={props.avatar}/>{props.name}</NavLink>
    </div>
}

export default DialogsItems;