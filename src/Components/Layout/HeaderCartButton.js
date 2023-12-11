import React, {useContext} from "react";
import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/cart-context";


const HeaderCartButton = props => {
    const cartContext = useContext(CartContext);
    
    const showCart = (event) => {
        event.preventDefault();
        props.displayCart(true);
    }
    
    return (
        <button className={classes.button} onClick={showCart}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{cartContext.totalAmount}</span>
        </button>
    );
}

export default HeaderCartButton;