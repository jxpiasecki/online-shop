import {CartActionTypes} from "./cart.types";

export const toggleCartHidden = (data) => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
    //payload: data
})

export const clearItem = (data) => ({
    type: CartActionTypes.CLEAR_ITEM,
    payload: data
})

export const addItem = (data) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: data
})

export const removeItem = (data) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: data
})