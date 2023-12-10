import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import MealsList from "./Components/Meals/MealsList";
import Cart from "./Components/Cart/Cart";

function App() {
  
  const [cartClickStatus, setCartClickStatus] = useState(false);

  const displayCartHandler = (status) => {
    setCartClickStatus(status);
  }

  return (
    <React.Fragment>
      {cartClickStatus && <Cart displayCart={displayCartHandler}/>}
      <Header displayCart={displayCartHandler}/>
      <MealsList />
    </React.Fragment>
  );
}

export default App;
