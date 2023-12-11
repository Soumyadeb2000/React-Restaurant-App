import React from "react";
import classes from './MealItem.module.css';
import Form from "../UI/Form";

const MealItem = props => {
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.desc}</div>
                <div className={classes.price}>{props.price}</div>
            </div>
            <div>
                <Form key={props.name} id={props.id} name={props.name} price={props.price}/>
            </div>
        </li>
    );
}

export default MealItem;