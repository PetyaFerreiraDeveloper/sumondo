let hamburger = document.getElementById('hamburger-menu');
let mobileNav = document.querySelector('.mobile-nav');
let backdrop = document.querySelector('.backdrop');
let closeMobileNav = document.querySelector('.close-mobile-nav');
let shoppingCart = document.querySelector('.cart');
let cartInfo = document.querySelector('.cart-info');
let mainHeader = document.querySelector('.main-header-container');

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
    cartInfo.classList.add('open');
    cartInfo.addEventListener('mouseover', function() {
        cartInfo.classList.add('open');
    })
    cartInfo.addEventListener('mouseout', function() {
        cartInfo.classList.remove('open');
    });
})

// cartInfo.addEventListener('mouseover', function() {
//     cartInfo.classList.add('open');
// })

// shoppingCart.addEventListener('mouseout', function() {
//     cartInfo.addEventListener('mouseout', function() {
//         cartInfo.classList.remove('open');
//     });
//     cartInfo.classList.remove('open');
// })

// mainHeader.addEventListener('mouseout',function() {
//     cartInfo.classList.remove('open');
// })


// shoppingCart.addEventListener('mouseout', function() {
//     let bool = false;
    
//     cartInfo.addEventListener('mouseover', function(){
//         bool = true;
//     })
//     if (bool) {
//         cartInfo.classList.add('open');
//     } else {
//         cartInfo.classList.remove('open');
//     }
    
// })

// change the header on scroll

let topHeader = document.querySelector('.top-header')

window.addEventListener('scroll', function() {
    // console.log('Hello');
    topHeader.classList.add('scrolled')
})


