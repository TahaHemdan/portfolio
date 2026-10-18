/* ----- VARIABLES ----- */
:root {
    --hue: 223;
    --first-color: hsl(var(--hue), 90%, 61%);
    --first-color-alt: hsl(var(--hue), 85%, 55%);
    --first-glow: hsla(var(--hue), 90%, 61%, 0.4);
    --second-color: hsl(190, 80%, 60%);

    --body-color: hsl(var(--hue), 28%, 12%);
    --container-color: hsl(var(--hue), 20%, 15%);
    --header-bg: hsla(var(--hue), 28%, 12%, 0.85);

    --title-color: hsl(var(--hue), 8%, 95%);
    --text-color: hsl(var(--hue), 8%, 75%);
    --text-color-light: hsl(var(--hue), 8%, 68%);

    --glass-bg: rgba(255, 255, 255, 0.05);
    --glass-border: rgba(255, 255, 255, 0.1);

    --shadow-1: 0 4px 16px rgba(0, 0, 0, 0.3);
    --shadow-2: 0 8px 32px rgba(0, 0, 0, 0.4);

    --header-h: 80px;
    --z-fixed: 100;
}

.light-theme {
    --body-color: hsl(var(--hue), 28%, 96%);
    --container-color: #fff;
    --header-bg: hsla(var(--hue), 28%, 96%, 0.88);
    --title-color: hsl(var(--hue), 20%, 14%);
    --text-color: hsl(var(--hue), 10%, 33%);
    --text-color-light: hsl(var(--hue), 10%, 38%);
    --glass-bg: rgba(0, 0, 0, 0.04);
    --glass-border: rgba(0, 0, 0, 0.12);
    --shadow-1: 0 4px 16px rgba(0, 0, 0, 0.08);
    --shadow-2: 0 8px 32px rgba(0, 0, 0, 0.12);
}

/* ----- BASE ----- */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

html {
    scroll-behavior: smooth;
    scroll-padding-top: calc(var(--header-h) + 10px);
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--body-color);
    background-image:
        radial-gradient(circle at 20% 20%, hsla(var(--hue), 80%, 60%, 0.15) 0%, transparent 40%),
        radial-gradient(circle at 80% 80%, hsla(190, 100%, 50%, 0.12) 0%, transparent 40%);
    color: var(--text-color);
    overflow-x: clip;
    transition: background-color 0.4s, color 0.4s;
}

[dir="rtl"] body { font-family: 'Cairo', 'Poppins', sans-serif; }

button, input, textarea { font-family: inherit; }
button { background: none; border: 0; color: inherit; cursor: pointer; }
a { color: inherit; }
img { max-width: 100%; display: block; }
ul { list-style: none; }

:focus-visible { outline: 2px solid var(--first-color); outline-offset: 3px; }

.skip-link {
    position: fixed; top: -100px; inset-inline-start: 1rem; z-index: 200;
    background: var(--first-color); color: #fff; padding: 0.6rem 1rem; border-radius: 0.5rem;
    text-decoration: none;
}
.skip-link:focus { top: 1rem; }

.honeypot { position: absolute; left: -9999px; width: 1px; height: 1px; opacity: 0; }

/* Decorative background blobs */
.bg-blob {
    position: fixed; width: 300px; height: 300px; border-radius: 50%;
    filter: blur(100px); opacity: 0.2; z-index: -1; pointer-events: none;
}
.bg-blob--one { background: var(--first-color); top: 10%; inset-inline-start: -100px; }
.bg-blob--two { background: var(--second-color); bottom: 10%; inset-inline-end: -100px; }

/* ----- SCROLLBAR ----- */
::-webkit-scrollbar { width: 10px; background: var(--body-color); }
::-webkit-scrollbar-thumb { background: var(--container-color); border-radius: 5px; border: 1px solid var(--glass-border); }
::-webkit-scrollbar-thumb:hover { background: var(--first-color); }

