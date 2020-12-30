import {CartActionTypes} from "./cart.types";

export const toggleCartHidden = (data) => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
    //placeholder: data
})

export const addItem = (data) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: data
})