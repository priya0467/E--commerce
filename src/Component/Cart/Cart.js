import React, { useContext } from "react";
import CartContext from "../../Context/Cartcontext";
import CartAdd from "./cartitem";
import classes from "./cart.module.css";

const Cart = () => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem(item);
    };

    return (
        <>
            <ul className={classes.cart}>
                {cartCtx.items.map((item) => (
                    <CartAdd
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                        image={item.image}
                        onRemove={() => cartItemRemoveHandler(item.id)} // Updated onClick handler
                        onAdd={() => cartItemAddHandler(item)} // Updated onClick handler
                    />
                ))}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.action}>
                <button className={classes.btn}>Close</button>
                {hasItems && <button className={classes.order}>Order</button>}
            </div>
        </>
    );
};

export default Cart;


