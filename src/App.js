import Header from "./components/Layout/Header";
import React,{Fragment, useState} from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
function App() 
{
  //we manage the components at the level they are renderd in
  const [cartIsShown,setCartIsShown] = useState(false);

  function showCartHandler()
  {
    setCartIsShown(true);
  }

  function hideCartHandler()
  {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown &&<Cart onClose = {hideCartHandler}/>}
      <Header
      onShowCart = {showCartHandler}
      onHideCart = {hideCartHandler}/>
      <Meals/>
    </CartProvider>
  );
}

export default App;
