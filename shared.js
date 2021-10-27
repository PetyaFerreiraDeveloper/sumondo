let hamburger = document.getElementById('hamburger-menu');
let mobileNav = document.querySelector('.mobile-nav');
let backdrop = document.querySelector('.backdrop');
let closeMobileNav = document.querySelector('.close-mobile-nav');

hamburger.addEventListener('click', function() {
    mobileNav.classList.add('open');
    closeMobileNav.classList.add('open');
    backdrop.classList.add('open');
    hamburger.classList.add('close');
});

backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open');
    hamburger.classList.remove('close');
    closeMobileNav.classList.remove('open');
});

closeMobileNav.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open');
    hamburger.classList.remove('close');
    closeMobileNav.classList.remove('open');
});

// change the header on scroll

let header = document.getElementsByTagName('header')[0];

header.addEventListener('scroll', function() {
    header.classList.add('scrolled')
})


