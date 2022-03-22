import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    //extract keys of a given object and turn it into an array
    let transormedIngredients = Object.keys( props.ingredients ).map( igKey => {
        //... is the spread operator
        return [...Array( props.ingredients[igKey] )].map( (_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    
    if (transormedIngredients.length === 0) {
        transormedIngredients = <p>Please start adding ingredients!</p>
    };

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transormedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
