const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const popupOverlay = document.getElementById('popup-overlay');
const popupMessage = document.getElementById('popup-message');
const closePopupBtn = document.getElementById('close-popup');

function showPopup(message) {
    popupMessage.innerText = message;
    popupOverlay.classList.remove('popup-hidden');
}

closePopupBtn.addEventListener('click', () => {
    popupOverlay.classList.add('popup-hidden');
});

popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        popupOverlay.classList.add('popup-hidden');
    }
});

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

submitButton.addEventListener('click', () => {
    showPopup("❤️ Thank you! Redirecting to secure payment...");
});

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    showPopup("✉️ Message sent successfully! We will be in touch.");
    contactForm.reset(); 
});