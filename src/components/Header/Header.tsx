import React from 'react';
import c from './Header.module.css';
import logo from './logo.jpeg';

const Header = () => {
    return (
        <header className={c.header}>
            <img src={logo}/>
        </header>
    );
}

export default Header;