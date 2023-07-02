window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');

    if (window.scrollY > 0) {
        navbar.style.backgroundColor = 'rgba(0,0,0,0.1)'; /* Change the background color when scrolling down */
    } else {
        navbar.style.backgroundColor = 'transparent'; /* Reset the background color when at the top */
    }
});