/* ----- BUTTONS ----- */
.btn {
    display: inline-flex; align-items: center; column-gap: 0.5rem;
    padding: 1rem 2rem;
    background: var(--first-color); color: #fff; font-weight: 500; text-decoration: none;
    border: 1px solid transparent; border-radius: 1rem; cursor: pointer;
    transition: 0.4s; box-shadow: 0 4px 12px var(--first-glow);
}
.btn:hover { background: var(--first-color-alt); transform: translateY(-2px); box-shadow: 0 8px 24px var(--first-glow); }
.btn > i { font-size: 1.25rem; transition: 0.3s; }
.btn:hover > i { transform: translateX(5px); }
[dir="rtl"] .btn:hover > i { transform: translateX(-5px); }
.btn-outline { background: transparent; color: var(--title-color); border-color: var(--first-color); box-shadow: none; }
.btn-outline:hover { color: #fff; }

/* ----- HEADER & NAV ----- */
nav {
    position: fixed; top: 0; width: 100%; height: var(--header-h);
    display: flex; justify-content: space-between; align-items: center;
    padding-inline: 9vw; z-index: var(--z-fixed);
    transition: background 0.3s, box-shadow 0.3s, height 0.3s;
}
.nav-header-scrolled {
    background: var(--header-bg);
    -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px);
    box-shadow: var(--shadow-1);
    height: 70px;
}

.nav-logo { display: flex; align-items: center; text-decoration: none; }
.nav-name { font-size: 1.5rem; font-weight: 600; color: var(--title-color); }
.nav-dot { font-size: 2rem; color: var(--first-color); margin-inline-start: 2px; }

.nav-menu { display: flex; align-items: center; column-gap: 1.5rem; }
.nav_menu_list { display: flex; column-gap: 2.5rem; }

.nav-link { color: var(--title-color); font-weight: 500; text-decoration: none; transition: 0.3s; position: relative; }
.nav-link:hover, .active-link { color: var(--first-color); }
.active-link::after {
    content: ''; position: absolute; inset-inline: 0; bottom: -5px; height: 2px;
    background: var(--first-color); border-radius: 4px; box-shadow: 0 0 10px var(--first-color);
}

.change-theme { font-size: 1.25rem; color: var(--title-color); transition: 0.3s; line-height: 1; }
.change-theme:hover { color: var(--first-color); }

