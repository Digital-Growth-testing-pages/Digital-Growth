// Language switcher
const langEn = document.getElementById('lang-en');
const langKm = document.getElementById('lang-km');
const langZh = document.getElementById('lang-zh');

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-links a');
const pages = document.querySelectorAll('.page');
const calcBtns = document.querySelectorAll('.calc-btn');
const calcPrice = document.getElementById('calcPrice');
const calcROI = document.getElementById('calcROI');
const calcCTA = document.getElementById('calcCTA');

// Language switcher functionality
langEn.addEventListener('click', () => changeLanguage('en'));
langKm.addEventListener('click', () => changeLanguage('km'));
langZh.addEventListener('click', () => changeLanguage('zh'));

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Page Navigation
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const href = item.getAttribute('href');
        
        // Close mobile menu
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        
        // Handle hash navigation
        if (href.startsWith('#')) {
            e.preventDefault();
            
            if (href === '#home') {
                showPage('home-page');
            } else if (href === '#services') {
                showPage('services-page');
            } else if (href === '#projects') {
                showPage('projects-page');
            } else if (href === '#about') {
                showPage('about-page');
            } else if (href === '#blog') {
                showPage('blog-page');
            } else if (href === '#contact') {
                showPage('contact-page');
            } else {
                // Handle anchor links within pages
                const target = document.querySelector(href);
                if (target) {
                    // Check if the target is inside a specific page container
                    const pageContainer = target.closest('.page');
                    if (pageContainer) {
                        const pageId = pageContainer.getAttribute('id');
                        // If it's not already visible, show the page first
                        if (!pageContainer.classList.contains('active')) {
                            showPage(pageId);
                            // Wait for page transition to finish before scrolling
                            setTimeout(() => {
                                target.scrollIntoView({ behavior: 'smooth' });
                            }, 300);
                        } else {
                            // If page is already visible, just scroll
                            target.scrollIntoView({ behavior: 'smooth' });
                        }
                    } else {
                        // If target is not inside any page container, just scroll
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
        }
    });
});

// Show specific page
function showPage(pageId) {
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Package Calculator
calcBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        calcBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Get package info
        const packageName = btn.dataset.package;
        const price = btn.dataset.price;
        const roi = btn.dataset.roi;
        
        // Update display
        calcPrice.textContent = price;
        calcROI.textContent = roi;
        
        // Update CTA link
        const encodedPackage = encodeURIComponent(packageName);
        calcCTA.href = `https://t.me/That_Latin_Guy?text=Hi,%20I'm%20interested%20in%20the%20${encodedPackage}%20package`;
    });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    question.addEventListener('click', () => {
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        question.classList.toggle('active');
    });
    
    // Initially hide answers
    answer.style.display = 'none';
});

// Form Submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Get form values
    const name = formData.get('name');
    const email = formData.get('email');
    const service = formData.get('service');
    const business = formData.get('business');
    const message = formData.get('message');
    
    // Prepare message for Telegram
    const telegramMessage = `
📝 New Quote Request

👤 Name: ${name}
📧 Email: ${email}
🏢 Business: ${business}
💼 Service: ${service}
💬 Message: ${message}
    `.trim();
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(telegramMessage);
    const telegramURL = `https://t.me/That_Latin_Guy?text=${encodedMessage}`;
    
    // Open Telegram chat in new window
    window.open(telegramURL, '_blank');
    
    // Reset form
    form.reset();
    
    // Show success message
    alert('Thank you for your request! We will contact you shortly through Telegram.');
}

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with glass-card class
document.querySelectorAll('.glass-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip page navigation links
        if (['#home', '#services', '#projects', '#about', '#blog', '#contact'].includes(href)) {
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-section');
    
    if (hero && scrolled < window.innerHeight) {
        const parallax = scrolled * 0.5;
        hero.style.transform = `translateY(${parallax}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
}, { passive: true });

// Counter animation for value cards
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Animate counters when visible
const valueNumbers = document.querySelectorAll('.value-number');
const valueObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const text = entry.target.textContent;
            const isPercentage = text.includes('%');
            const isMultiplier = text.includes('x');
            
            if (isPercentage) {
                const value = parseFloat(text);
                entry.target.textContent = '0';
                animateCounter(entry.target, value);
                entry.target.textContent += '%';
            } else if (isMultiplier) {
                const value = parseFloat(text);
                entry.target.textContent = '0';
                animateCounter(entry.target, value);
                entry.target.textContent += 'x';
            }
            
            entry.target.dataset.animated = 'true';
        }
    });
}, { threshold: 0.5 });

valueNumbers.forEach(number => {
    valueObserver.observe(number);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Keyboard accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Theme support
const root = document.documentElement;
let currentTheme = 'dark';

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    if (currentTheme === 'light') {
        root.style.setProperty('--bg-primary', '#ffffff');
        root.style.setProperty('--bg-secondary', '#f8f9fa');
        root.style.setProperty('--text-light', '#1a1a1a');
        root.style.setProperty('--text-dark', '#6c757d');
        root.style.setProperty('--glass-bg', 'rgba(0, 0, 0, 0.03)');
        root.style.setProperty('--glass-border', 'rgba(0, 0, 0, 0.1)');
    } else {
        root.style.setProperty('--bg-primary', '#05060a');
        root.style.setProperty('--bg-secondary', '#0a0c0f');
        root.style.setProperty('--text-light', '#e0e4f0');
        root.style.setProperty('--text-dark', '#a0b0c0');
        root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.03)');
        root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.1)');
    }
    
    // Save theme preference
    localStorage.setItem('theme', currentTheme);
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme && savedTheme !== currentTheme) {
    toggleTheme();
}

// Add theme toggle button (can be implemented in UI later)
function createThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    themeToggle.style.cssText = `
        position: fixed;
        top: 100px;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid var(--glass-border);
        background: var(--glass-bg);
        color: var(--text-light);
        cursor: pointer;
        font-size: 1.5rem;
        z-index: 998;
        transition: all 0.3s ease;
    `;
    
    themeToggle.addEventListener('click', () => {
        toggleTheme();
        themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    });
    
    themeToggle.addEventListener('mouseenter', () => {
        themeToggle.style.transform = 'scale(1.1)';
    });
    
    themeToggle.addEventListener('mouseleave', () => {
        themeToggle.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(themeToggle);
}

// Initialize theme toggle (comment out if not needed)
// createThemeToggle();

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounce scroll handler for better performance
window.addEventListener('scroll', debounce(() => {
    const scrollTop = window.pageYOffset;
    const navbar = document.querySelector('.navbar');
    
    if (scrollTop > 100) {
        navbar.style.padding = '0.5rem 2rem';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '1rem 2rem';
        navbar.style.boxShadow = 'none';
    }
}, 100), { passive: true });

// Print styles
window.addEventListener('beforeprint', () => {
    document.body.classList.add('print-mode');
});

window.addEventListener('afterprint', () => {
    document.body.classList.remove('print-mode');
});

console.log('Digital Growth KH - AI Marketing Agency');
console.log('Using laptop-background.png for hero content background');
console.log('Website fully loaded and interactive');