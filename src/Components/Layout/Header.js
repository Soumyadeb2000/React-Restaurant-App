import React from "react";
import classes from './Header.module.css';
import banner from './meals.jpg';
import CartButton from './HeaderCartButton';

const Header = props => {
    
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <CartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={banner} alt='Error Loading' />
            </div>
            
        </React.Fragment>
    );
}

export default Header;