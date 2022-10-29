import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {DialogsType, MessagesType, PostsType} from './Redux/State'

export type StateType = {
    profilePage: {
        posts: Array<PostsType>
    }
    dialogPage: {
        dialogs: Array<DialogsType>
        messages: Array<MessagesType>
    }
}

ReactDOM.render(
    <App state={state}/>,
    document.getElementById('root')
);
