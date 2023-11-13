import { useReducer } from "react";
import { CartContext } from "./cartContext";


const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    return defaultCartState
}

export const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addToCartHandler = ()=> {};

    const removeFromCartHandler = () => {};

    const contextValue = {
        totalAmount: cartState.totalAmount,
        items: cartState.items,
        addItem: addToCartHandler,
        removeItem: removeFromCartHandler
    }; 

    return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
} 