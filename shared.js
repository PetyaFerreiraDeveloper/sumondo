let hamburger = document.getElementById('hamburger-menu');
let mobileNav = document.querySelector('.mobile-nav');
let backdrop = document.querySelector('.backdrop');
let closeMobileNav = document.querySelector('.close-mobile-nav');
let shoppingCart = document.querySelector('.cart')

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

shoppingCart.addEventListener('mouseover', function() {
    // openTheBox.classList.add('open');
})

shoppingCart.addEventListener('mouseout', function() {
    // openTheBox.classList.add('open');
})

// change the header on scroll

let topHeader = document.querySelector('.top-header')

window.addEventListener('scroll', function() {
    // console.log('Hello');
    topHeader.classList.add('scrolled')
})


