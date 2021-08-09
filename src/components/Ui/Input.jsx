import classes from "../Ui/Input.module.css";
import React from "react";

//using ref on a custom component
const Input = React.forwardRef((props,ref) =>
{
    return <div className= {classes.input}>
        <label htmlFor = {props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input}></input>
    </div>
});

export default Input;