import classes from "./Cart.module.css";
import Modal from "../Ui/Modal";
import {useContext} from "react";
import CartContext from "../../Store/Cart-context";
import CartItem from "./CartItem";
function Cart(props)
{
    const cartContext = useContext(CartContext);
    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
    const CartItems = cartContext.items.map(mappingFunction);
    const hasItems = cartContext.items.length >0;

    function cartItemRemoveHandler(id)
    {
        cartContext.removeItem(id);
    }

    function cartItemAddHandler(item)
    {
        cartContext.addItem(item);
    }

    function mappingFunction(item)
    {
    return <CartItem 
    key= {item.id}
    name = {item.name}
    amount = {item.amount}
    price = {item.price}
    //passing the id of the item to cartItemRemoveHandler
    onRemove = {cartItemRemoveHandler.bind(null,item.id)}  
    onAdd = {cartItemAddHandler.bind(null,item)}>
    </CartItem>
    }

    return <Modal
        onClose = {props.onClose}>
        <ul  className = {classes["cart-items"]}>
            {CartItems}
        </ul>
        <div className = {classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className= {classes.actions}>
            <button className = {classes["button--alt"]}
                //close the model when clicking close
            onClick = {props.onClose}>Close</button>
            {/* will only show if we have items */}
            {hasItems &&<button className = {classes.button}>Order</button>}
        </div>

    </Modal>
}


export default Cart;