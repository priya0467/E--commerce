import React from "react";
import classes from "./cartitem.module.css";

const CartAdd = (props) => {
    // Check if props.price is defined before calling toFixed
    const price = props.price ? `$${props.price.toFixed(2)}` : '';

    return (
        <li className={classes.list}>
            <div>
                <div className={classes.summary}>
                    <span className={classes.image}><img src={props.image} alt={props.titile} /></span>
                    <span className={classes.name}>{props.name}</span>
                    <span className={classes.price}>{price}</span>
                    <span className={classes.amount}>x {props.amount}</span>
                </div>
            </div>
            <div className={classes.action}>
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
};

export default CartAdd;

