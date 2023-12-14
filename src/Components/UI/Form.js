import React, {useContext} from "react";
import classes from "./Form.module.css"
import CartContext from "../../Store/cart-context";

const Form = props => {
    const cartContext = useContext(CartContext);

    const updateCart = (e) => {
        e.preventDefault();
        const amount = e.target.amount.value * 1;
        cartContext.addItem(props.id, props.price, amount, props.name)
    }

    return (
        <div className={classes.form}>
            <form onSubmit={updateCart}>
                <div className={classes.input}>
                    <label>Amount</label>
                    <input name="amount" type="number"/>
                </div>
                <div>
                    <button type="submit">+Add</button>
                </div>
            </form>
        </div>
    );
}

export default Form;