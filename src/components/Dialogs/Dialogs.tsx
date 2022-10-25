import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>Anna</div>
                <div className={s.dialog}>Alex</div>
                <div className={s.dialog}>Ron</div>
                <div className={s.dialog}>Helga</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi! When do you come to as?</div>
                <div className={s.message}>Nice to meet you!</div>
                <div className={s.message}>Call you boss! Immediately...he is so angry</div>
                <div className={s.message}>You need this car)) look...</div>
            </div>
        </div>
    );
}

export default Dialogs;