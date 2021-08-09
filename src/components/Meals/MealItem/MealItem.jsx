import classes from "../MealItem/MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../Store/Cart-context";
import {useContext} from "react";
function MealItem(props)
{
    const cartContextData = useContext(CartContext);
    function addMealToCartHandler(amount)
    {
        cartContextData.addItem({
          id: props.id,
          name: props.name,
          amount: amount,
          price: props.price
        });
    }
    const price = `$${props.price.toFixed(2)}`
    return <li className = {classes.meal}>
             <div>
                 <h3>{props.name}</h3>
                 <div className= {classes.description}>{props.description}</div>
                 <div className = {classes.price}>{price}</div>

             </div>
             <div>
                 <MealItemForm onAddToCart = {addMealToCartHandler}/>
             </div>
           </li>
        
}

export default MealItem;