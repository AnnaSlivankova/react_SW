import React from 'react';
import c from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsBar from "./FriendsBar/FriendsBar";
import {StateType} from "../../index";
import {AppPropsType} from "../../App";

type NavBarType = {

}

const Navbar = (props: AppPropsType) => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to="/profile" activeClassName={c.active}>Profile</NavLink>
            </div>
            <div className={`${c.item} ${c.active}`}>
                <NavLink to="/dialogsItems" activeClassName={c.active}>Messages</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/news" activeClassName={c.active}>News</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/music' activeClassName={c.active}>Music</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/Settings' activeClassName={c.active}>Settings</NavLink>
            </div>

            <FriendsBar friend={props.state.dialogPage.dialogs}/>

        </nav>
    );
}

export default Navbar;