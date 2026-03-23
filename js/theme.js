(function() {
    // 1. Define Multivariate Themes
    const themes = {
        classic: {
            primary: '#0f172a',
            gold: '#d4af37',
            goldLight: '#f3e5ab',
            maroon: '#800000',
            surface: '#ffffff',
            bodyBg: '#fafafa',
            textColor: '#1e293b',
            fontSans: "'Inter', sans-serif",
            fontSerif: "'Playfair Display', serif"
        },
        cyberpunk: {
            primary: '#09090b',    // super dark
            gold: '#00ff9f',       // neon green
            goldLight: '#d1ffeb',
            maroon: '#f62e97',     // neon pink
            surface: '#18181b',    // dark surface
            bodyBg: '#050505',
            textColor: '#e4e4e7',
            fontSans: "'Courier New', monospace",
            fontSerif: "'Courier New', monospace"
        },
        minimalist: {
            primary: '#ffffff',
            gold: '#000000',       // pure black accents
            goldLight: '#eeeeee',
            maroon: '#333333',
            surface: '#ffffff',
            bodyBg: '#ffffff',
            textColor: '#000000',
            fontSans: "Helvetica, Arial, sans-serif",
            fontSerif: "Helvetica, Arial, sans-serif"
        }
    };

    const themeKeys = Object.keys(themes);

    // 2. Load or Pick Random (Using session storage so navigating between pages doesn't flash)
    let currentTheme = sessionStorage.getItem('smec_theme');
    
    if (!currentTheme || !themes[currentTheme]) {
        currentTheme = themeKeys[Math.floor(Math.random() * themeKeys.length)];
        sessionStorage.setItem('smec_theme', currentTheme);
    }

    const t = themes[currentTheme];

    // 3. Inject CSS Variables & Theme Specific Overrides
    const style = document.createElement('style');
    style.innerHTML = `
        :root {
            --theme-primary: ${t.primary};
            --theme-gold: ${t.gold};
            --theme-gold-light: ${t.goldLight};
            --theme-maroon: ${t.maroon};
            --theme-surface: ${t.surface};
            --theme-bg: ${t.bodyBg};
            --theme-text: ${t.textColor};
            --theme-font-sans: ${t.fontSans};
            --theme-font-serif: ${t.fontSerif};
        }
        body {
            background-color: var(--theme-bg) !important;
            color: var(--theme-text) !important;
            font-family: var(--theme-font-sans) !important;
            transition: background-color 0.5s ease;
        }
        
        /* Overrides for Cyberpunk Theme */
        ${currentTheme === 'cyberpunk' ? `
            .glass { background: rgba(24, 24, 27, 0.8) !important; border-bottom: 1px solid #00ff9f !important; }
            .card-shadow { background: #18181b !important; border: 1px solid #3f3f46 !important; }
            h1, h2, h3, .text-gold { text-shadow: 0 0 8px rgba(0,255,159,0.4); }
            img { filter: saturate(1.5) contrast(1.1); border: 1px solid #f62e97; }
        ` : ''}
        
        /* Overrides for Minimalist / Brutalist Theme */
        ${currentTheme === 'minimalist' ? `
            .glass { background: rgba(255, 255, 255, 0.95) !important; border-bottom: 2px solid #000 !important; }
            .card-shadow { background: #fff !important; border: 2px solid #000 !important; box-shadow: 8px 8px 0px #000 !important; border-radius: 0 !important; }
            .rounded-2xl, .rounded-full, .rounded-xl, .rounded-[2.5rem] { border-radius: 0 !important; }
            img { filter: grayscale(100%); transition: filter 0.3s; }
            img:hover { filter: grayscale(0%); }
            .text-stroke { -webkit-text-stroke: 1px #000; }
        ` : ''}
    `;
    document.head.appendChild(style);

    // 4. Inject Tailwind Config Map
    window.tailwind = window.tailwind || {};
    window.tailwind.config = {
        theme: {
            extend: {
                colors: {
                    'primary': 'var(--theme-primary)',
                    'gold': 'var(--theme-gold)',
                    'gold-light': 'var(--theme-gold-light)',
                    'maroon': 'var(--theme-maroon)',
                    'surface': 'var(--theme-surface)',
                    // Magic override: Invert slate colors for Cyberpunk/Dark Themes automatically!
                    ...(currentTheme === 'cyberpunk' ? {
                        slate: {
                            50: '#18181b',  // Normally lightest, now darkest
                            100: '#18181b', // Navbar background
                            200: '#27272a',
                            300: '#3f3f46',
                            400: '#52525b',
                            500: '#71717a',
                            600: '#a1a1aa',
                            700: '#d4d4d8',
                            800: '#e4e4e7',
                            900: '#f4f4f5', // Normally darkest, now lightest
                            950: '#ffffff'
                        },
                        white: '#09090b', // Invert pure white backgrounds
                        black: '#ffffff'
                    } : {})
                },
                fontFamily: {
                    sans: ['var(--theme-font-sans)', 'sans-serif'],
                    serif: ['var(--theme-font-serif)', 'serif'],
                },
                boxShadow: {
                    'soft': '0 4px 20px -5px rgba(0,0,0,0.1)',
                    'gold-glow': '0 0 25px var(--theme-gold)',
                },
                animation: {
                    'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                }
            }
        }
    };
    
    console.log("Loaded Multiverse Theme:", currentTheme);
})();
