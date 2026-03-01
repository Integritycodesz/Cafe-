/* ===================================
   Starbucks Website Clone - JavaScript
   =================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ---- Mobile Navigation ----
    const navToggle = document.getElementById('nav-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    if (navToggle && mobileNav) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile nav when clicking a link
        mobileNav.querySelectorAll('.mobile-nav__link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ---- Header Shadow on Scroll ----
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 10) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
        }

        lastScroll = currentScroll;
    }, { passive: true });

    // ---- Scroll Reveal Animation ----
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.15
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // ---- Footer Accordion (Mobile) ----
    const footerHeadings = document.querySelectorAll('.footer__heading');

    footerHeadings.forEach(heading => {
        heading.addEventListener('click', () => {
            // Only activate on mobile
            if (window.innerWidth > 768) return;

            const list = heading.nextElementSibling;
            const isActive = heading.classList.contains('active');

            // Close all others
            footerHeadings.forEach(h => {
                h.classList.remove('active');
                if (h.nextElementSibling) {
                    h.nextElementSibling.classList.remove('active');
                }
            });

            // Toggle current
            if (!isActive) {
                heading.classList.add('active');
                if (list) list.classList.add('active');
            }
        });
    });

    // ---- Smooth Scroll for Anchor Links ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ---- Parallax-like effect on images ----
    const images = document.querySelectorAll('.section__image img');

    window.addEventListener('scroll', () => {
        images.forEach(img => {
            const rect = img.parentElement.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom > 0) {
                const scrollPercent = (windowHeight - rect.top) / (windowHeight + rect.height);
                const translateY = (scrollPercent - 0.5) * 20;
                img.style.transform = `scale(1.05) translateY(${translateY}px)`;
            }
        });
    }, { passive: true });

    // ---- Button ripple effect ----
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                border-radius: 50%;
                background: rgba(255,255,255,0.3);
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
