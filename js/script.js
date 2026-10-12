// ===== Light / dark theme =====
const root = document.documentElement;
const themeToggle = document.querySelector('#theme-toggle');

function updateToggle() {
    const isLight = root.getAttribute('data-theme') === 'light';
    themeToggle.querySelector('i').className = isLight ? 'bx bx-moon' : 'bx bx-sun';
    themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
}

themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    updateToggle();
});

updateToggle();
// ===== Mobile menu toggle =====
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

menuIcon.onclick = () => {
    const isOpen = navbar.classList.toggle('active');
    menuIcon.querySelector('i').classList.toggle('bx-x', isOpen);
    menuIcon.setAttribute('aria-expanded', isOpen);
};

// Close the menu after a link is clicked (mobile)
navLinks.forEach(link => {
    link.onclick = () => {
        navbar.classList.remove('active');
        menuIcon.querySelector('i').classList.remove('bx-x');
        menuIcon.setAttribute('aria-expanded', false);
    };
});

// ===== Highlight the nav link of the section on screen =====
const sections = document.querySelectorAll('main section');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
        const id = section.getAttribute('id');
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === '#' + id);
            });
        }
    });

    document.querySelector('.header').classList.toggle('sticky', window.scrollY > 50);
});

// ===== Reveal sections on scroll =====
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== Project filter =====
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.onclick = () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.dataset.filter;
        projectCards.forEach(card => {
            const show = filter === 'all' || card.dataset.category === filter;
            card.classList.toggle('hidden', !show);
        });
    };
});

// ===== Contact form validation =====
const form = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');
const contactEmail = document.querySelector('#contact-email').textContent.trim();

function showError(input, message) {
    const field = input.parentElement;
    field.classList.toggle('invalid', message !== '');
    field.querySelector('.error-msg').textContent = message;
}

function validateForm() {
    const name = form.name;
    const email = form.email;
    const phone = form.phone;
    const subject = form.subject;
    const message = form.message;
    let valid = true;

    if (name.value.trim().length < 2) {
        showError(name, 'Please enter your full name.');
        valid = false;
    } else {
        showError(name, '');
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        showError(email, 'Please enter a valid email address.');
        valid = false;
    } else {
        showError(email, '');
    }

    // Phone is optional, but if filled in it must look like a SA number (e.g. 071 234 5678 or +27 71 234 5678)
    const digits = phone.value.replace(/[\s-]/g, '');
    if (digits !== '' && !/^(\+27|0)\d{9}$/.test(digits)) {
        showError(phone, 'Please enter a valid phone number, e.g. 071 234 5678.');
        valid = false;
    } else {
        showError(phone, '');
    }

    if (subject.value.trim() === '') {
        showError(subject, 'Please add a subject.');
        valid = false;
    } else {
        showError(subject, '');
    }

    if (message.value.trim().length < 10) {
        showError(message, 'Your message should be at least 10 characters.');
        valid = false;
    } else {
        showError(message, '');
    }

    return valid;
}

form.addEventListener('submit', event => {
    event.preventDefault();

    if (!validateForm()) {
        formStatus.textContent = 'Please fix the highlighted fields.';
        formStatus.className = 'form-status error';
        return;
    }

    // No server on GitHub Pages, so open the visitor's email app with the message filled in
    const body = `${form.message.value}\n\nFrom: ${form.name.value}\nEmail: ${form.email.value}\nPhone: ${form.phone.value}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(form.subject.value)}&body=${encodeURIComponent(body)}`;

    formStatus.textContent = 'Thank you! Your email app should open with your message ready to send.';
    formStatus.className = 'form-status success';
    form.reset();
});

// ===== Footer year =====
document.querySelector('#year').textContent = new Date().getFullYear();
