import React, {useRef} from 'react';
import './Header.scss';
import logo from '../../assets/logo.svg';

function Header() {
    const nav = useRef();

    const handleMobileMenuToggle = (e) => {
        e.target.classList.toggle('mobile-menu-open');
        nav.current.classList.toggle('mobile-nav-open');
        document.body.classList.toggle('no-scroll');
    }

    return (
        <header>
            <figure className="logo-fig">
                <img src={logo} alt="Shortly Logo" />
            </figure>
            <button className="mobile-menu" onClick={handleMobileMenuToggle}><span className="hidden">MENU</span></button>
            <nav ref={nav}>
                <ul>
                    {/* eslint-disable-next-line */}
                    <li><a href="#" className="nav-link">Features</a></li>
                    {/* eslint-disable-next-line */}
                    <li><a href="#" className="nav-link">Pricing</a></li>
                    {/* eslint-disable-next-line */}
                    <li><a href="#" className="nav-link">Resources</a></li>
                </ul>
                <ul>
                    {/* eslint-disable-next-line */}
                    <li><a href="#" className="nav-link">Login</a></li>
                    {/* eslint-disable-next-line */}
                    <li><a href="#" className="nav-link sign-up">Sign Up</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
