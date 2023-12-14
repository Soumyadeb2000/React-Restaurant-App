import React, { useContext } from "react";
import classes from "./Cart.module.css"
import Modal from "../UI/Modal";
import CartContext from "../../Store/cart-context";

const Cart = props => {
    const cartContext = useContext(CartContext);

    const deleteItemByOne = (event) => {
        event.preventDefault();
        cartContext.removeItem(event.target.id);
    }
 
    const addItemByOne = (event) => {
        event.preventDefault();
        const idx = cartContext.items.findIndex(item => item.id == event.target.id)
        const amount = 1;
        const price = cartContext.items[idx].price;
        const name = cartContext.items[idx].name;
        cartContext.addItem(Number(event.target.id),  price, amount, name);
    }

    const cartItems = cartContext.items.map(item => {
        if (item.amount > 0) {
            return (
                <li className={classes.meal}>
                    <div>
                        <h3>{item.name}</h3>
                        <div className={classes.price}>{item.price} x {item.amount}</div>
                    </div>
                    <div>
                        <button id={item.id} onClick={deleteItemByOne}>-</button>
                        <button id={item.id} onClick={addItemByOne}>+</button>
                    </div>
                </li>
            );
        }
    })

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