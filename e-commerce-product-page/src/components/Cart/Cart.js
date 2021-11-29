import React, { useEffect, useRef } from 'react';
import './Cart.scss';
import productImage from '../../assets/images/image-product-1-thumbnail.jpg';

const Cart = ({ quantity, display, close, remove, checkout }) => {

    const cart = useRef();
    const price = 125;

    useEffect(() => {
        if (display) {
            cart.current.classList.add('cart-active');
        } else {
            cart.current.classList.remove('cart-active');
        }
    }, [display]);

    return (
        <div className="cart" ref={cart}>
            <div className="cart-header">
                <p>Cart</p>
                <button className="close-cart" aria-label="Close cart" onClick={close}></button>
            </div>
            {quantity === 0 ? <div className="no-items">Your cart is empty</div> :
                <div className="order-detail-container">
                    <div className="order-details">
                        <img src={productImage} alt="Fall Limited Edition Sneakers" />
                        <div className="product-details">
                            <div className="product-name">Autumn Limited Edition Sneakers</div>
                            <div className="product-price">
                                ${price.toFixed(2)} x {quantity} 
                                <span className="total-product-price">${(price * quantity).toFixed(2)}</span>
                            </div>
                        </div>
                        <button className="remove-item" aria-label="Remove item from cart" onClick={remove}></button>
                    </div>
                    <button className="checkout" onClick={checkout}>Checkout</button>
                </div>
            }
        </div>
    );
}

export default Cart;
