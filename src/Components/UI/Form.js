import React from "react";
import classes from "./Form.module.css"

const Form = props => {
    return (
        <div className={classes.form}>
            <form>
                <div className={classes.input}>
                    <label>Amount</label>
                    <input name="amount" type="number"/>
                </div>
                <div>
                    <button>+Add</button>
                </div>
            </form>
        </div>
    );
}

export default Form;