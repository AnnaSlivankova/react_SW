import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Posts/Post";
import {PostsType} from "./../../../../src/Redux/State";

export type MyPostsPropsType = {
    posts: PostsType[]
}

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