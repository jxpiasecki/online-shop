import React from 'react';
import './cart-dropdown.styles.scss';

import CustomButton from "../custom-button/custom-button.component";

import {connect} from 'react-redux';
import {CartItem} from "../cart-item/cart-item.component";
import {selectCartItems} from "../../redux/cart/cart.selectors";

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems &&
                cartItems.map(item => <CartItem key={item.id} item={item}/>)
            }
        </div>
        <CustomButton>Go to checkout</CustomButton>
    </div>
)

// redux
// const mapStateToProps = state => ({
//     cartItems: state.cart.cartItems
// });

// redux using reselect(caching)
const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);