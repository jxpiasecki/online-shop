import {createSelector} from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);

// export const selectCartItemsCount = createSelector(
//     [selectCartItems],
//     cartItems => cartItems.reduce(
//         (counter, item) => counter + item.quantity, 0
//     )
// );