.language-toggle {
    display: flex; align-items: center; justify-content: center;
    width: 44px; height: 32px; margin-inline-start: 0.5rem;
    font-weight: 500; color: var(--title-color);
    border: 1px solid var(--glass-border); border-radius: 6px; transition: 0.3s;
}
.language-toggle:hover { background: var(--first-color); color: #fff; border-color: var(--first-color); }

.nav-menu-btn { display: none; font-size: 1.6rem; color: var(--title-color); }

/* ----- WRAPPER ----- */
.wrapper { padding-inline: 9vw; margin-top: var(--header-h); }

/* ----- HOME ----- */
.featured-box { display: flex; align-items: center; min-height: calc(100vh - var(--header-h)); column-gap: 2rem; }
.featured-text { width: 50%; }

.featured-text-card span {
    background: linear-gradient(90deg, var(--second-color), var(--first-color));
    color: #fff; padding: 5px 15px; font-size: 0.9rem; border-radius: 5px; font-weight: 600; letter-spacing: 1px;
}
.featured-name { font-size: 3.2rem; font-weight: 700; color: var(--title-color); margin: 1.5rem 0 0.5rem; line-height: 1.25; }
.typedText { color: var(--first-color); }
.featured-tagline { font-size: 1.05rem; color: var(--text-color-light); max-width: 520px; line-height: 1.6; margin-bottom: 1rem; }
.featured-text-info { margin-bottom: 2.5rem; line-height: 1.7; max-width: 60ch; }
.featured-text-btn { display: flex; flex-wrap: wrap; gap: 1rem; }
.social_icons { display: flex; column-gap: 1.5rem; margin-top: 3rem; }

.icon {
    display: flex; justify-content: center; align-items: center;
    width: 45px; height: 45px; border-radius: 50%;
    background: var(--glass-bg); border: 1px solid var(--glass-border);
    color: var(--first-color); font-size: 1.2rem; transition: 0.4s;
}
.icon:hover { background: var(--first-color); color: #fff; box-shadow: 0 0 15px var(--first-color); transform: translateY(-5px); }

.featured-image { width: 50%; display: flex; justify-content: center; }
.image {
    width: 400px; height: 400px; border-radius: 50%; padding: 10px;
    background: linear-gradient(180deg, var(--first-color), transparent);
    animation: profileAnimate 8s ease-in-out infinite;
}
.image img { width: 100%; height: 100%; border-radius: inherit; object-fit: cover; border: 5px solid var(--body-color); }

@keyframes profileAnimate {
    0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
}

/* ----- SECTIONS ----- */
.section { padding-block: 6rem; }
.top-header { text-align: center; margin-bottom: 4rem; }
.top-header h2 { font-size: 2.5rem; color: var(--title-color); margin-bottom: 0.5rem; }
.top-header span { color: var(--text-color-light); font-size: 0.9rem; }

.row { display: flex; justify-content: space-between; column-gap: 4rem; }
.col { display: flex; flex-direction: column; width: 50%; }

/* ABOUT */
.about-info {
    background: var(--container-color); padding: 2.5rem; border-radius: 1.5rem;
    border: 1px solid var(--glass-border); line-height: 1.7; transition: 0.4s;
}
.about-info:hover { border-color: var(--first-color); box-shadow: 0 0 20px var(--first-glow); }
.about-info h3 { margin-bottom: 1rem; color: var(--title-color); }
.about-btn { margin-top: 1.5rem; }

.skills-box { margin-bottom: 2rem; }
.skills-header h3 { color: var(--title-color); margin-bottom: 1rem; font-size: 1.25rem; }
.skills-list { display: flex; flex-wrap: wrap; gap: 0.8rem; }
.skills-list span {
    padding: 0.6rem 1.2rem; background: var(--container-color); border: 1px solid var(--glass-border);
    border-radius: 0.5rem; font-size: 0.9rem; color: var(--title-color); transition: 0.3s; cursor: default;
}
.skills-list span:hover { background: var(--first-color); border-color: var(--first-color); color: #fff; transform: translateY(-3px); }

/* PROJECTS */
.project-container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
.project-card {
    background: var(--container-color); border-radius: 1.5rem; border: 1px solid var(--glass-border);
    overflow: hidden; transition: transform 0.4s, box-shadow 0.4s;
    display: flex; flex-direction: column; text-align: start; height: 100%;
}
.project-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-2); }
.project-img { width: 100%; height: 180px; object-fit: cover; border-bottom: 1px solid var(--glass-border); }
.project-info { padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1; }
.project-info h3 { font-size: 1.25rem; color: var(--title-color); margin-bottom: 0.5rem; }
.project-info p { font-size: 0.9rem; margin-bottom: 1rem; flex-grow: 1; line-height: 1.6; }
.project-tech { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
.project-tech span {
    font-size: 0.8rem; padding: 4px 10px; background: var(--glass-bg); border-radius: 4px;
    color: var(--first-color); border: 1px solid var(--glass-border);
}
.project-links { display: flex; gap: 1rem; }
.btn-small {
    display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem;
    border: 1px solid var(--first-color); border-radius: 0.5rem;
    text-decoration: none; color: var(--title-color); font-size: 0.9rem; transition: 0.3s;
}
.btn-small:hover { background: var(--first-color); color: #fff; }

/* SERVICES */
.service-container { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; }
.service-box {
    background: var(--container-color); padding: 2.5rem; border-radius: 1.5rem; text-align: center;
    border: 1px solid var(--glass-border); transition: 0.4s; position: relative; overflow: hidden; z-index: 1;
}
.service-box::before {
    content: ''; position: absolute; top: 0; inset-inline-start: 0; width: 0; height: 100%;
    background: var(--first-color); z-index: -1; transition: 0.4s;
}
.service-box:hover::before { width: 100%; }
.service-box i { font-size: 2.5rem; color: var(--first-color); margin-bottom: 1.5rem; display: block; transition: 0.4s; }
.service-box h3 { color: var(--title-color); font-size: 1.4rem; margin-bottom: 1rem; transition: 0.4s; }
.service-box p { font-size: 0.95rem; line-height: 1.6; transition: 0.4s; }
.service-box:hover i, .service-box:hover h3, .service-box:hover p { color: #fff; }

/* CONTACT */
.contact-info {
    background: var(--container-color); padding: 2.5rem; border-radius: 1.5rem;
    border: 1px solid var(--glass-border); display: flex; flex-direction: column; gap: 1.5rem; height: 100%;
}
.contact-title { color: var(--title-color); font-size: 1.8rem; }
[dir="rtl"] .uil-corner-right-down { transform: scaleX(-1); display: inline-block; }
.contact-info p { display: flex; align-items: center; }
.contact-info a { display: inline-flex; align-items: center; gap: 1rem; text-decoration: none; transition: 0.3s; }
.contact-info a:hover { color: var(--first-color); }
.contact-info i { color: var(--first-color); font-size: 1.5rem; }

.form-input-group { display: flex; gap: 1rem; margin-bottom: 1rem; }
.input-field, textarea {
    width: 100%; background: var(--container-color); border: 1px solid var(--glass-border);
    padding: 1rem; border-radius: 0.8rem; color: var(--title-color); outline: none; transition: 0.3s; font-size: 1rem;
}
.input-field::placeholder, textarea::placeholder { color: var(--text-color-light); }
.input-field:focus, textarea:focus { border-color: var(--first-color); box-shadow: 0 0 10px var(--first-glow); }
textarea { resize: vertical; min-height: 160px; height: 180px; margin-bottom: 1rem; display: block; }
.form-status { margin-top: 1rem; min-height: 1.5em; font-size: 0.95rem; }
.form-status.ok { color: #22a06b; }
.form-status.error { color: #e5484d; }

/* FOOTER */
footer {
    background: var(--container-color); padding-block: 4rem; text-align: center;
    margin-top: 5rem; border-top: 1px solid var(--glass-border);
}
.top-footer { color: var(--title-color); font-weight: 600; font-size: 1.2rem; }
.footer-menu { display: flex; justify-content: center; flex-wrap: wrap; gap: 2rem; margin-block: 2rem; }
.footer-menu a { color: var(--title-color); text-decoration: none; transition: 0.3s; }
.footer-menu a:hover { color: var(--first-color); }
.footer-social-icons { display: flex; justify-content: center; gap: 1.5rem; }
.bottom-footer { margin-top: 2rem; color: var(--text-color-light); font-size: 0.9rem; }
.bottom-footer a { text-decoration: none; }

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
    .image, .image img { width: 320px; height: 320px; }
    .project-container { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 900px) {
    .nav-button { display: none; }
    .nav-menu-btn { display: block; }

    .nav-menu {
        position: fixed; top: var(--header-h); inset-inline: 0;
        height: calc(100dvh - var(--header-h));
        flex-direction: column; justify-content: center; align-items: center; row-gap: 2rem;
        background: var(--header-bg);
        -webkit-backdrop-filter: blur(20px); backdrop-filter: blur(20px);
        opacity: 0; visibility: hidden; pointer-events: none;
        transition: opacity 0.3s, visibility 0.3s;
    }
    .nav-menu.responsive { opacity: 1; visibility: visible; pointer-events: auto; }
    .nav_menu_list { flex-direction: column; align-items: center; gap: 2rem; }

    .featured-box { flex-direction: column; justify-content: center; min-height: 100vh; height: auto; padding-block: 2rem; text-align: center; }
    .featured-text { width: 100%; order: 2; }
    .featured-tagline, .featured-text-info { margin-inline: auto; }
    .featured-text-btn, .social_icons { justify-content: center; }
    .social_icons { margin-top: 2rem; }
    .featured-image { order: 1; width: 100%; margin-bottom: 2rem; }
    .image, .image img { width: 180px; height: 180px; }

    .row { flex-direction: column; gap: 2rem; }
    .col { width: 100%; }
    .project-container, .service-container { grid-template-columns: 1fr; }
}

@media (max-width: 540px) {
    .featured-name { font-size: 2.2rem; }
    .form-input-group { flex-direction: column; }
    .section { padding-block: 4rem; }
    .about-info, .contact-info, .service-box { padding: 1.75rem; }
}

@media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { animation: none !important; transition-duration: 0.01ms !important; }
}
