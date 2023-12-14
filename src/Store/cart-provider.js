import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = props => {

    const [items, setItems] = useState([])
    const [totalAmount, setTotalAmount] = useState(0);

    const addItemToCart = (id, price, amount, name) => {
        setItems((prev) => {
            let updatedItems;
            const idx = prev.findIndex(item => item.id === id);
            if(prev[idx]) {
                updatedItems = prev;
                updatedItems[idx].amount += amount;
            } else {
                updatedItems = [{ id: id, price: price, amount: amount, name: name }, ...prev]
            } 
            return updatedItems;
        })
        setTotalAmount(totalAmount + amount*price);
    }

    const removeItemFromCart = (id) => {
        setItems((prev) => {
            let updatedItems;
            const idx = prev.findIndex(item => item.id == id);
            if(prev[idx]) {
                updatedItems = prev;
                updatedItems[idx].amount -= 1;
            } else {
                updatedItems = prev.filter(item => item.id !== id)
            } 
            setTotalAmount(totalAmount-prev[idx].price);
            return updatedItems;
        })
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