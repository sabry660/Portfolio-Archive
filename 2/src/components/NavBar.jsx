import React, {useEffect, useState} from 'react'
import {navLinks} from "../constants/index.js";

const NavBar = () => {
    const [scrolled, setScroll] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScroll(true);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <nav className="desktop">
                    <ul>
                        {
                            navLinks.map(({link, name}) => (
                                <li key={name} className="group">
                                    <a href={link}>
                                        <span>{name}</span>
                                        <span className="underline"></span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>Contact</span>
                    </div>
                </a>

                <button className="mobile-menu-btn lg:hidden" onClick={toggleMobileMenu}>
                    <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>

            <nav className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleMobileMenu}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <ul>
                    {
                        navLinks.map(({link, name}) => (
                            <li key={name}>
                                <a href={link} onClick={() => setMobileMenuOpen(false)}>
                                    {name}
                                </a>
                            </li>
                        ))
                    }
                    <li>
                        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar
