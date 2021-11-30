import React, { useState, useEffect, useRef } from 'react';
import './Lightbox.scss';
import { imageOne, imageTwo, imageThree, imageFour } from '../../assets/images';

const Lightbox = ({ activeImage, handleCloseLightbox }) => {

    const [index, setIndex] = useState(0);
    const previewsContainer = useRef();
    const images = [imageOne, imageTwo, imageThree, imageFour];

    useEffect(() => {
        const previews = previewsContainer.current.querySelectorAll('.preview');
        previews.forEach((preview, idx) => {
            preview.classList.remove('active-preview');
            if (preview.src.includes(activeImage)) {
                setIndex(idx);
                preview.classList.add('active-preview');
            }
        });
    }, [activeImage]);

    useEffect(() => {
        const previews = previewsContainer.current.querySelectorAll('.preview');
        previews.forEach(preview => {
            preview.classList.remove('active-preview');
            if (preview.src.includes(images[index])) {
                preview.classList.add('active-preview');
            }
        })
    });

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

    const handleImageChange = e => {
        const previews = previewsContainer.current.querySelectorAll('.preview');
        previews.forEach((preview, idx) => {
            if (preview === e.target) {
                setIndex(idx);
            }
        });
    }

    return (
        <div className="lightbox-container">
            <div className="lightbox">
                <div className="close-lightbox-container">
                    <button className="close-lightbox" aria-label="Close Lightbox" onClick={handleCloseLightbox}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#FFF" fillRule="evenodd"/></svg>
                    </button>
                </div>
                <div className="main-image-container">
                    <img src={images[index]} alt="Fall Limited Edition Sneakers" className="main-img" />
                    <button className="img-nav previous" aria-label="See previous image" onClick={handlePreviousImage}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                    </button>
                    <button className="img-nav next" aria-label="See next image" onClick={handleNextImage}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                    </button>
                </div>
                <div className="previews-container" ref={previewsContainer}>
                    <img src={imageOne} alt="Fall Limited Edition Sneakers" className="preview active-preview" onClick={handleImageChange} />
                    <img src={imageTwo} alt="Fall Limited Edition Sneakers" className="preview" onClick={handleImageChange} />
                    <img src={imageThree} alt="Fall Limited Edition Sneakers" className="preview" onClick={handleImageChange} />
                    <img src={imageFour} alt="Fall Limited Edition Sneakers" className="preview" onClick={handleImageChange} />
                </div>
            </div>
        </div>
    );
}

export default Lightbox;
