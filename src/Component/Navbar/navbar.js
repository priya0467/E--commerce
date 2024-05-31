import { Link } from "react-router-dom";
import classes from "./navbar.module.css"
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import CartContext from "../../Context/Cartcontext";
import { UseuserAuth } from "../../Context/UserAuth";



function NavScroll() {
  const cartctx=useContext(CartContext);
  const{user,logOut}=UseuserAuth();
     
    const numberOfCartItem=cartctx.items.reduce((curNumber,item)=>{
        return curNumber+item.amount;
    },0);
  
    const handeleLogout=async()=>{
      try{
          await logOut();
      }catch(err){
        console.log(err.message)
      }
    }
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
                <div className={classes.btn}>
                    <button onClick={handeleLogout}>Log Out</button>
                </div>
            </div>
        </div>
  );
}

export default NavScroll;