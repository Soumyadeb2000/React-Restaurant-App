import React from "react"
import classes from "./MealsList.module.css"
import MealItem from "./MealItem";
import Card from "../UI/Card";


const list = [
    {
        id: 1,
        name: 'Sushi',
        desc: 'Finest fish and veggies',
        price: 22.99
    },
    {
        id: 2,
        name: 'Schintzel',
        desc: 'A german specialty',
        price: 16.50
    },
    {
        id: 3,
        name: 'Burger',
        desc: 'American,raw,meaty',
        price: 12.99
    },
    {
        id: 4,
        name: 'Green Bowl',
        desc: 'Healty and green',
        price: 10.99
    }
];

const MealsList = props => {

    const meals = list.map((item) => {
        return (<React.Fragment>
            <MealItem key={item.id} name={item.name} desc={item.desc} price={item.price} />
        </React.Fragment>

        );
    });

    return (
        <section className={classes.meals}>
            <Card>
            <ul>
                {meals}
            </ul>
            </Card>
        </section>
    );
}

export default MealsList;