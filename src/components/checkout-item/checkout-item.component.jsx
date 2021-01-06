import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem: {name, quantity, price, imageUrl}}) => (
    <div className="checkout-item">
        <div className="image-container">
            <img alt="item" src={imageUrl}/>
        </div>
        <span className="name">{name}</span>
        <span className="name">{quantity}</span>
        <span className="name">{price}</span>
        <div className="remove-button">&#10005;</div>
    </div>
)

export default CheckoutItem;