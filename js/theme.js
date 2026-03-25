(function() {
    // 1. Fixed Wispr Flow Design System
    const theme = {
        cream: '#FFFFEB',
        forest: '#0A2A22',
        lavender: '#F0D7FF',
        charcoal: '#1A1A1A',
        lightGray: '#808080',
        coral: '#FF7A59'
    };

    // 2. Inject Google Fonts (Figtree & EB Garamond)
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Figtree:ital,wght@0,300..900;1,300..900&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // 3. Inject Global CSS Styles 
    const style = document.createElement('style');
    style.innerHTML = `
        :root {
            --color-cream: ` + theme.cream + `;
            --color-forest: ` + theme.forest + `;
            --color-lavender: ` + theme.lavender + `;
            --color-charcoal: ` + theme.charcoal + `;
        }
        
        body {
            background-color: var(--color-cream) !important;
            color: var(--color-charcoal) !important;
            font-family: 'Figtree', sans-serif !important;
            transition: background-color 0.5s ease;
        }

        h1, h2, h3, h4, h5, h6, .font-serif {
            font-family: 'EB Garamond', serif !important;
        }

        /* Glassmorphism Navbar */
        .glass { 
            background: rgba(255, 255, 235, 0.85) !important; 
            backdrop-filter: blur(16px) !important;
            border-bottom: 1px solid rgba(26,26,26,0.05) !important; 
            box-shadow: none !important;
        }

        /* Wispr Flow Buttons */
        .rounded-full.bg-slate-900.text-white, a.bg-slate-900, button.bg-slate-900, #install-pwa-btn, #close-welcome, .bg-gold, #close-greeting, .bg-slate-800 {
            background-color: var(--color-lavender) !important;
            color: var(--color-charcoal) !important;
            border: 1.6px solid var(--color-charcoal) !important;
            border-radius: 12px !important;
            font-family: 'Figtree', sans-serif !important;
            font-weight: 600 !important;
            box-shadow: none !important;
            transition: transform 0.2s ease, background-color 0.2s ease !important;
        }
        .rounded-full.bg-slate-900.text-white:hover, a.bg-slate-900:hover, button.bg-slate-900:hover, #install-pwa-btn:hover, #close-welcome:hover, .bg-gold:hover, .bg-slate-800:hover {
            background-color: #e6c2fb !important;
            transform: scale(1.02) !important;
        }
        
        /* Secondary Buttons / Outlined */
        a.border-slate-900, .bg-transparent.border-slate-900, .border-gold {
            background-color: transparent !important;
            color: var(--color-charcoal) !important;
            border: 1.6px solid var(--color-charcoal) !important;
            border-radius: 12px !important;
            font-family: 'Figtree', sans-serif !important;
            font-weight: 600 !important;
        }
        
        /* Shapes (Rounded Containers) */
        .rounded-2xl, .rounded-[2.5rem], .rounded-3xl {
            border-radius: 40px !important;
        }
        .card-shadow {
            background: #ffffff !important;
            border: 1px solid rgba(26,26,26,0.05) !important;
            border-radius: 40px !important;
            box-shadow: 0 10px 30px rgba(0,0,0,0.03) !important;
            transition: all 0.3s ease !important;
        }
        .card-shadow:hover {
            box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important;
            transform: translateY(-5px) !important;
        }

        /* Welcome & Greeting Popup Modifications */
        #modal-card, #greeting-card {
            background: var(--color-cream) !important;
            border: 1px solid rgba(26,26,26,0.1) !important;
        }
        .bg-gradient-to-r.from-gold.via-maroon.to-gold {
            background: var(--color-charcoal) !important;
        }
        .bg-slate-900 {
            background-color: var(--color-charcoal) !important;
            color: var(--color-cream) !important;
        }
        
        /* Legacy colors mapping to charcoal/cream */
        .text-slate-900, .text-slate-800, .text-gold { color: var(--color-charcoal) !important; }
        .text-slate-600, .text-slate-500 { color: #808080 !important; }

        /* Dark Background Text Overrides to guarantee visibility everywhere */
        .bg-black .text-gold, .bg-slate-900 .text-gold, .bg-slate-950 .text-gold {
            color: var(--color-lavender) !important;
        }
        .bg-black .text-slate-900, .bg-slate-900 .text-slate-900, .bg-slate-950 .text-slate-900,
        .bg-black .text-slate-800, .bg-slate-900 .text-slate-800, .bg-slate-950 .text-slate-800 {
            color: var(--color-cream) !important;
        }
        .bg-black .text-slate-600, .bg-slate-900 .text-slate-600, .bg-slate-950 .text-slate-600,
        .bg-black .text-slate-500, .bg-slate-900 .text-slate-500, .bg-slate-950 .text-slate-500 {
            color: rgba(255, 255, 235, 0.7) !important;
        }

        /* Remove marquee mask to keep it super clean */
        .mask-gradient {
            mask-image: none !important;
            -webkit-mask-image: none !important;
        }
        .marquee-col img {
            border-radius: 20px !important;
            border: 1px solid rgba(26,26,26,0.1) !important;
            box-shadow: 0 10px 20px rgba(0,0,0,0.05) !important;
        }

        /* Disable text stroke */
        .text-stroke { -webkit-text-stroke: 0px !important; }
    `;
    document.head.appendChild(style);

    // 4. Clear Randomized Theme logic and Set Tailwind Config 
    sessionStorage.removeItem('smec_theme');
    
    window.tailwind = window.tailwind || {};
    window.tailwind.config = {
        theme: {
            extend: {
                colors: {
                    cream: theme.cream,
                    forest: theme.forest,
                    lavender: theme.lavender,
                    charcoal: theme.charcoal,
                },
                fontFamily: {
                    sans: ['Figtree', 'sans-serif'],
                    serif: ['"EB Garamond"', 'serif'],
                }
            }
        }
    };
    
    // ===== GLOBAL ENHANCEMENTS (MAGNETIC BUTTONS & SPA TRANSITIONS) =====
    document.addEventListener('DOMContentLoaded', () => {

        // --- 1. Page Transition Animations (SPA feel) ---
        // Inject the global cream overlay for transitions
        const overlay = document.createElement('div');
        overlay.id = 'global-page-transition';
        overlay.className = 'fixed inset-0 z-[9999] bg-[#FFFFEB] pointer-events-none transition-opacity duration-500 ease-in-out';
        
        // If the page has the massive door loader (index.html), don't start opaque
        const hasDoorLoader = document.getElementById('door-loader');
        if (hasDoorLoader) {
            overlay.style.opacity = '0';
        } else {
            // On secondary pages, start fully opaque then fade in smoothly
            overlay.style.opacity = '1';
            requestAnimationFrame(() => {
                setTimeout(() => {
                    overlay.style.opacity = '0';
                }, 50); 
            });
        }
        
        document.body.appendChild(overlay);

        // Intercept internal link clicks to trigger Outro fade
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (!link) return;
            
            const href = link.getAttribute('href');
            const target = link.getAttribute('target');
            
            // Skip external links, anchors, or new tabs
            if (
                !href || 
                href.startsWith('http') || 
                href.startsWith('mailto:') || 
                href.startsWith('tel:') || 
                href.startsWith('#') || 
                target === '_blank'
            ) {
                return;
            }
            
            // It's an internal navigation link! Prevent default jump.
            e.preventDefault();
            
            // Trigger fade out
            overlay.style.pointerEvents = 'auto'; // Block further clicks
            overlay.style.opacity = '1';
            
            // Navigate after fade completes
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });

        // --- 2. Magnetic Hover Effects ---
        const initMagneticButtons = () => {
            // Give system time to init
            setTimeout(() => {
                const magneticElements = document.querySelectorAll('a, button');
                
                magneticElements.forEach(el => {
                    // Ignore elements that already have heavy 3D tilt logic (like student cards)
                    if (el.closest('.student-card') || el.classList.contains('student-card')) return;
                    
                    // Target navbar links or rounded buttons
                    if (el.closest('nav') || el.classList.contains('rounded-full') || el.closest('#pwa-install-banner') || el.closest('.magnetic')) {
                        
                        el.addEventListener('mousemove', (e) => {
                            const rect = el.getBoundingClientRect();
                            const x = e.clientX - rect.left - rect.width / 2;
                            const y = e.clientY - rect.top - rect.height / 2;
                            
                            if (typeof gsap !== 'undefined') {
                                gsap.to(el, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: 'power2.out' });
                            } else {
                                el.style.transition = 'none';
                                el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
                            }
                        });
                        
                        el.addEventListener('mouseleave', () => {
                            if (typeof gsap !== 'undefined') {
                                gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.3)' });
                            } else {
                                el.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
                                el.style.transform = `translate(0px, 0px)`;
                            }
                        });
                    }
                });
            }, 500);
        };

        // --- 3. Subdued Parallax Scrolling ---
        const initParallax = () => {
            const parallaxElements = document.querySelectorAll('[data-parallax]');
            if (!parallaxElements.length) return;
            
            let ticking = false;
            
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        const scrolled = window.scrollY;
                        parallaxElements.forEach(el => {
                            const speed = parseFloat(el.getAttribute('data-parallax')) || 0;
                            // Translates the element up/down smoothly based on scroll distance and speed factor
                            el.style.transform = `translateY(${scrolled * speed}px)`;
                        });
                        ticking = false;
                    });
                    ticking = true;
                }
            }, { passive: true });
        };

        // Initialize immediately for elements already on screen
        initParallax();

        // --- 4. Lenis Smooth Scrolling ---
        const initLenis = () => {
            if (typeof Lenis !== 'undefined') {
                const lenis = new Lenis({
                    duration: 1.2,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    direction: 'vertical',
                    gestureDirection: 'vertical',
                    smooth: true,
                    mouseMultiplier: 1,
                    smoothTouch: false,
                    touchMultiplier: 2,
                    infinite: false,
                });
                function raf(time) {
                    lenis.raf(time);
                    requestAnimationFrame(raf);
                }
                requestAnimationFrame(raf);
            }
        };

        const loadLenis = () => {
            if (typeof Lenis === 'undefined') {
                const script = document.createElement('script');
                script.src = 'https://unpkg.com/@studio-freight/lenis@1.0.34/dist/lenis.min.js';
                script.onload = initLenis;
                document.head.appendChild(script);
            } else {
                initLenis();
            }
        };
        loadLenis();

        // --- 5. Interactive Spotlight Borders ---
        const initSpotlight = () => {
            // Apply spotlight CSS
            const style = document.createElement('style');
            style.innerHTML = `
                .student-card {
                    position: relative;
                    overflow: hidden;
                }
                .student-card::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    padding: 2px;
                    background: radial-gradient(
                        600px circle at var(--mouse-x, 0) var(--mouse-y, 0), 
                        rgba(240, 215, 255, 0.4), 
                        transparent 40%
                    );
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    pointer-events: none;
                    z-index: 10;
                    opacity: 0;
                    transition: opacity 0.5s ease;
                }
                .student-card:hover::before {
                    opacity: 1;
                }
            `;
            document.head.appendChild(style);

            // Track mouse on cards
            const trackCards = () => {
                const cards = document.querySelectorAll('.student-card');
                cards.forEach(card => {
                    card.addEventListener('mousemove', (e) => {
                        const rect = card.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        card.style.setProperty('--mouse-x', `${x}px`);
                        card.style.setProperty('--mouse-y', `${y}px`);
                    });
                });
            };
            
            // Re-run tracking binding if dynamically loaded
            setTimeout(trackCards, 1000); 
        };
        initSpotlight();

        // --- 7. Text Reveal Animations ---
        const initTextReveal = () => {
            const headings = document.querySelectorAll('h1, h2, h3');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        if (!target.classList.contains('revealed')) {
                            target.classList.add('revealed');
                            if (typeof gsap !== 'undefined') {
                                const words = target.querySelectorAll('.gsap-word');
                                if (words.length > 0) {
                                    gsap.fromTo(words, 
                                        { opacity: 0, y: 30, rotationX: -20 },
                                        { opacity: 1, y: 0, rotationX: 0, duration: 1, stagger: 0.05, ease: 'power3.out' }
                                    );
                                }
                            }
                        }
                    }
                });
            }, { threshold: 0.1 });

            // Safely split text nodes while preserving complex structures (like inline SVGs)
            headings.forEach(h => {
                if (h.closest('nav') || h.closest('.modal')) return;
                
                const walkAndWrap = (node) => {
                    const children = Array.from(node.childNodes);
                    children.forEach(child => {
                        if (child.nodeType === Node.TEXT_NODE && child.textContent.trim().length > 0) {
                            const words = child.textContent.split(/(\s+)/);
                            const frag = document.createDocumentFragment();
                            words.forEach(word => {
                                if (word.trim().length > 0) {
                                    const span = document.createElement('span');
                                    span.className = 'gsap-word inline-block opacity-0';
                                    span.textContent = word;
                                    frag.appendChild(span);
                                } else {
                                    frag.appendChild(document.createTextNode(word));
                                }
                            });
                            node.replaceChild(frag, child);
                        } else if (child.nodeType === Node.ELEMENT_NODE && !child.classList.contains('absolute')) {
                            walkAndWrap(child);
                        }
                    });
                };
                
                walkAndWrap(h);
                observer.observe(h);
            });
        };

        // Load GSAP dynamically if missing, then init GSAP dependent functions
        if (typeof gsap === 'undefined') {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
            script.onload = () => {
                initMagneticButtons();
                initTextReveal();
            };
            document.head.appendChild(script);
        } else {
            initMagneticButtons();
            initTextReveal();
        }

    });

})();
