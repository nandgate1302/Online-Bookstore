// Countdown Timer
function updateCountdown() {
    // Set the target date (May 1, 2025)
    const targetDate = new Date("May 1, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;
    
    if (difference <= 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        return;
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    document.getElementById("days").innerText = days.toString().padStart(2, "0");
    document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
}

// Blinking Text Effect
function blinkText() {
    const blinkingText = document.getElementById("blinking-text");
    if (blinkingText) {
        setInterval(() => {
            blinkingText.style.opacity = blinkingText.style.opacity === "0.3" ? "1" : "0.3";
        }, 800);
    }
}

// Form Validation
function validateForm(event) {
    if (!event || !event.target || event.target.id !== "registrationForm") return;
    
    event.preventDefault();
    let isValid = true;
    
    // Reset all error messages
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(element => {
        element.textContent = "";
    });
    
    // Full Name validation
    const fullName = document.getElementById("fullName").value.trim();
    if (!fullName) {
        document.getElementById("fullNameError").textContent = "Full name is required";
        isValid = false;
    } else if (fullName.length < 3) {
        document.getElementById("fullNameError").textContent = "Full name must be at least 3 characters";
        isValid = false;
    }
    
    // Email validation
    const email = document.getElementById("email").value.trim();
    if (!email) {
        document.getElementById("emailError").textContent = "Email is required";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById("emailError").textContent = "Email is invalid";
        isValid = false;
    }
    
    // Password validation
    const password = document.getElementById("password").value;
    if (!password) {
        document.getElementById("passwordError").textContent = "Password is required";
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters";
        isValid = false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
        document.getElementById("passwordError").textContent = "Password must contain at least one uppercase letter, one lowercase letter, and one number";
        isValid = false;
    }
    
    // Confirm Password validation
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
        isValid = false;
    }
    
    // Phone Number validation (optional)
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    if (phoneNumber && !/^\d{10}$/.test(phoneNumber)) {
        document.getElementById("phoneNumberError").textContent = "Phone number must be 10 digits";
        isValid = false;
    }
    
    // Terms agreement validation
    const agreeTerms = document.getElementById("agreeTerms").checked;
    if (!agreeTerms) {
        document.getElementById("agreeTermsError").textContent = "You must agree to the terms and conditions";
        isValid = false;
    }
    
    // If form is valid, submit
    if (isValid) {
        const submitButton = document.getElementById("submitButton");
        submitButton.disabled = true;
        submitButton.textContent = "Registering...";
        
        // Simulate form submission (would be replaced with actual form submission)
        setTimeout(() => {
            alert("Registration successful! Welcome to BookHaven.");
            window.location.href = "index.html";
        }, 1500);
    }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Start countdown timer if on homepage
    if (document.getElementById("countdown")) {
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
    
    // Initialize blinking text if on homepage
    if (document.getElementById("blinking-text")) {
        blinkText();
    }
    
    // Setup category buttons if on homepage
    if (document.querySelector('.category-button')) {
        setupCategoryButtons();
    }
    
    // Add form validation if on registration page
    const registrationForm = document.getElementById("registrationForm");
    if (registrationForm) {
        registrationForm.addEventListener("submit", validateForm);
    }
});
