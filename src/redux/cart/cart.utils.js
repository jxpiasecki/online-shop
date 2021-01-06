export const addItemToCart = (cartItems, newCartItem) => {
    const existingCartItem = cartItems.find(
        item => item.id == newCartItem.id
    );

    if (existingCartItem) {
        return cartItems.map(
            item => item.id == newCartItem.id
                ? {
                    ...item,
                    quantity: item.quantity + 1
                }
                : item
        );
    }

    newCartItem.quantity = 1;
    //newCartItem = {...newCartItem, quantity: 1};
    return [...cartItems, newCartItem]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        item => item.id == cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== existingCartItem.id);
    }


    return cartItems.map(
        item => item.id == existingCartItem.id
            ? {
                ...item,
                quantity: item.quantity - 1
            }
            : item
    );
}