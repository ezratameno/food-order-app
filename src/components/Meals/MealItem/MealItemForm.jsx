import classes from "../MealItem/MealItemForm.module.css";
import Input from "../../Ui/Input";
import {useRef, useState} from "react";

function MealItemForm(props)
{
    const [amountIsValid,setAmountIsValid] = useState(true);
    const amoutInputRef = useRef();

    function submitHandler(event)
    {
        event.preventDefault();
        const enterdAmount = amoutInputRef.current.value;
        const enterdAmountNumber = +enterdAmount;

        if(enterdAmount.trim().length ===0 ||
        enterdAmountNumber <1 || enterdAmountNumber> 5)
        {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enterdAmountNumber);
    }
    
    return <form className = {classes.form} onSubmit={submitHandler}>
        <Input lable = "Amount" ref = {amoutInputRef}
        input = {
            {
                id: "amount",
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "1"
                }}/>
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount 1-5</p>}
    </form>
}

export default MealItemForm;