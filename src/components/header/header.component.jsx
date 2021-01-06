import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';

import {auth} from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";

import userReducer from "../../redux/user/user.reducer";

import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header.styles.scss';

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

// redux
// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser,
//     toggleCartHidden: state.cart.hidden
// })

//redux using reselect(caching)
// const mapStateToProps = state => ({
//     currentUser: selectCurrentUser(state),
//     toggleCartHidden: selectCartHidden(state)
// })

// redux using reselect(caching) using structured selector
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    toggleCartHidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);