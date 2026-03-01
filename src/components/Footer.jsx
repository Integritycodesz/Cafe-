"use client";

import { useState, useCallback } from "react";

const footerColumns = [
    {
        id: "footer-about",
        heading: "About Us",
        links: [
            "Our Company", "Our Coffee", "Stories and News",
            "Starbucks Archive", "Investor Relations", "Customer Service", "Contact Us",
        ],
    },
    {
        id: "footer-careers",
        heading: "Careers",
        links: [
            "Culture and Values", "Inclusion, Diversity, and Equity",
            "College Achievement Plan", "Alumni Community", "U.S. Careers", "International Careers",
        ],
    },
    {
        id: "footer-social-impact",
        heading: "Social Impact",
        links: ["People", "Planet", "Environmental and Social Impact Reporting"],
    },
    {
        id: "footer-business",
        heading: "For Business Partners",
        links: [
            "Landlord Support Center", "Suppliers",
            "Corporate Gift Card Sales", "Office and Foodservice Coffee",
        ],
    },
    {
        id: "footer-order",
        heading: "Order and Pick Up",
        links: [
            "Order on the App", "Order on the Web", "Delivery",
            "Order and Pick Up Options", "Explore and Find Coffee for Home",
        ],
    },
];

const socialIcons = [
    {
        label: "Spotify",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
        ),
    },
    {
        label: "Facebook",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
    },
    {
        label: "Pinterest",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.174.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
    },
    {
        label: "YouTube",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
    },
    {
        label: "X (Twitter)",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
];

const legalLinks = [
    "Privacy Notice",
    "Consumer Health Privacy",
    "Terms of Use",
    "Do Not Share My Personal Information",
    "CA Supply Chain Act",
    "Accessibility",
    "Cookie Preferences",
];

export default function Footer() {
    const [activeColumn, setActiveColumn] = useState(null);

    const toggleColumn = useCallback(
        (id) => {
            if (typeof window !== "undefined" && window.innerWidth > 768) return;
            setActiveColumn((prev) => (prev === id ? null : id));
        },
        []
    );

    return (
        <footer className="footer" id="footer">
            <div className="footer__container">
                <div className="footer__columns">
                    {footerColumns.map((col) => (
                        <div className="footer__column" id={col.id} key={col.id}>
                            <h3
                                className={`footer__heading${activeColumn === col.id ? " active" : ""}`}
                                onClick={() => toggleColumn(col.id)}
                            >
                                {col.heading}
                            </h3>
                            <ul
                                className={`footer__list${activeColumn === col.id ? " active" : ""}`}
                            >
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="footer__link">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Social Links */}
                <div className="footer__social" id="footer-social">
                    {socialIcons.map((s) => (
                        <a
                            href="#"
                            className="footer__social-link"
                            aria-label={s.label}
                            key={s.label}
                        >
                            {s.svg}
                        </a>
                    ))}
                </div>

                <hr className="footer__divider" />

                {/* Legal Links */}
                <div className="footer__legal" id="footer-legal">
                    <div className="footer__legal-links">
                        {legalLinks.map((link) => (
                            <a href="#" className="footer__legal-link" key={link}>
                                {link}
                            </a>
                        ))}
                    </div>
                    <p className="footer__copyright">
                        © 2025 Starbucks Coffee Company. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
