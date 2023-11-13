import React, {Fragment} from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart"
import { useState, useContext } from "react";
import { CartProvider } from "./context/CartProvider";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false)

  const showCartHandler = () => {
    setCartIsShow(true)
  }

  const hideCartHandler = ( ) => {
    setCartIsShow(false)
  }

  return (
  <CartProvider>
    {cartIsShow && <Cart  onHideCart={hideCartHandler}/>}
    <Header onShowCart={showCartHandler} />
    <main>
      <Meals />
    </main>
    
  </CartProvider>
  );
}

export default App;
