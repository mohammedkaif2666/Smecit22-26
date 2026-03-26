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
        window.isInternalNav = false;
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
            
            window.isInternalNav = true;
            if (window.UI_SOUNDS) window.UI_SOUNDS.playWhoosh();
            
            // Trigger fade out
            overlay.style.pointerEvents = 'auto'; // Block further clicks
            overlay.style.opacity = '1';
            
            // Navigate after fade completes
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });

        // Handle Browser Back/Forward (bfcache) Restorations
        window.addEventListener('pageshow', (e) => {
            if (e.persisted) {
                // Instantly remove the cream overlay if loaded from history
                overlay.style.opacity = '0';
                overlay.style.pointerEvents = 'none';
            }
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

        // --- 4. Lenis Smooth Scrolling & Velocity Skew ---
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

                // Velocity Skew
                const skewElements = document.querySelectorAll('.student-card, .card-shadow');
                if (skewElements.length > 0) {
                    lenis.on('scroll', (e) => {
                        const skew = e.velocity * 0.15; 
                        const clampedSkew = Math.max(-3, Math.min(3, skew));
                        skewElements.forEach(el => {
                            el.style.transform = `skewY(${clampedSkew}deg)`;
                        });
                    });
                }

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

        // --- 8. Ambient Breathing Glow ---
        const initAmbientGlow = () => {
            const style = document.createElement('style');
            style.innerHTML = `
                @keyframes ambientBreathe {
                    0%, 100% { box-shadow: 0 0 15px 2px rgba(255, 122, 89, 0.3), 0 0 30px 5px rgba(240, 215, 255, 0.15); }
                    50% { box-shadow: 0 0 25px 5px rgba(255, 122, 89, 0.5), 0 0 45px 10px rgba(240, 215, 255, 0.3); }
                }
                .ambient-glow {
                    animation: ambientBreathe 4s ease-in-out infinite;
                }
            `;
            document.head.appendChild(style);
            
            // Add precisely to prominently mapped primary buttons across the site
            const addGlows = () => {
                const primaryBtns = document.querySelectorAll('a[href="admin.html"], a.bg-gold, button.bg-slate-900, a.text-white[href="index.html"]');
                primaryBtns.forEach(btn => btn.classList.add('ambient-glow'));
            };
            addGlows();
            setTimeout(addGlows, 1000);
        };
        initAmbientGlow();

        // --- 9. Reading Progress Silhouette ---
        const initReadingProgress = () => {
            const progressBar = document.createElement('div');
            progressBar.id = 'reading-progress';
            progressBar.style.cssText = `
                position: fixed; top: 0; left: 0; height: 3px; width: 0%;
                background: linear-gradient(90deg, #FF7A59, #c791e8);
                z-index: 10000; pointer-events: none;
                transition: width 0.1s ease-out;
            `;
            document.body.appendChild(progressBar);

            window.addEventListener('scroll', () => {
                const totalScroll = document.documentElement.scrollTop;
                const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                if(windowHeight > 0) {
                    const scrollPosition = `${(totalScroll / windowHeight) * 100}%`;
                    progressBar.style.width = scrollPosition;
                }
            }, { passive: true });
        };
        initReadingProgress();

        // --- 10. Glassmorphism Custom Tooltips ---
        const initCustomTooltips = () => {
            const tooltip = document.createElement('div');
            tooltip.id = 'glass-tooltip';
            tooltip.style.cssText = `
                position: fixed; top: 0; left: 0;
                pointer-events: none; z-index: 10001; opacity: 0;
                background: rgba(255, 255, 235, 0.85);
                backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
                border: 1px solid rgba(26, 26, 26, 0.1);
                padding: 6px 14px; border-radius: 20px;
                color: #1A1A1A; font-size: 13px; font-weight: 600; font-family: 'Figtree', sans-serif;
                transform: translate(-50%, -150%);
                transition: opacity 0.2s ease, transform 0.1s ease-out;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                white-space: nowrap;
            `;
            document.body.appendChild(tooltip);

            const bindTooltip = (el) => {
                if (el.hasAttribute('data-tooltip-bound')) return;
                
                const titleText = el.getAttribute('title') || el.getAttribute('data-hover');
                if (titleText && titleText.trim() !== '') {
                    el.setAttribute('data-tooltip', titleText);
                    el.removeAttribute('title');
                    el.setAttribute('data-tooltip-bound', 'true');

                    el.addEventListener('mouseenter', (e) => {
                        tooltip.textContent = el.getAttribute('data-tooltip');
                        tooltip.style.opacity = '1';
                        tooltip.style.left = `${e.clientX}px`;
                        tooltip.style.top = `${e.clientY - 15}px`;
                    });

                    el.addEventListener('mousemove', (e) => {
                        tooltip.style.left = `${e.clientX}px`;
                        tooltip.style.top = `${e.clientY - 15}px`;
                    });

                    el.addEventListener('mouseleave', () => {
                        tooltip.style.opacity = '0';
                    });
                }
            };

            const scanForTooltips = () => {
                document.querySelectorAll('[title], [data-hover]').forEach(bindTooltip);
            };
            
            scanForTooltips();
            setTimeout(scanForTooltips, 1000); // Re-scan dynamically (for directory cards)
            setTimeout(scanForTooltips, 3000);
        };
        initCustomTooltips();

        // --- 11. Dynamic Browser Tabs ---
        const initDynamicTabs = () => {
            let originalTitle = document.title;
            window.addEventListener('blur', () => {
                document.title = "Come back to SMEC IT! 👀";
            });
            window.addEventListener('focus', () => {
                document.title = originalTitle;
            });
        };
        initDynamicTabs();

        // --- 12. Transparent-to-Frosted Navbar ---
        const initNavbar = () => {
            const nav = document.querySelector('nav');
            if (!nav) return;
            
            nav.classList.remove('bg-white/80', 'backdrop-blur-md', 'shadow-sm', 'bg-slate-100', 'bg-white/90');
            nav.classList.add('transition-all', 'duration-500', 'border-b');

            const updateNav = () => {
                if (window.scrollY > 50) {
                    nav.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'border-gold/30');
                    nav.classList.remove('bg-transparent', 'border-transparent');
                } else {
                    nav.classList.add('bg-transparent', 'border-transparent');
                    nav.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'border-gold/30');
                }
            };
            
            window.addEventListener('scroll', updateNav, { passive: true });
            updateNav();
        };
        initNavbar();

        // --- 13. Subdued UI Sound Design (Web Audio API) ---
        const initSounds = () => {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            const audioCtx = new AudioContext();

            const playTick = () => {
                if (audioCtx.state === 'suspended') return; 
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                
                osc.type = 'sine';
                osc.frequency.setValueAtTime(800, audioCtx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.05);
                
                gain.gain.setValueAtTime(0, audioCtx.currentTime);
                gain.gain.linearRampToValueAtTime(0.015, audioCtx.currentTime + 0.01);
                gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.05);
                
                osc.start();
                osc.stop(audioCtx.currentTime + 0.05);
            };

            const playWhoosh = () => {
                if (audioCtx.state === 'suspended') return;
                const bufferSize = audioCtx.sampleRate * 0.4; 
                const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
                const data = buffer.getChannelData(0);
                for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
                
                const noiseSource = audioCtx.createBufferSource();
                noiseSource.buffer = buffer;
                
                const filter = audioCtx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(150, audioCtx.currentTime);
                filter.frequency.linearRampToValueAtTime(600, audioCtx.currentTime + 0.2);
                
                const gain = audioCtx.createGain();
                gain.gain.setValueAtTime(0, audioCtx.currentTime);
                gain.gain.linearRampToValueAtTime(0.02, audioCtx.currentTime + 0.1);
                gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.4);
                
                noiseSource.connect(filter);
                filter.connect(gain);
                gain.connect(audioCtx.destination);
                
                noiseSource.start();
            };

            setTimeout(() => {
                document.querySelectorAll('a, button, .student-card').forEach(el => {
                    el.addEventListener('mouseenter', playTick);
                });
            }, 1000);

            window.UI_SOUNDS = { playTick, playWhoosh };
            
            document.body.addEventListener('click', () => {
                if (audioCtx.state === 'suspended') audioCtx.resume();
            }, { once: true });
        };
        initSounds();

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
