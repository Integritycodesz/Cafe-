"use client";

import { useState, useEffect, useCallback } from "react";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMobile = useCallback(() => {
        setMobileOpen((prev) => {
            document.body.style.overflow = !prev ? "hidden" : "";
            return !prev;
        });
    }, []);

    const closeMobile = useCallback(() => {
        setMobileOpen(false);
        document.body.style.overflow = "";
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.pageYOffset > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header
                className="header"
                id="header"
                style={{
                    boxShadow: scrolled
                        ? "0 2px 10px rgba(0,0,0,0.1)"
                        : "0 1px 3px rgba(0,0,0,0.08)",
                }}
            >
                <nav className="nav">
                    <div className="nav__left">
                        <a href="#" className="nav__logo" id="nav-logo" aria-label="Starbucks Home">
                            <svg className="nav__logo-icon" viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="31" cy="31" r="31" fill="#00704A" />
                                <circle cx="31" cy="31" r="27" fill="none" stroke="#fff" strokeWidth="1" />
                                <circle cx="31" cy="31" r="25" fill="none" stroke="#fff" strokeWidth="0.5" />
                                <path d="M31 8C31 8 25 18 25 25C25 28 27 31 31 31C35 31 37 28 37 25C37 18 31 8 31 8Z" fill="#fff" opacity="0.9" />
                                <circle cx="31" cy="22" r="4" fill="#00704A" />
                                <path d="M22 35C22 35 18 38 18 42C18 48 24 52 31 52C38 52 44 48 44 42C44 38 40 35 40 35" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M24 37C24 37 20 40 20 43C20 47 25 50 31 50C37 50 42 47 42 43C42 40 38 37 38 37" fill="none" stroke="#fff" strokeWidth="0.8" strokeLinecap="round" />
                                <text x="31" y="46" textAnchor="middle" fill="#fff" fontSize="5" fontWeight="bold" fontFamily="serif">STARBUCKS</text>
                            </svg>
                        </a>
                        <ul className="nav__menu" id="nav-menu">
                            <li><a href="#menu" className="nav__link" id="nav-menu-link">MENU</a></li>
                            <li><a href="#rewards" className="nav__link" id="nav-rewards-link">REWARDS</a></li>
                            <li><a href="#" className="nav__link" id="nav-gift-link">GIFT CARDS</a></li>
                        </ul>
                    </div>
                    <div className="nav__right">
                        <a href="#" className="nav__store" id="nav-find-store">
                            <svg className="nav__store-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            Find a store
                        </a>
                        <a href="#" className="btn btn--outline btn--sm" id="nav-signin">Sign in</a>
                        <a href="#" className="btn btn--dark btn--sm" id="nav-join">Join now</a>
                    </div>
                    <button
                        className={`nav__toggle${mobileOpen ? " active" : ""}`}
                        id="nav-toggle"
                        aria-label="Toggle menu"
                        onClick={toggleMobile}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </header>

            {/* Mobile Nav */}
            <div className={`mobile-nav${mobileOpen ? " active" : ""}`} id="mobile-nav">
                <div className="mobile-nav__content">
                    <ul className="mobile-nav__menu">
                        <li><a href="#menu" className="mobile-nav__link" onClick={closeMobile}>Menu</a></li>
                        <li><a href="#rewards" className="mobile-nav__link" onClick={closeMobile}>Rewards</a></li>
                        <li><a href="#" className="mobile-nav__link" onClick={closeMobile}>Gift Cards</a></li>
                    </ul>
                    <div className="mobile-nav__actions">
                        <a href="#" className="btn btn--outline btn--full">Sign in</a>
                        <a href="#" className="btn btn--dark btn--full">Join now</a>
                    </div>
                    <a href="#" className="mobile-nav__store">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        Find a store
                    </a>
                </div>
            </div>
        </>
    );
}
