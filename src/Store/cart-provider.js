import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = props => {

    const [items, setItems] = useState([])
    const [totalAmount, setTotalAmount] = useState(0);

    const addItemToCart = (amount, id, price, name) => {
        setItems((prev) => {
            return [{
                id: id, price: price, amount: amount, name: name
            } ,...prev]
        })
        setTotalAmount(totalAmount+amount*price);
    }

    const removeItemFromCart = () => {
        
    }

    const cartContext = {
        items: items,
        totalAmount: totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    }

    return (
        <CartContext.Provider value={cartContext}>
            {console.log(items)}
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;