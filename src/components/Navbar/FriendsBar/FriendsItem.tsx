import React from 'react';
import s from '../FriendsBar/FriendsBar.module.css';

type FriendItemType = {
    avatar: string
    name: string
}

const FriendItem = (props: FriendItemType) => {
    return (
            <div>
                <img className={s.ava} src={props.avatar}/>
                {props.name}
            </div>
    );
}

export default FriendItem;