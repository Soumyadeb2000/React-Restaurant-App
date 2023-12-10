import React from "react";
import Header from "./Components/Layout/Header";
import MealsList from "./Components/Meals/MealsList";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header />
      <MealsList />
    </React.Fragment>
  );
}

export default App;
