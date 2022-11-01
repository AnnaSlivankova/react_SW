import React from 'react';
import s from './../Dialogs.module.css';

type DialogMessageType = {
    message: string
}

const DialogMessage = (props: DialogMessageType) => {
    return <div className={s.message}> {props.message}</div>
}

export default DialogMessage;