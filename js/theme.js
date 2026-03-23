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
        },
        babypink: {
            primary: '#fff0f5',    // Lavender blush
            gold: '#ffb6c1',       // Light pink
            goldLight: '#ffe4e1',
            maroon: '#db7093',     // Pale violet red
            surface: '#fff5f8',
            bodyBg: '#fff0f5',
            textColor: '#5d3a4a',
            fontSans: "'Quicksand', 'Nunito', sans-serif",
            fontSerif: "'Quicksand', 'Nunito', sans-serif"
        },
        oceanic: {
            primary: '#082f49',    // Sky 900
            gold: '#0ea5e9',       // Sky 500
            goldLight: '#e0f2fe',
            maroon: '#0284c7',     // Sky 600
            surface: '#0c4a6e',
            bodyBg: '#020617',     // Very dark blue
            textColor: '#e0f2fe',
            fontSans: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSerif: "'Georgia', serif"
        },
        synthwave: {
            primary: '#2e0a4f',    // Deep violet
            gold: '#f9a826',       // Vivid orange/yellow
            goldLight: '#ffd166',
            maroon: '#ef476f',     // Vivid pink/red
            surface: '#1b0636',
            bodyBg: '#120424',
            textColor: '#f8f9fa',
            fontSans: "'Trebuchet MS', sans-serif",
            fontSerif: "'Trebuchet MS', sans-serif"
        }
    };

    const themeKeys = Object.keys(themes);

    // 2. Load or Pick Random
    // Rule: Always randomize if the user is loading/reloading the index.html page!
    const isIndexPage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '';
    let currentTheme = sessionStorage.getItem('smec_theme');
    
    if (isIndexPage || !currentTheme || !themes[currentTheme]) {
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

        /* Overrides for Baby Pink Theme */
        ${currentTheme === 'babypink' ? `
            .glass { background: rgba(255, 240, 245, 0.9) !important; border-bottom: 2px dashed #ffb6c1 !important; box-shadow: 0 4px 15px rgba(255, 182, 193, 0.4) !important; }
            .card-shadow { background: #fff5f8 !important; border: 2px solid #ffe4e1 !important; border-radius: 2rem !important; }
            * { transition: all 0.4s ease-in-out; }
        ` : ''}

        /* Overrides for Oceanic Theme */
        ${currentTheme === 'oceanic' ? `
            .glass { background: rgba(8, 47, 73, 0.85) !important; border-bottom: 2px solid #0ea5e9 !important; }
            .card-shadow { background: #0c4a6e !important; border: 1px solid #0284c7 !important; border-radius: 1.5rem !important; }
            img { filter: drop-shadow(0 0 10px rgba(14,165,233,0.3)); }
        ` : ''}

        /* Overrides for Synthwave Theme */
        ${currentTheme === 'synthwave' ? `
            .glass { background: rgba(46, 10, 79, 0.85) !important; border-bottom: 2px solid #ef476f !important; }
            .card-shadow { background: #1b0636 !important; border: 2px solid #f9a826 !important; box-shadow: 4px 4px 0px #ef476f !important; }
            h1, h2, h3 { text-shadow: 2px 2px 0px #ef476f, -1px -1px 0px #0bd3d3; }
            .text-gold { color: #f9a826 !important; text-shadow: 0 0 8px rgba(249,168,38,0.8); }
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
                    // Magic override: Invert slate colors for Dark Themes automatically!
                    ...(['cyberpunk', 'oceanic', 'synthwave'].includes(currentTheme) ? {
                        slate: {
                            50: '#18181b',  // Normally lightest, now darkest
                            100: '#18181b', 
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
