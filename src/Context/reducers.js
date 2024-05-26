import { useEffect, useReducer } from "react";
import CartContext from "./Cartcontext";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {

  if (action.type === 'REPLACE') {
    // Simply replace the state with the provided cart data
    return action.cart;
}
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price;
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + 1 // Increment by 1 when adding an item
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat({ ...action.item, amount: 1 }); // Add new item with amount 1
        }

        const updatedState = {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };

        // Update local storage immediately
        localStorage.setItem('cart', JSON.stringify(updatedState));

        return updatedState;
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;

        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        const updatedState = {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };

        // Update local storage immediately
        localStorage.setItem('cart', JSON.stringify(updatedState));

        return updatedState;
    }

    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    useEffect(() => {
        const storedCartData = localStorage.getItem('cart');
        if (storedCartData) {
            dispatchCartAction({ type: 'REPLACE', cart: JSON.parse(storedCartData) });
        }
    }, []);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;