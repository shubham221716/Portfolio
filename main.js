/*=============== MENU TOGGLE ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

/*=============== REMOVE MENU ON LINK CLICK ===============*/
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav-menu').classList.remove('show');
    });
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const navItem = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);

        if (navItem) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navItem.classList.add('active');
            } else {
                navItem.classList.remove('active');
            }
        }
    });
};
window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true // Uncomment to repeat animations on scroll
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text');
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img, .articles', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });

/*=============== SCROLL TO TOP BUTTON ===============*/
const myButton = document.getElementById('myBtn');

const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = 'block';
    } else {
        myButton.style.display = 'none';
    }
};

window.onscroll = scrollFunction;

const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

/*=============== DARK/LIGHT THEME TOGGLE ===============*/
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

const getPreferredTheme = () =>
    localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

const applyTheme = theme => {
    body.setAttribute('data-theme', theme);
    themeIcon.classList.replace(theme === 'dark' ? 'bx-sun' : 'bx-moon', theme === 'dark' ? 'bx-moon' : 'bx-sun');
    localStorage.setItem('theme', theme);
};

// Apply initial theme
applyTheme(getPreferredTheme());

// Toggle theme on click
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    applyTheme(currentTheme === 'light' ? 'dark' : 'light');
});


document.addEventListener('DOMContentLoaded', function() {
    const skills = [
        { name: 'HTML', level: '75%', text: 'Intermediate' },
        { name: 'CSS', level: '70%', text: 'Intermediate' },
        { name: 'Javascript', level: '40%', text: 'Beginner' },
        { name: 'PHP', level: '45%', text: 'Beginner' },
        { name: 'SQL', level: '50%', text: 'Beginner' },
        { name: 'C Language', level: '65%', text: 'Intermediate' },
        { name: 'C++', level: '60%', text: 'Intermediate' },
        { name: 'JAVA', level: '35%', text: 'Beginner' },
        { name: 'XAMMP', level: '40%', text: 'Beginner' },
        { name: 'Github', level: '70%', text: 'Intermediate' }
    ];

    const skillBars = document.querySelectorAll('.skills__bar');
    const skillPercentages = document.querySelectorAll('.skills__percentage');

    skillBars.forEach((bar, index) => {
        bar.style.setProperty('--skill-level', skills[index].level);
        skillPercentages[index].textContent = `${skills[index].level} (${skills[index].text})`;
    });
});