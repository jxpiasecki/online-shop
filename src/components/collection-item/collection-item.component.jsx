import React from 'react';
import './collection-item.styles.scss';

import CustomButton from "../custom-button/custom-button.component";

import {connect} from 'react-redux';
import {addItem} from "../../redux/cart/cart.actions";

const CollectionItem = ({item, addItem}) => {
    const {id, name, imageUrl, price} = item;
    return (
        <div className="collection-item">
            <h4>{name}</h4>
            <div className="image" style={{
                backgroundImage: `url(${imageUrl})  `
            }}></div>
            <div className="collection-footer">
                <div className="name">{name}</div>
                <div className="price">PLN {price}</div>
            </div>
            <CustomButton inverted={true} onClick={() => addItem(item)}>Add to cart</CustomButton>
        </div>
    );
}

const mapStateToProps = null;
// const mapStateToProps = (state) => ({
//     cartItems: state.cart.cartItems
// })

//const mapDispatchToProps = null;
const mapDispatchToProps = (dispatch) => ({
    addItem: (data) => dispatch(addItem(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
