// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);

// Theme toggle event listener
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add a little animation
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 300);
    });
}

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.textContent = '☰';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.textContent = '☰';
        }
    });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Form Submission Handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would normally send to backend
        console.log('Form submitted:', data);
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--primary-green);
            color: white;
            padding: 2rem 3rem;
            border-radius: 12px;
            box-shadow: 0 8px 30px var(--shadow);
            z-index: 10000;
            text-align: center;
            animation: fadeInUp 0.5s ease-out;
        `;
        successMessage.innerHTML = `
            <h3 style="margin-bottom: 0.5rem;">Thank You!</h3>
            <p>We'll get back to you within 24 hours.</p>
        `;
        document.body.appendChild(successMessage);
        
        // Remove message after 3 seconds
        setTimeout(() => {
            successMessage.style.animation = 'fadeOut 0.5s ease-out';
            setTimeout(() => {
                successMessage.remove();
            }, 500);
        }, 3000);
        
        // Reset form
        contactForm.reset();
    });
}

// Subscribe Button Handlers
const subscribeButtons = document.querySelectorAll('.subscribe-btn');
subscribeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const boxName = btn.closest('.box-card').querySelector('h3').textContent;
        
        const modal = document.createElement('div');
        modal.className = 'subscription-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease-out;
        `;
        
        modal.innerHTML = `
            <div style="
                background: var(--card-bg);
                padding: 3rem;
                border-radius: 16px;
                max-width: 500px;
                text-align: center;
                animation: fadeInUp 0.5s ease-out;
            ">
                <h2 style="color: var(--primary-green); margin-bottom: 1rem; font-family: 'Fraunces', serif;">Subscribe to ${boxName}</h2>
                <p style="color: var(--text-primary); margin-bottom: 2rem;">Start your gardening journey with ${boxName}!</p>
                <form class="subscription-form">
                    <input type="email" placeholder="Enter your email" required style="
                        width: 100%;
                        padding: 1rem;
                        border: 2px solid var(--light-sage);
                        border-radius: 8px;
                        margin-bottom: 1rem;
                        font-size: 1rem;
                        background: var(--bg-primary);
                        color: var(--text-primary);
                    ">
                    <button type="submit" style="
                        width: 100%;
                        padding: 1rem;
                        background: var(--primary-green);
                        color: white;
                        border: none;
                        border-radius: 50px;
                        font-size: 1.1rem;
                        font-weight: 600;
                        cursor: pointer;
                        margin-bottom: 1rem;
                    ">Subscribe Now</button>
                    <button type="button" class="close-modal" style="
                        background: transparent;
                        border: none;
                        color: var(--text-secondary);
                        cursor: pointer;
                        font-size: 1rem;
                    ">Cancel</button>
                </form>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.remove();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
        
        modal.querySelector('.subscription-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert(`Thank you for subscribing to ${boxName}! Check your email for confirmation.`);
            modal.remove();
        });
    });
});

// Intersection Observer for Animations
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

// Observe elements for animation
document.querySelectorAll('.box-card, .activity-card, .feature, .gallery-item, .testimonial-card, .quick-link-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add fade-out keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: translate(-50%, -50%); }
        to { opacity: 0; transform: translate(-50%, -60%); }
    }
`;
document.head.appendChild(style);

// Set active nav link based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
