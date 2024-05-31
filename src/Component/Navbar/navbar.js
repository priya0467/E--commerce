import { Link } from "react-router-dom";
import classes from "./navbar.module.css"
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import CartContext from "../../Context/Cartcontext";



function NavScroll() {
  const cartctx=useContext(CartContext);
     
    const numberOfCartItem=cartctx.items.reduce((curNumber,item)=>{
        return curNumber+item.amount;
    },0);

  return (
        <div className={classes.navbar}>
            <div className={classes.logo}>logo</div>
            <div className={classes.links}>
                <Link to="/home">Home</Link>
                <Link to="/store">Store</Link>
                <Link to="/about">About</Link>
                <Link to="/product">Product</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/cart"><FaCartShopping /><span className={classes.cart}>{numberOfCartItem}</span></Link>
            </div>
        </div>
  );
}

export default NavScroll;