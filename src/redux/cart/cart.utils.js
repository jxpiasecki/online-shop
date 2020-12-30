export const addItemToCart = (cartItems, newCartItem) => {
    const existingCartItem = cartItems.find(
        item => item.id == newCartItem.id
    );

    if (existingCartItem) {
        return cartItems.map(
            item => item.id == newCartItem.id
                ? {
                    ...item,
                    quantity: item.quantity+1
                }
                : item
        );
    }

    newCartItem.quantity = 1;
    //newCartItem = {...newCartItem, quantity: 1};
    return [...cartItems, newCartItem]
}