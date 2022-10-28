import React from 'react';
import s from './Post.module.css';
import am from '../../ProfileInfo/ava.jpg';

export type PostsType = {
    message: string
    like: number
}

const Post = (props: PostsType) => {
    return (
        <div className={s.item}>
            <img
                src={am}/>
            {props.message}
            <div>
                <span>like {props.like}</span>
            </div>
        </div>
    );
}

export default Post;