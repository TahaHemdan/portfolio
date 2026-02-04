/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
    const menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

// Close menu after clicking on a link
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        const menuBtn = document.getElementById("myNavMenu");
        menuBtn.className = "nav-menu";
    });
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
    const menu = document.getElementById("myNavMenu");
    const menuToggle = document.querySelector(".nav-menu-btn i");
    const themeBtn = document.getElementById("theme-button");

    if (
        !menu.contains(event.target) &&
        !menuToggle.contains(event.target) &&
        !themeBtn.contains(event.target)
    ) {
        menu.className = "nav-menu";
    }
});

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
let isScrolling = false;

window.addEventListener("scroll", () => {
    if (isScrolling) {
        return;
    }

    isScrolling = true;
    window.requestAnimationFrame(() => {
        headerShadow();
        isScrolling = false;
    });
});

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.classList.add("nav-header-scrolled");
        navHeader.style.boxShadow = "var(--shadow-1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.classList.remove("nav-header-scrolled");
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

/* ----- TYPING EFFECT ----- */
/* ----- TYPING EFFECT ----- */
var typingEffect;

function initTyped(lang) {
    if (typingEffect) {
        typingEffect.destroy();
    }

    var strings = lang === 'ar'
        ? ["مطور واجهات أمامية", "مطور خلفيات / سيرفر", "مصمم تجربة مستخدم"]
        : ["Frontend Developer", "Backend Developer", "UI/UX Designer"];

    typingEffect = new Typed(".typedText", {
        strings: strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000,
    });
}

/* ----- SCROLL REVEAL ANIMATION ----- */
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal(".project-box", { interval: 200 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- SCROLL REVEAL LEFT_RIGHT ANIMATION ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll("section[id]");
const navLinksBySection = new Map();

sections.forEach((section) => {
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);
    if (navLink) {
        navLinksBySection.set(sectionId, navLink);
    }
});

const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const navLink = navLinksBySection.get(entry.target.id);
            if (!navLink) {
                return;
            }

            if (entry.isIntersecting) {
                navLink.classList.add("active-link");
            } else {
                navLink.classList.remove("active-link");
            }
        });
    },
    {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    }
);

sections.forEach((section) => sectionObserver.observe(section));

