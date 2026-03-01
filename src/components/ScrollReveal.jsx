"use client";

import { useEffect, useRef } from "react";

export default function ScrollReveal({ children, className = "", id, as: Tag = "section" }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: "0px 0px -80px 0px", threshold: 0.1 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag ref={ref} className={`section ${className}`} id={id}>
            {children}
        </Tag>
    );
}
