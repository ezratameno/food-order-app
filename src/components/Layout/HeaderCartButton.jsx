import React, { useContext, useEffect,useState } from "react";
import classes from "../Layout/HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/Cart-context"; 
function HeaderCartButton(props)
{
    const [btnIsHighlighted,setBtnIsHighlighted] = useState(false);   
    //the whole componnent will be reevalute after the context has changed,
    //the context will change when we update him in the cart provider
    const cartContextData = useContext(CartContext);

    //items is array of objects, we want to sum the values inside every cell, 
    //0 is the starting value
    const numberOfCartItems = cartContextData.items.reduce((currentNumber,item)=> {
        return currentNumber + item.amount;
    },0);

    //animation
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
    useEffect(function() 
    {
        if(cartContextData.items.length === 0)
        {
            return;
        }
        setBtnIsHighlighted(true);

       const timer = setTimeout(()=>setBtnIsHighlighted(false),300);

       return () => {clearTimeout(timer)}
    },[cartContextData.items]);

    return <button className = {btnClasses} onClick = {props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your cart</span>
        <span className = {classes.badge }> {numberOfCartItems} </span>
    </button>
}
export default HeaderCartButton;