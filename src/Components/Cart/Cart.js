import React, {useContext} from "react";
import classes from "./Cart.module.css"
import Modal from "../UI/Modal";
import CartContext from "../../Store/cart-context";

const Cart = props => {
    let totalAmount = 0;
    const cartDetails = [
        {name:'Sushi', amount: 0},
        {name:'Schintzel', amount: 0},
        {name:'Burger', amount: 0},
        {name:'Green Bowl', amount: 0},
    ];

    const cartContext = useContext(CartContext);
    cartContext.items.forEach(item => {
        totalAmount += item.price*item.amount;
        if(item.id === 1) {
            cartDetails[0].amount += item.amount;
        } else if(item.id === 2) {
            cartDetails[1].amount += item.amount;
        } else if(item.id === 3) {
            cartDetails[2].amount += item.amount;
        } else {
            cartDetails[3].amount += item.amount;
        }
    });

    const cartItems = cartDetails.map(item => {
        if(item.amount>0) {
            return (
                <h3><li>{item.name} * {item.amount}</li></h3>
            );
        }
        return
    })

    const hideCart = () => {
        props.displayCart(false);
    }

    return (
        <Modal>
            {console.log(cartDetails)}
            <ul className={classes["cart-items"]}>{cartItems}</ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={hideCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;