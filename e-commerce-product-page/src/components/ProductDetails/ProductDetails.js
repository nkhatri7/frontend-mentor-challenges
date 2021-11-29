import React from 'react';
import './ProductDetails.scss';

const ProductDetails = ({ quantity, increase, decrease, addToCart }) => {

    return (
        <div className="product-details">
            <div className="product-details-wrapper">
                <h2>SNEAKER COMPANY</h2>
                <h1>Fall Limited Edition Sneakers</h1>
                <p className="product-description">These low-profile sneakers are your perfect casual wear companion.
                    Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                <div className="pricing">
                    <div className="current-price">
                        <div className="price">$125.00</div>
                        <div className="discount">50%</div>
                    </div>
                    <div className="previous-price">$250.00</div>
                </div>
                <div className="user-actions">
                    <div className="quantity-container">
                        <button className="quantity-button decrease" aria-label="Decrease quantity" onClick={decrease}></button>
                        <div className="quantity">{quantity}</div>
                        <button className="quantity-button increase" aria-label="Increase quantity" onClick={increase}></button>
                    </div>
                    <button className="add-to-cart" onClick={addToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
