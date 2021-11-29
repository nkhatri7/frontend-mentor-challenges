import React, { useState } from 'react';
import './App.scss';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import MobileImages from './components/MobileImages/MobileImages';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {

  const [quantity, setQuantity] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartDisplay, setCartDisplay] = useState(false);

  const handleQuantityIncrease = () => {
    setQuantity(quantity => quantity + 1);
  }

  const handleQuantityDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity => quantity - 1);
    }
  }

  const handleAddToCart = () => {
    if (quantity > 0) {
      setCartQuantity(prevQuantity => prevQuantity + quantity);
      setQuantity(0);
      setCartDisplay(true);
    }
  }

  const handleOpenCart = () => {
    setCartDisplay(true);
  }

  const handleCloseCart = () => {
    setCartDisplay(false);
  }

  const handleOrderRemoval = () => {
    setCartQuantity(0);
  }

  const handleCheckout = () => {
    setCartDisplay(false);
    setCartQuantity(0);
  }

  return (
    <div className="App">
      <Header quantity={cartQuantity} openCart={handleOpenCart} />
      <main>
        <Cart 
          quantity={cartQuantity} 
          display={cartDisplay} 
          close={handleCloseCart} 
          remove={handleOrderRemoval}
          checkout={handleCheckout}
        />
        <MobileImages />
        <ProductDetails 
          quantity={quantity} 
          increase={handleQuantityIncrease} 
          decrease={handleQuantityDecrease}
          addToCart={handleAddToCart}
        />
      </main>
    </div>
  );
}

export default App;
