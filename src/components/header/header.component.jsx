import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import SignInAndSignUpPage from "../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

const Header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/shop">Contact</Link>
            <Link className="option" to="/sign-in">Sign in/up</Link>
        </div>
    </div>
)

export default Header;