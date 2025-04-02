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

// Category Button Functionality
function setupCategoryButtons() {
    const categoryButtons = document.querySelectorAll('.category-button');
    const categoriesSection = document.querySelector('.categories-section');
    const selectedCategorySection = document.getElementById('selected-category');
    const categoryTitle = document.getElementById('category-title');
    const categoryDescription = document.getElementById('category-description');
    const categoryBooks = document.getElementById('category-books');
    const backButton = document.getElementById('back-button');
    
    // Sample book data for each category
    const booksByCategory = {
        'fiction': [
            { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: '$12.99', image: 'placeholder.jpg' },
            { title: 'To Kill a Mockingbird', author: 'Harper Lee', price: '$14.99', image: 'placeholder.jpg' },
            { title: 'Pride and Prejudice', author: 'Jane Austen', price: '$11.99', image: 'placeholder.jpg' },
            { title: '1984', author: 'George Orwell', price: '$13.99', image: 'placeholder.jpg' }
        ],
        'non-fiction': [
            { title: 'Sapiens', author: 'Yuval Noah Harari', price: '$15.99', image: 'placeholder.jpg' },
            { title: 'Educated', author: 'Tara Westover', price: '$14.99', image: 'placeholder.jpg' },
            { title: 'Becoming', author: 'Michelle Obama', price: '$16.99', image: 'placeholder.jpg' }
        ],
        'sci-fi': [
            { title: 'Dune', author: 'Frank Herbert', price: '$13.99', image: 'placeholder.jpg' },
            { title: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Douglas Adams', price: '$12.99', image: 'placeholder.jpg' },
            { title: 'Neuromancer', author: 'William Gibson', price: '$14.99', image: 'placeholder.jpg' }
        ],
        'mystery': [
            { title: 'Gone Girl', author: 'Gillian Flynn', price: '$13.99', image: 'placeholder.jpg' },
            { title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', price: '$14.99', image: 'placeholder.jpg' },
            { title: 'The Da Vinci Code', author: 'Dan Brown', price: '$12.99', image: 'placeholder.jpg' }
        ],
        'self-help': [
            { title: 'Atomic Habits', author: 'James Clear', price: '$15.99', image: 'placeholder.jpg' },
            { title: 'The 7 Habits of Highly Effective People', author: 'Stephen R. Covey', price: '$14.99', image: 'placeholder.jpg' },
            { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', price: '$16.99', image: 'placeholder.jpg' }
        ],
        'children': [
            { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', price: '$12.99', image: 'placeholder.jpg' },
            { title: 'Charlotte\'s Web', author: 'E.B. White', price: '$10.99', image: 'placeholder.jpg' },
            { title: 'The Very Hungry Caterpillar', author: 'Eric Carle', price: '$9.99', image: 'placeholder.jpg' }
        ]
    };
    
    // Category descriptions
    const categoryDescriptions = {
        'fiction': 'Explore our collection of novels, short stories, and literary works of imagination.',
        'non-fiction': 'Discover biographies, memoirs, and factual literature that inform and inspire.',
        'sci-fi': 'Journey through futuristic concepts, space exploration, and advanced technology.',
        'mystery': 'Unravel suspenseful tales of crime, detection, and intrigue that will keep you guessing.',
        'self-help': 'Find resources for personal development, motivation, and life improvement.',
        'children': 'Browse stories and educational content perfect for young readers of all ages.'
    };
    
    // Add click event to each category button
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            const books = booksByCategory[category] || [];
            const description = categoryDescriptions[category] || '';
            
            // Update category title and description
            categoryTitle.textContent = button.querySelector('h3').textContent;
            categoryDescription.textContent = description;
            
            // Clear previous books
            categoryBooks.innerHTML = '';
            
            // Add books to the grid
            books.forEach(book => {
                const bookCard = document.createElement('div');
                bookCard.className = 'book-card';
                
                bookCard.innerHTML = `
                    <div class="book-image" style="background-color: #f3f4f6; display: flex; align-items: center; justify-content: center;">
                        <span style="color: #92400e; font-size: 3rem;">📚</span>
                    </div>
                    <div class="book-info">
                        <h4 class="book-title">${book.title}</h4>
                        <p class="book-author">by ${book.author}</p>
                        <p class="book-price">${book.price}</p>
                    </div>
                `;
                
                categoryBooks.appendChild(bookCard);
            });
            
            // Hide categories section and show selected category
            categoriesSection.style.display = 'none';
            selectedCategorySection.style.display = 'block';
            
            // Scroll to the top of the selected category section
            selectedCategorySection.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Back button functionality
    if (backButton) {
        backButton.addEventListener('click', () => {
            selectedCategorySection.style.display = 'none';
            categoriesSection.style.display = 'block';
            
            // Scroll back to categories section
            categoriesSection.scrollIntoView({ behavior: 'smooth' });
        });
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