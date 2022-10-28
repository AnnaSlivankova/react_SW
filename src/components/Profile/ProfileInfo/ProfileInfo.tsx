import React from 'react';
import s from './ProfileInfo.module.css';
import ava from './ava.jpg'
import pic from './pic.jpeg'

const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={pic}/>
            </div>
            <div>
                <img className={s.ava} src={ava}/>
                avator+description
            </div>
        </div>


    );
}

export default ProfileInfo;