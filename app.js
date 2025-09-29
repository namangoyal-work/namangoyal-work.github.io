/**
 * Portfolio Website JavaScript
 * Modern, reactive portfolio website for Naman Goyal
 * Author: Naman Goyal
 * 
 * Features:
 * - Dark/Light theme toggle with smooth transitions
 * - Responsive navigation with mobile menu
 * - Smooth scrolling and active section highlighting
 * - Contact form validation and submission
 * - Scroll-triggered animations
 * - Performance optimized with debouncing
 */

class PortfolioApp {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.navMenu = document.getElementById('nav-menu');
        this.navToggle = document.getElementById('nav-toggle');
        this.themeToggle = document.getElementById('theme-toggle');
        this.contactForm = document.getElementById('contact-form');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        // Theme management
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.themeIcon = this.themeToggle.querySelector('.theme-icon');
        
        // Scroll management
        this.lastScrollTop = 0;
        this.scrollThreshold = 100;
        
        // Animation observer
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.init();
    }

    /**
     * Initialize all functionality
     */
    init() {
        this.setupTheme();
        this.setupNavigation();
        this.setupScrollEffects();
        this.setupAnimations();
        this.setupContactForm();
        this.setupEventListeners();
        
        console.log('Portfolio App initialized successfully');
    }

    /**
     * Theme Management
     */
    setupTheme() {
        // Apply saved theme
        document.documentElement.setAttribute('data-color-scheme', this.currentTheme);
        this.updateThemeIcon();
        
        // Theme toggle event
        this.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        
        // Add transition class for smooth theme change
        document.body.style.transition = 'all 0.3s ease-in-out';
        
        // Apply new theme
        document.documentElement.setAttribute('data-color-scheme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
        
        // Update icon with animation
        this.themeToggle.style.transform = 'scale(0.8)';
        setTimeout(() => {
            this.updateThemeIcon();
            this.themeToggle.style.transform = 'scale(1)';
        }, 150);
        
        // Remove transition after theme change
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    updateThemeIcon() {
        this.themeIcon.textContent = this.currentTheme === 'light' ? '🌙' : '☀️';
    }

    /**
     * Navigation Management
     */
    setupNavigation() {
        // Mobile menu toggle
        this.navToggle.addEventListener('click', () => {
            this.toggleMobileMenu();
        });

        // Close mobile menu when clicking nav links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                this.scrollToSection(targetId);
                this.closeMobileMenu();
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navbar.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
    }

    toggleMobileMenu() {
        this.navMenu.classList.toggle('active');
        this.navToggle.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (this.navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    closeMobileMenu() {
        this.navMenu.classList.remove('active');
        this.navToggle.classList.remove('active');
        document.body.style.overflow = '';
    }

    scrollToSection(targetId) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    /**
     * Scroll Effects and Active Navigation
     */
    setupScrollEffects() {
        // Debounced scroll handler for performance
        const debouncedScrollHandler = this.debounce(() => {
            this.handleScroll();
        }, 10);
        
        window.addEventListener('scroll', debouncedScrollHandler);
        
        // Initial call
        this.handleScroll();
    }

    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Navbar scroll effect
        this.updateNavbarOnScroll(scrollTop);
        
        // Update active navigation link
        this.updateActiveNavLink();
        
        this.lastScrollTop = scrollTop;
    }

    updateNavbarOnScroll(scrollTop) {
        if (scrollTop > this.scrollThreshold) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }

    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 150; // Offset for better UX
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                this.navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section's nav link
                if (correspondingNavLink) {
                    correspondingNavLink.classList.add('active');
                }
            }
        });
    }

    /**
     * Scroll-triggered Animations
     */
    setupAnimations() {
        // Intersection Observer for scroll animations
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, this.observerOptions);

        // Observe elements for animation
        const animatedElements = document.querySelectorAll([
            '.section-title',
            '.about-content',
            '.about-education',
            '.skill-category',
            '.project-card',
            '.timeline-item',
            '.contact-info',
            '.contact-form'
        ].join(', '));

        animatedElements.forEach(element => {
            animationObserver.observe(element);
        });
    }

    animateElement(element) {
        // Add animation classes based on element type
        if (element.classList.contains('section-title')) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s ease-out';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100);
        }
        
        if (element.classList.contains('project-card')) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(40px)';
            element.style.transition = 'all 0.6s ease-out';
            
            const delay = Array.from(element.parentNode.children).indexOf(element) * 100;
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, delay);
        }
        
        if (element.classList.contains('skill-category')) {
            element.style.opacity = '0';
            element.style.transform = 'scale(0.9)';
            element.style.transition = 'all 0.5s ease-out';
            
            const delay = Array.from(element.parentNode.children).indexOf(element) * 150;
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'scale(1)';
            }, delay);
        }
        
        if (element.classList.contains('timeline-item')) {
            element.style.opacity = '0';
            element.style.transform = 'translateX(-30px)';
            element.style.transition = 'all 0.6s ease-out';
            
            const delay = Array.from(element.parentNode.children).indexOf(element) * 200;
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateX(0)';
            }, delay);
        }
        
        // General fade-in animation for other elements
        if (!element.classList.contains('section-title') && 
            !element.classList.contains('project-card') && 
            !element.classList.contains('skill-category') && 
            !element.classList.contains('timeline-item')) {
            
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.5s ease-out';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100);
        }
    }

    /**
     * Contact Form Management
     */
    setupContactForm() {
        if (!this.contactForm) return;
        
        this.contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission();
        });
        
        // Real-time validation
        const formInputs = this.contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
            
            input.addEventListener('input', () => {
                this.clearFieldError(input);
            });
        });
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';
        
        // Clear previous errors
        this.clearFieldError(field);
        
        // Validation rules
        switch (fieldName) {
            case 'name':
                if (value.length < 2) {
                    isValid = false;
                    errorMessage = 'Name must be at least 2 characters long';
                }
                break;
                
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email address';
                }
                break;
                
            case 'subject':
                if (value.length < 3) {
                    isValid = false;
                    errorMessage = 'Subject must be at least 3 characters long';
                }
                break;
                
            case 'message':
                if (value.length < 10) {
                    isValid = false;
                    errorMessage = 'Message must be at least 10 characters long';
                }
                break;
        }
        
        if (!isValid) {
            this.showFieldError(field, errorMessage);
        }
        
        return isValid;
    }

    showFieldError(field, message) {
        field.style.borderColor = 'var(--color-error)';
        
        // Remove existing error message
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        
        // Add error message
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.style.color = 'var(--color-error)';
        errorElement.style.fontSize = 'var(--font-size-sm)';
        errorElement.style.marginTop = 'var(--space-4)';
        
        field.parentNode.appendChild(errorElement);
    }

    clearFieldError(field) {
        field.style.borderColor = '';
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    handleFormSubmission() {
        const formData = new FormData(this.contactForm);
        const formFields = this.contactForm.querySelectorAll('input, textarea');
        
        // Validate all fields
        let isFormValid = true;
        formFields.forEach(field => {
            if (!this.validateField(field)) {
                isFormValid = false;
            }
        });
        
        if (!isFormValid) {
            this.showFormMessage('Please correct the errors above.', 'error');
            return;
        }
        
        // Show loading state
        const submitButton = this.contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual endpoint)
        setTimeout(() => {
            // Reset form
            this.contactForm.reset();
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Show success message
            this.showFormMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
            
            // Clear form errors
            formFields.forEach(field => {
                this.clearFieldError(field);
            });
        }, 2000);
    }

    showFormMessage(message, type) {
        // Remove existing message
        const existingMessage = this.contactForm.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create message element
        const messageElement = document.createElement('div');
        messageElement.className = `form-message status status--${type}`;
        messageElement.textContent = message;
        messageElement.style.marginTop = 'var(--space-16)';
        
        // Add to form
        this.contactForm.appendChild(messageElement);
        
        // Auto-remove success messages
        if (type === 'success') {
            setTimeout(() => {
                if (messageElement.parentNode) {
                    messageElement.remove();
                }
            }, 5000);
        }
    }

    /**
     * Event Listeners Setup
     */
    setupEventListeners() {
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeMobileMenu();
            }
        });
        
        // Window resize handler
        const debouncedResizeHandler = this.debounce(() => {
            this.handleResize();
        }, 250);
        
        window.addEventListener('resize', debouncedResizeHandler);
        
        // Page load optimization
        window.addEventListener('load', () => {
            this.handlePageLoad();
        });
    }

    handleResize() {
        // Close mobile menu on resize to larger screen
        if (window.innerWidth > 768) {
            this.closeMobileMenu();
        }
    }

    handlePageLoad() {
        // Add loaded class to body for any load-specific animations
        document.body.classList.add('loaded');
        
        // Performance logging
        if ('performance' in window) {
            const loadTime = Math.round(performance.now());
            console.log(`Page loaded in ${loadTime}ms`);
        }
    }

    /**
     * Utility Functions
     */
    debounce(func, wait) {
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
}

/**
 * Initialize the application when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});

/**
 * Additional utility functions for enhanced user experience
 */

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@master/src/smoothscroll.js';
    document.head.appendChild(script);
}

// Performance monitoring
if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
                console.log('LCP:', entry.startTime);
            }
        });
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('Portfolio App Error:', e.error);
});

// Service Worker registration for future PWA features
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when you have a service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}