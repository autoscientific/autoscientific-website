// Contact Form Enhancement
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.get-in-touch');
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    
    if (!contactForm) return;
    
    // Add form validation and enhanced UX
    contactForm.addEventListener('submit', function(e) {
        // Basic client-side validation
        const name = contactForm.querySelector('#name').value.trim();
        const email = contactForm.querySelector('#email-us').value.trim();
        const message = contactForm.querySelector('#message').value.trim();
        
        // Check honeypot field (should be empty)
        const honeypot = contactForm.querySelector('input[name="bot-field"]');
        if (honeypot && honeypot.value) {
            e.preventDefault();
            return false;
        }
        
        // Validate required fields
        if (!name || !email || !message) {
            e.preventDefault();
            showFormMessage('Please fill in all required fields.', 'error');
            return false;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            e.preventDefault();
            showFormMessage('Please enter a valid email address.', 'error');
            return false;
        }
        
        // Validate message length (basic spam protection)
        if (message.length < 10) {
            e.preventDefault();
            showFormMessage('Please provide a more detailed message (at least 10 characters).', 'error');
            return false;
        }
        
        // Check for obvious spam patterns
        const spamPatterns = [
            /viagra/i,
            /casino/i,
            /lottery/i,
            /winner/i,
            /click here/i,
            /make money/i,
            /(http[s]?:\/\/.*){3,}/i // Multiple URLs
        ];
        
        const isSpam = spamPatterns.some(pattern => 
            pattern.test(name) || pattern.test(email) || pattern.test(message)
        );
        
        if (isSpam) {
            e.preventDefault();
            showFormMessage('Your message appears to contain spam content. Please revise and try again.', 'error');
            return false;
        }
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        submitButton.style.opacity = '0.7';
        
        // Add a small delay to show the loading state
        setTimeout(() => {
            // Form will submit naturally after this
            showFormMessage('Sending your message...', 'info');
        }, 100);
    });
    
    // Real-time validation feedback
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
    
    function validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        
        // Remove previous error styling
        field.style.borderColor = '';
        
        if (field.hasAttribute('required') && !value) {
            showFieldError(field, 'This field is required');
            return false;
        }
        
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(field, 'Please enter a valid email address');
                return false;
            }
        }
        
        return true;
    }
    
    function showFieldError(field, message) {
        field.style.borderColor = '#e74c3c';
        
        // Remove existing error message
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        
        // Add error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.style.cssText = 'color: #e74c3c; font-size: 0.8rem; margin-top: 0.25rem;';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    }
    
    function clearFieldError(e) {
        const field = e.target;
        field.style.borderColor = '';
        
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }
    
    function showFormMessage(message, type) {
        // Remove existing message
        const existingMessage = contactForm.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = 'form-message';
        
        const colors = {
            error: '#e74c3c',
            success: '#27ae60',
            info: '#3498db'
        };
        
        messageDiv.style.cssText = `
            color: ${colors[type] || colors.info};
            background: ${colors[type] || colors.info}20;
            border: 1px solid ${colors[type] || colors.info};
            padding: 1rem;
            border-radius: var(--border-radius);
            margin-bottom: 1rem;
            text-align: center;
            font-weight: 500;
        `;
        
        messageDiv.textContent = message;
        
        // Insert at the top of the form
        contactForm.insertBefore(messageDiv, contactForm.firstChild);
        
        // Auto-remove success/info messages after 5 seconds
        if (type === 'success' || type === 'info') {
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.remove();
                }
            }, 5000);
        }
    }
    
    // Rate limiting - prevent rapid submissions
    let lastSubmissionTime = 0;
    const SUBMISSION_COOLDOWN = 10000; // 10 seconds
    
    contactForm.addEventListener('submit', function(e) {
        const now = Date.now();
        if (now - lastSubmissionTime < SUBMISSION_COOLDOWN) {
            e.preventDefault();
            const remainingTime = Math.ceil((SUBMISSION_COOLDOWN - (now - lastSubmissionTime)) / 1000);
            showFormMessage(`Please wait ${remainingTime} seconds before submitting again.`, 'error');
            return false;
        }
        lastSubmissionTime = now;
    });
    
    // Character counter for message field
    const messageField = contactForm.querySelector('#message');
    if (messageField) {
        const maxLength = messageField.getAttribute('maxlength') || 500;
        
        // Create counter element
        const counterDiv = document.createElement('div');
        counterDiv.className = 'char-counter';
        counterDiv.style.cssText = 'text-align: right; font-size: 0.8rem; color: #666; margin-top: 0.25rem;';
        messageField.parentNode.appendChild(counterDiv);
        
        function updateCounter() {
            const remaining = maxLength - messageField.value.length;
            counterDiv.textContent = `${remaining} characters remaining`;
            
            if (remaining < 50) {
                counterDiv.style.color = '#e74c3c';
            } else if (remaining < 100) {
                counterDiv.style.color = '#f39c12';
            } else {
                counterDiv.style.color = '#666';
            }
        }
        
        messageField.addEventListener('input', updateCounter);
        updateCounter(); // Initial count
    }
});