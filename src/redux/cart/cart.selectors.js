import {createSelector} from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (counter, item) => counter + item.quantity, 0
    )
);
export const selectCartItemsTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (counter, item) => counter + (item.quantity*item.price), 0.0
    )
);

