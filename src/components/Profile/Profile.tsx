import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Posts/Post";

export type PostsType = {
    id: number
    message: string
    like: number
}

const posts = [
    {id: 1, message: "This is my first message", like: 1},
    {id: 2, message: "I bought a dog", like: 50},
    {id: 3, message: "Guys, should i buy a new car?", like: 19},
    {id: 4, message: "Hello, guess my name?", like: 4},
]
// const postsElement = posts.map(p => <Post message={p.message} like={p.like}/>)


const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>


    );
}

export default Profile;