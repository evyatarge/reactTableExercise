import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (

    <header className="App-header">
        <h1 className="App-title">Employees Table App</h1>

        <nav className="header-nav">
            <span className="page-nav" ><Link className={'link'} to='/'>About</Link></span>
            <span className="page-nav"><Link className={'link'} to='/table'>Table</Link></span>
        </nav>
    </header>

);
export default Header;