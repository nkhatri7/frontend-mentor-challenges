import React, { useEffect, useRef } from 'react';
import './DesktopImages.scss';
import { imageOne, imageTwo, imageThree, imageFour } from '../../assets/images';

const DesktopImages = ({ activeImage, handleImageChange, handleOpenLightbox }) => {

    const previewContainer = useRef();

    useEffect(() => {
        const previews = previewContainer.current.querySelectorAll('.preview');
        previews.forEach(preview => {
            preview.classList.remove('active-preview');
            if (preview.src.includes(activeImage)) {
                preview.classList.add('active-preview');
            }
        });
    }, [activeImage]);

    return (
        <div className="desktop-images">
            <img src={activeImage} alt="Fall Limited Edition Sneakers" className="main-img" onClick={handleOpenLightbox} />
            <div className="images-preview-container" ref={previewContainer}>
                <img src={imageOne} alt="Fall Limited Edition Sneakers" className="preview active-preview" onClick={handleImageChange} />
                <img src={imageTwo} alt="Fall Limited Edition Sneakers" className="preview" onClick={handleImageChange} />
                <img src={imageThree} alt="Fall Limited Edition Sneakers" className="preview" onClick={handleImageChange} />
                <img src={imageFour} alt="Fall Limited Edition Sneakers" className="preview" onClick={handleImageChange} />
            </div>
        </div>
    );
}

export default DesktopImages;
