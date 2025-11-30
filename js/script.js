// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            this.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }
    
    // Booking Form Validation and Submission
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous error messages
            clearErrors();
            
            // Validate form
            let isValid = true;
            
            // Name validation
            const name = document.getElementById('name').value.trim();
            if (name === '') {
                showError('nameError', 'Please enter your full name');
                isValid = false;
            }
            
            // Email validation
            const email = document.getElementById('email').value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === '') {
                showError('emailError', 'Please enter your email address');
                isValid = false;
            } else if (!emailRegex.test(email)) {
                showError('emailError', 'Please enter a valid email address');
                isValid = false;
            }
            
            // Phone validation
            const phone = document.getElementById('phone').value.trim();
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (phone === '') {
                showError('phoneError', 'Please enter your phone number');
                isValid = false;
            } else if (!phoneRegex.test(phone) || phone.length < 10) {
                showError('phoneError', 'Please enter a valid phone number');
                isValid = false;
            }
            
            // Event type validation
            const eventType = document.getElementById('eventType').value;
            if (eventType === '') {
                showError('eventTypeError', 'Please select an event type');
                isValid = false;
            }
            
            // Event date validation
            const eventDate = document.getElementById('eventDate').value;
            if (eventDate === '') {
                showError('eventDateError', 'Please select an event date');
                isValid = false;
            } else {
                const selectedDate = new Date(eventDate);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                
                if (selectedDate < today) {
                    showError('eventDateError', 'Please select a future date');
                    isValid = false;
                }
            }
            
            // Venue validation
            const venue = document.getElementById('venue').value.trim();
            if (venue === '') {
                showError('venueError', 'Please enter the venue or location');
                isValid = false;
            }
            
            // Message validation
            const message = document.getElementById('message').value.trim();
            if (message === '') {
                showError('messageError', 'Please provide additional details about your event');
                isValid = false;
            } else if (message.length < 20) {
                showError('messageError', 'Please provide more details (at least 20 characters)');
                isValid = false;
            }
            
            // If form is valid, show success message
            if (isValid) {
                // In a real application, you would send the form data to a server here
                // For now, we'll just show a success message
                
                const formSuccess = document.getElementById('formSuccess');
                formSuccess.classList.add('show');
                
                // Reset form
                bookingForm.reset();
                
                // Scroll to success message
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Hide success message after 10 seconds
                setTimeout(function() {
                    formSuccess.classList.remove('show');
                }, 10000);
            } else {
                // Scroll to first error
                const firstError = document.querySelector('.error-message:not(:empty)');
                if (firstError) {
                    firstError.parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
        
        // Real-time validation on blur
        const formInputs = bookingForm.querySelectorAll('input, select, textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Helper function to show error messages
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

// Helper function to clear all error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.textContent = '';
    });
}

// Helper function to validate individual fields
function validateField(field) {
    const fieldId = field.id;
    const errorId = fieldId + 'Error';
    const value = field.value.trim();
    
    // Clear previous error
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = '';
    }
    
    // Validate based on field type
    switch(fieldId) {
        case 'name':
            if (value === '') {
                showError(errorId, 'Please enter your full name');
            }
            break;
            
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value === '') {
                showError(errorId, 'Please enter your email address');
            } else if (!emailRegex.test(value)) {
                showError(errorId, 'Please enter a valid email address');
            }
            break;
            
        case 'phone':
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (value === '') {
                showError(errorId, 'Please enter your phone number');
            } else if (!phoneRegex.test(value) || value.length < 10) {
                showError(errorId, 'Please enter a valid phone number');
            }
            break;
            
        case 'eventType':
            if (field.value === '') {
                showError(errorId, 'Please select an event type');
            }
            break;
            
        case 'eventDate':
            if (field.value === '') {
                showError(errorId, 'Please select an event date');
            } else {
                const selectedDate = new Date(field.value);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                
                if (selectedDate < today) {
                    showError(errorId, 'Please select a future date');
                }
            }
            break;
            
        case 'venue':
            if (value === '') {
                showError(errorId, 'Please enter the venue or location');
            }
            break;
            
        case 'message':
            if (value === '') {
                showError(errorId, 'Please provide additional details about your event');
            } else if (value.length < 20) {
                showError(errorId, 'Please provide more details (at least 20 characters)');
            }
            break;
    }
}

// Add animation on scroll (optional enhancement)
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Animate elements on scroll
window.addEventListener('scroll', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .video-item, .gallery-item');
    animatedElements.forEach(el => {
        if (isElementInViewport(el)) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
});
