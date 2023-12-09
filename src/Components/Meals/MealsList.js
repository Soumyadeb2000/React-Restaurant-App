import React from "react"
import classes from "./MealsList.module.css"
import MealItem from "./MealItem";
import Card from "../UI/Card";

const list = [
    {
        name: 'Sushi',
        desc: 'Finest fish and veggies',
        price: 22.99
    },
    {
        name: 'Schintzel',
        desc: 'A german specialty',
        price: 16.50
    },
    {
        name: 'Burger',
        desc: 'American,raw,meaty',
        price: 12.99
    },
    {
        name: 'Green Bowl',
        desc: 'Healty and green',
        price: 10.99
    }
];

const MealsList = props => {

    const meals = list.map((item) => {
        return <MealItem name={item.name} desc={item.desc} price={item.price}/>
    });

    return (
        <Card className={classes.meals}> 
            <ul>
                {meals}
            </ul>
        </Card>
    );
}

export default MealsList;