import React, {useState, useEffect, useRef} from 'react';
import './Header.scss';
import logo from '../../assets/logo.svg';

function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const menuToggle = useRef(null);
    const nav = useRef(null);
    const overlay = useRef(null);

    const handleMenuToggle = () => {
        setMobileMenu(current => !current);
    }

    useEffect(() => {
        if (mobileMenu) {
            menuToggle.current.classList.add('hamburger-clicked');
            nav.current.classList.add('mobile-nav-open');
            overlay.current.classList.add('overlay-active');
        } else {
            menuToggle.current.classList.remove('hamburger-clicked');
            nav.current.classList.remove('mobile-nav-open');
            overlay.current.classList.remove('overlay-active');
        }
    });

    return (
        <header>
            <figure className="logo">
                <img src={logo} alt="Easybank logo" />
            </figure>
            <button className="mobile-menu" onClick={handleMenuToggle} ref={menuToggle}>
                <span className="hidden">MENU</span>
            </button>
            <nav className="mobile-nav" ref={nav}>
                {/* eslint-disable-next-line */}
                <a href="#" className="nav-link">Home</a>
                {/* eslint-disable-next-line */}
                <a href="#" className="nav-link">About</a>
                {/* eslint-disable-next-line */}
                <a href="#" className="nav-link">Contact</a>
                {/* eslint-disable-next-line */}
                <a href="#" className="nav-link">Blog</a>
                {/* eslint-disable-next-line */}
                <a href="#" className="nav-link">Careers</a>
            </nav>
            <button className="cta cta-header">Request Invite</button>
            <div className="overlay" ref={overlay}></div>
        </header>
    );
}

export default Header;
