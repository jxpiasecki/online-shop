import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import {selectCartItems, selectCartItemsCount, selectCartItemsTotal} from "../../redux/cart/cart.selectors";

import './checkout.styles.scss';
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = ({cartItems, count, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Qty</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {cartItems && cartItems.map((item) => <CheckoutItem key={item.id} cartItem={item}/>)}
        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    count: selectCartItemsCount,
    total: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);