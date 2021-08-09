import React from "react";
import classes from "../Layout/Header.module.css";
import mealsImage from '../../assests/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";
function Header(props)
{
    return <React.Fragment>
                <header className={classes.header}>
                    <h1>ReactMeals</h1>
                    <HeaderCartButton onClick = {props.onShowCart}/>
                </header>
                    <div className={classes['main-image']}>
                        <img src= {mealsImage} alt= "table full of food"></img>
                    </div>
                
           </React.Fragment>
}
export default Header;