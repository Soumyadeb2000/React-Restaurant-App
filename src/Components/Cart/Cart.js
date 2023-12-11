import React, {useContext} from "react";
import classes from "./Cart.module.css"
import Modal from "../UI/Modal";
import CartContext from "../../Store/cart-context";

const Cart = props => {

    const cartContext = useContext(CartContext);
    const cartItems = cartContext.items.map(item => {
        return (
            <li>{item.name} * {item.amount}</li>
        );
    });

    const hideCart = () => {
        props.displayCart(false);
    }
    
    return (
        <Modal>
            <ul className={classes["cart-items"]}>{cartItems}</ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{cartContext.totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={hideCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;