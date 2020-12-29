import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import SignInAndSignUpPage from "../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {auth} from "../../firebase/firebase.utils";

import {connect} from 'react-redux';
import userReducer from "../../redux/user/user.reducer";

const Header = ({currentUser, toggleCartHidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/shop">Contact</Link>
            {
                currentUser
                    ? <div className="option" onClick={() => auth.signOut()}>Sign out</div>
                    : <Link className="option" to="/sign-in">Sign in/up</Link>
            }
            <CartIcon />
        </div>
        {toggleCartHidden ? '' : <CartDropdown />}
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    toggleCartHidden: state.cart.hidden
})

export default connect(mapStateToProps)(Header);