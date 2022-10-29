import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Posts/Post";
import {PostsType} from "../Profile";


// type PostType = {
//     id: number
//     message: string
//     like: number
// }

type MyPostsPropsType = {
    posts: PostsType[]
}

// const posts = [
//     {id: 1, message: "This is my first message", like: 1},
//     {id: 2, message: "I bought a dog", like: 50},
//     {id: 3, message: "Guys, should i buy a new car?", like: 19},
//     {id: 4, message: "Hello, guess my name?", like: 4},
// ]

// const postsElement = posts.map(p => <Post message={p.message} like={p.like}/>)

const MyPosts = (props: MyPostsPropsType) => {
    let postElements = props.posts.map(p => <Post message={p.message} like={p.like}/>)
    return (
        <div>
            My posts
            <div className={s.AddPostItem}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add new post</button>
                </div>
            </div>

            <div className={s.content}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;