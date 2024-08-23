// Toggle the navigation menu on small screens
document.getElementById('menuToggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.navbar');
    navLinks.classList.toggle('active');
});
