// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button interaction
document.getElementById('contactButton').addEventListener('click', function () {
    alert("Thank you for reaching out! I'll get back to you soon.");
});