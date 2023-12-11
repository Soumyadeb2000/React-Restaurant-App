import React, { useState, useContext } from "react";
import Header from "./Components/Layout/Header";
import MealsList from "./Components/Meals/MealsList";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/cart-provider";
import CartContext from "./Store/cart-context";

function App() {
  
  const [cartClickStatus, setCartClickStatus] = useState(false);
  const cartContext = useContext(CartContext);

  const displayCartHandler = (status) => {
    setCartClickStatus(status);
  }

  return (
    <CartProvider>
      {cartClickStatus && <Cart displayCart={displayCartHandler}/>}
      <Header cartData={cartContext} displayCart={displayCartHandler}/>
      <MealsList cartData={cartContext}/>
    </CartProvider>
  );
}

export default App;
