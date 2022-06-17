import React from 'react';
import b from './Post.module.css';

const Post = () => {
    return (
        <div className={b.item}>
            <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxB9HhqQE3hXGbL1j0AMd43X36-yVaVHWjWQ&usqp=CAU'}/>
            post 1
            <div><span>like</span></div>
        </div>
    );
}

export default Post;