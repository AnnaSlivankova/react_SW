import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {DialogsType, MessagesType, PostsType} from "./index";
import {BrowserRouter, Route} from "react-router-dom";

type AppPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    posts: PostsType[]
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-dialogs'}>
                    <Route path='/dialogsItems' render={() => <Dialogs
                        dialogs={props.dialogs}
                        messages={props.messages}
                    />}
                    />
                    <Route path='/profile' render={() => <Profile
                        posts={props.posts}
                    />}
                    />
                    <Route path='/news' render={News}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
