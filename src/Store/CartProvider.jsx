import CartContext from './Cart-context';
import {useReducer} from "react";

const defaultCartState = {
    items: [],
     totalAmount:0 
    }

//will manage the state
function cartReducer(state, action)
{
    if(action.type === "ADD_CART_ITEM")
    {
        const updatedTotalAmout = state.totalAmount + 
        action.item.price * action.item.amount;

        //returns the first index in the array that matches the results
        const existingCartItemIndex = state.items.findIndex( function (item)
        {
            //checking for every element if it matches the id of the added item
            // if they are the same type
            return item.id === action.item.id;
        });

        //if not exist it will return null
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems; 

        if(existingCartItem)
        {
            //updating the specific item
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }

            //updating the overall items
            updatedItems = [...state.items,];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else 
        {
            //concat create a new array, not reference
            updatedItems = state.items.concat(action.item);

        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmout
        }
    }
    else if(action.type === "REMOVE_CART_ITEM")
    {
        // we have two cases:
        //1. the amount of the item is 1 so we need to delete him from items.
        //2. the amount is greater than 1 so we just need to decrese the amount by 1
        const existingCartItemIndex = state.items. findIndex(function(item) 
        {
            return item.id === action.id;
        });

        const existingCartItem = state.items[existingCartItemIndex];
        const updatedTotalAmont = state.totalAmount -existingCartItem.price;
        let updatedItems;

        if(existingCartItem.amount === 1)
        {
            //will return a new array of all the items that thier id is diffrent than
            //the item we ant to remove
            updatedItems = state.items.filter(function(item)
            {
                return item.id !== action.id;
            });
        }
        else
        {
            //decrecing the amount by one
            const updatedItem = {
                ...existingCartItem,
                 amount: existingCartItem.amount -1};

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmont
        }
    }
    return defaultCartState;
}
function CartProvider(props)
{

    const [cartState,dispatchCartState] = useReducer(cartReducer,defaultCartState);

    //the concrete values that will be updated over time
    const cartContext = {
        //catState making it dynamic
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };
    
    function addItemToCartHandler(item)
    {
        dispatchCartState({type: "ADD_CART_ITEM",item: item })
    }
    function removeItemFromCartHandler(id)
    {
        dispatchCartState({type: "REMOVE_CART_ITEM",id: id })
    }

    return <CartContext.Provider value={cartContext}>
                {props.children}
            </CartContext.Provider>
}
export default CartProvider;