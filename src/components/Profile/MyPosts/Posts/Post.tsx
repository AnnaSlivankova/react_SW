import React from 'react';
import b from './Post.module.css';

export type PostsType = {
    message: string
    like: number
}

const Post = (props: PostsType) => {
    return (
        <div className={b.item}>
            <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxB9HhqQE3hXGbL1j0AMd43X36-yVaVHWjWQ&usqp=CAU'}/>
            {props.message}
            <div>
                <span>like {props.like}</span>
            </div>
        </div>
    );
}

export default Post;