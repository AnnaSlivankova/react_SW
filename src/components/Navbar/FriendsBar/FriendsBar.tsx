import React from 'react';
import s from './FriendsBar.module.css';
import {DialogsType} from "../../../Redux/State";
import FriendItem from "./FriendsItem";

type FriendsBarType = {
    friend: Array<DialogsType>
}

const FriendsBar = (props: FriendsBarType) => {
    const friendElement = props.friend.map(f => <FriendItem avatar={f.avatar} name={f.name}/>)
    return (
            <div className={s.fb}>
                <div className={s.title}> My Friends </div>
                <div className={s.avaName}> {friendElement} </div>
            </div>
    );
}

export default FriendsBar;