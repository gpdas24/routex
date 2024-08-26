// Toggle the navigation menu on small screens
document.getElementById('menuToggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.navbar-menu');
    navLinks.classList.toggle('active');
});
