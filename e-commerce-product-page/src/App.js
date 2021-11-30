import React, { useState } from 'react';
import './App.scss';
import Cart from './components/Cart/Cart';
import DesktopImages from './components/DesktopImages/DesktopImages';
import Header from './components/Header/Header';
import MobileImages from './components/MobileImages/MobileImages';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { imageOne } from './assets/images';
import Lightbox from './components/Lightbox/Lightbox';

function App() {

  const [quantity, setQuantity] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartDisplay, setCartDisplay] = useState(false);
  const [activeImage, setActiveImage] = useState(imageOne);
  const [lightboxDisplay, setLightboxDisplay] = useState(false);

  const handleImageChange = e => {
    setActiveImage(e.target.src);
  }

  const handleOpenLightbox = () => {
    setLightboxDisplay(true);
  }

  const handleCloseLightbox = () => {
    setLightboxDisplay(false);
  }

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
        <div className="cart-wrapper">
          <Cart 
            quantity={cartQuantity} 
            display={cartDisplay} 
            close={handleCloseCart} 
            remove={handleOrderRemoval}
            checkout={handleCheckout}
          />
        </div>
        <div className="main-wrapper">
          <div className="mobile-images-container">
            <MobileImages />
          </div>
          <div className="desktop-images-container">
            <DesktopImages 
              activeImage={activeImage} 
              handleImageChange={handleImageChange} 
              handleOpenLightbox={handleOpenLightbox} 
            />
          </div>
          <ProductDetails 
            quantity={quantity} 
            increase={handleQuantityIncrease} 
            decrease={handleQuantityDecrease}
            addToCart={handleAddToCart}
          />
        </div>
        {lightboxDisplay === false ? null : 
          <Lightbox 
            activeImage={activeImage} 
            handleCloseLightbox={handleCloseLightbox} 
          />
        }
      </main>
    </div>
  );
}

export default App;
