import React, { useRef } from 'react';
import './Header.scss';
import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/image-avatar.png';

const Header = ({ quantity, openCart }) => {

    const nav = useRef();
    const overlay = useRef();

    const handleMenuOpen = e => {
        e.target.classList.toggle('close-menu');
        nav.current.classList.toggle('menu-open');
        overlay.current.classList.toggle('overlay-active');
        document.body.classList.toggle('no-scroll');
    }

    return (
        <header>
            <div className="header-left">
                <button className="hamburger" aria-label="Mobile Menu" onClick={handleMenuOpen}></button>
                {/* eslint-disable-next-line */}
                <a href="#" className="logo" aria-label="Sneakers Logo">
                    <img src={logo} alt="Sneakers Logo" />
                </a>
                <nav ref={nav}>
                    <ul>
                        {/* eslint-disable-next-line */}
                        <li><a href="#" className="nav-link">Collections</a></li>
                        {/* eslint-disable-next-line */}
                        <li><a href="#" className="nav-link">Men</a></li>
                        {/* eslint-disable-next-line */}
                        <li><a href="#" className="nav-link">Women</a></li>
                        {/* eslint-disable-next-line */}
                        <li><a href="#" className="nav-link">About</a></li>
                        {/* eslint-disable-next-line */}
                        <li><a href="#" className="nav-link">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className="overlay" ref={overlay}></div>
            <div className="header-right">
                <div className="cart-icon-container">
                    <button className="cart-icon" onClick={openCart}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fillRule="nonzero"/></svg>
                    </button>
                    {quantity === 0 ? null : <div className="cart-number">{quantity}</div>}
                </div>
                <button className="profile" aria-label="Profile">
                    <img src={avatar} alt="Profile" className="avatar" />
                </button>
            </div>
        </header>
    );
}

export default Header;