/* ----- DARK / LIGHT THEME ----- */
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'light' : 'dark'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-sun' : 'uil-moon'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'light' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'uil-sun' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/* ----- LANGUAGE TRANSLATION ----- */
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        download_cv: "Download CV",
        im: "I'm",
        hero_tagline: "Full Stack Developer specializing in Laravel.",
        hero_desc: `Hey there. <br>
            "I'm Taha Hemdan, 23 years old, studying at Al-Azhar University, Faculty of (Usul al-Din). I
            am a professional Full Stack web developer with experience in developing applications and
            projects using modern technologies like PHP, MySQL, JavaScript, and other tools that enable
            me to build integrated solutions for web projects."`,
        hire_me: "Hire Me",
        about_title: "About Me",
        about_intro: "My introduction",
        about_text: `My journey into web development began with a curiosity for how things work on the web,
            which quickly turned into a passion for building robust applications. I specialize in
            the LAMP stack (Linux, Apache, MySQL, PHP) and modern frameworks like Laravel. I
            prioritize clean, maintainable code and user-centric design to solve real-world
            problems. Whether it's a complex e-commerce platform or a custom CMS, I bring a
            detail-oriented approach to every project.`,
        frontend_title: "Frontend",
        backend_title: "Backend",
        db_title: "Database",
        services_title: "Services",
        services_subtitle: "What I Offer",
        api_dev: "API Development",
        api_dev_desc: "Robust RESTful APIs built with Laravel for seamless integration.",
        db_design: "Database Design",
        db_design_desc: "Efficient MySQL schemas optimized for performance and scale.",
        cms: "Custom CMS",
        cms_desc: "Tailored content management systems to fit your specific needs.",
        bug_fix: "Bug Fixing",
        bug_fix_desc: "Troubleshooting and resolving complex issues in existing codebases.",
        projects_title: "Projects",
        projects_subtitle: "Recent Work",
        contact_title: "Get in touch",
        contact_subtitle: "Do you have a project in your mind, contact me here",
        find_me: "Find Me",
        send_btn: "Send",
        footer_copy: "Copyright &copy;",
        footer_rights: "- All rights reserved",
        name_placeholder: "Name",
        email_placeholder: "Email",
        message_placeholder: "Message"
    },
    ar: {
        nav_home: "الرئيسية",
        nav_about: "عني",
        nav_projects: "المشاريع",
        nav_contact: "تواصل معي",
        download_cv: "تحميل السيرة الذاتية",
        im: "أنا",
        hero_tagline: "مطور ويب متكامل متخصص في لارافيل.",
        hero_desc: `مرحباً. <br>
            "أنا طه حمدان، عمري 23 عاماً، أدرس في جامعة الأزهر، كلية أصول الدين. أنا مطور ويب Full Stack محترف ذو خبرة في تطوير التطبيقات والمشاريع باستخدام التقنيات الحديثة مثل PHP، MySQL، JavaScript وأدوات أخرى تمكنني من بناء حلول متكاملة لمشاريع الويب."`,
        hire_me: "وظفني",
        about_title: "عني",
        about_intro: "مقدمتي",
        about_text: `بدأت رحلتي في تطوير الويب بفضول لمعرفة كيفية عمل الأشياء على الويب، وسرعان ما تحول ذلك إلى شغف ببناء تطبيقات قوية. أتخصص في حزمة LAMP وأطر العمل الحديثة مثل Laravel. أعطي الأولوية للكود النظيف القابل للصيانة والتصميم المتمحور حول المستخدم لحل مشاكل العالم الحقيقي. سواء كان منصة تجارة إلكترونية معقدة أو نظام إدارة محتوى مخصص، فإنني أقدم نهجاً يهتم بالتفاصيل لكل مشروع.`,
        frontend_title: "الواجهة الأمامية",
        backend_title: "الخلفية / السيرفر",
        db_title: "قواعد البيانات",
        services_title: "خدماتي",
        services_subtitle: "ماذا أقدم",
        api_dev: "تطوير واجهات برمجة التطبيقات (API)",
        api_dev_desc: "واجهات برمجية RESTful قوية مبنية بـ Laravel لتكامل سلس.",
        db_design: "تصميم قواعد البيانات",
        db_design_desc: "مخططات MySQL فعالة ومحسنة للأداء والتوسع.",
        cms: "لوحات تحكم خاصة (CMS)",
        cms_desc: "أنظمة إدارة محتوى مخصصة لتلائم احتياجاتك الخاصة.",
        bug_fix: "إصلاح الأخطاء",
        bug_fix_desc: "استكشاف وحل المشكلات المعقدة في الأكواد البرمجية الحالية.",
        projects_title: "المشاريع",
        projects_subtitle: "أعمال حديثة",
        contact_title: "تواصل معي",
        contact_subtitle: "هل لديك مشروع في ذهنك؟ تواصل معي هنا",
        find_me: "تجدني هنا",
        send_btn: "إرسال",
        footer_copy: "حقوق النشر &copy;",
        footer_rights: "- جميع الحقوق محفوظة",
        name_placeholder: "الاسم",
        email_placeholder: "البريد الإلكتروني",
        message_placeholder: "الرسالة"
    }
};

const languageToggleBtn = document.getElementById('language-toggle');
const currentLang = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
    localStorage.setItem('language', lang);

    // Update HTML classes
    if (lang === 'ar') {
        document.body.classList.add('rtl');
        document.documentElement.setAttribute('lang', 'ar');
        languageToggleBtn.textContent = 'EN';
        languageToggleBtn.setAttribute('aria-pressed', 'true');
    } else {
        document.body.classList.remove('rtl');
        document.documentElement.setAttribute('lang', 'en');
        languageToggleBtn.textContent = 'AR';
        languageToggleBtn.setAttribute('aria-pressed', 'false');
    }

    // Update Text Content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Check if element has children that we shouldn't overwrite (like iconic buttons), 
            // but we wrapped text in spans, so we can safely update innerHTML or textContent.
            // However, for elements like 'hire_me' which is <a>Hire Me</a>, we can just replace innerHTML.
            // Using innerHTML allows <br> tags in hero_desc.
            element.innerHTML = translations[lang][key];
        }
    });

    // Update Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Update Typed.js
    initTyped(lang);
}

function toggleLanguage() {
    const newLang = document.documentElement.getAttribute('lang') === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
}

languageToggleBtn.addEventListener('click', toggleLanguage);

// Initialize on load
setLanguage(currentLang);
