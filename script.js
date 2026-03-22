// ==========================================
// 1. Mobile Menu Toggle Logic
// ==========================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ==========================================
// 2. Global Toast Notification Function
// ==========================================
const toastNotification = document.getElementById('toast');
let toastTimeout;

function showToast(message) {
    // Set the message
    toastNotification.innerText = message;
    
    // Show the toast
    toastNotification.classList.remove('toast-hidden');
    toastNotification.classList.add('toast-visible');

    // Clear any existing timeouts so they don't overlap
    clearTimeout(toastTimeout);

    // Hide it automatically after 4 seconds
    toastTimeout = setTimeout(() => {
        toastNotification.classList.remove('toast-visible');
        toastNotification.classList.add('toast-hidden');
    }, 4000); 
}

// ==========================================
// 3. Interactive Donation Card Logic
// ==========================================
const amountButtons = document.querySelectorAll('.amount-btn');
const submitButton = document.getElementById('main-donate-btn');

amountButtons.forEach(button => {
    button.addEventListener('click', function() {
        amountButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        const selectedAmount = this.getAttribute('data-amount');
        submitButton.innerText = `Donate $${selectedAmount} Now`;
    });
});

// Trigger toast when donation button is clicked
submitButton.addEventListener('click', () => {
    showToast("❤️ Thank you! Redirecting to secure payment...");
});

// ==========================================
// 4. Contact Form Logic
// ==========================================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from refreshing
    
    showToast("✉️ Message sent successfully! We will be in touch.");
    contactForm.reset(); // Clears out the form inputs
});

// ==========================================
// 5. Zero-Latency Before/After Slider Logic
// ==========================================
const baContainer = document.querySelector('.ba-slider-container');
const baHandle = document.getElementById('ba-handle');
const baAfterImage = document.querySelector('.ba-after');

let isDragging = false; 

function moveSlider(e) {
    if (!isDragging) return; 

    const containerRect = baContainer.getBoundingClientRect();
    let userX = e.touches ? e.touches[0].clientX : e.clientX; 
    let positionX = userX - containerRect.left;

    positionX = Math.max(0, Math.min(positionX, containerRect.width));
    const percentage = (positionX / containerRect.width) * 100;

    baHandle.style.left = `${percentage}%`;
    baAfterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
}

baContainer.addEventListener('pointerdown', (e) => {
    isDragging = true;
    moveSlider(e);
});

window.addEventListener('pointermove', moveSlider);
window.addEventListener('pointerup', () => { 
    isDragging = false; 
});