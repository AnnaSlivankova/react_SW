import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {StateType} from "./index";
import FriendsBar from "./components/Navbar/FriendsBar/FriendsBar";

export type AppPropsType = {
    state: StateType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar state={props.state}/>
                <div className={'app-wrapper-dialogs'}>
                    <Route path='/dialogsItems' render={() => <Dialogs
                        dialogs={props.state.dialogPage.dialogs}
                        messages={props.state.dialogPage.messages}
                    />}
                    />
                    <Route path='/profile' render={() => <Profile
                        posts={props.state.profilePage.posts}
                    />}
                    />
                    <Route path='/news' render={News}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={Settings}/>
                </div>

                {/*<FriendsBar friend={props.state.dialogPage.dialogs}/>*/}

            </div>
        </BrowserRouter>
    );
}

export default App;
