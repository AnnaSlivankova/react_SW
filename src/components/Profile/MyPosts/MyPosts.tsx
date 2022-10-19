import React from 'react';
import b from './MyPosts.module.css';
import Post from "./Posts/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add new post</button>
            </div>
            <div className={b.content}>
                <Post message={"This is my first message"}
                      like={1}/>
                <Post message={"I bought a dag"}
                      like={50}/>
                <Post message={"Guys, should i bua a new car?"}
                      like={19}/>
                <Post message={"Hello, guess my name?"}
                      like={4}/>
            </div>
        </div>
    );
}

export default MyPosts;