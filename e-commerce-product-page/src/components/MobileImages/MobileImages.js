import React, { useState } from 'react';
import './MobileImages.scss';
import { imageOne, imageTwo, imageThree, imageFour } from '../../assets/images';

const MobileImages = () => {

    const [index, setIndex] = useState(0);
    const images = [imageOne, imageTwo, imageThree, imageFour];

    const handleNextImage = () => {
        if (index === 3) {
            setIndex(0);
        } else {
            setIndex(index => index + 1);
        }
        
    }

    const handlePreviousImage = () => {
        if (index === 0) {
            setIndex(images.length - 1);
        } else {
            setIndex(index => index - 1);
        }
    }

    return (
        <div className="mobile-images">
            <img src={images[index]} alt="Fall Limited Edition Sneakers" className="product-img" />
            <div className="img-nav-container">
                <button className="img-nav previous" aria-label="See next image" onClick={handlePreviousImage}></button>
                <button className="img-nav next" aria-label="See next image" onClick={handleNextImage}></button>
            </div>
        </div>
    );
}

export default MobileImages;
