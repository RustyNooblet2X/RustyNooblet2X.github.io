/*!
 * Copyright 2021 EsCperience Digital LLC.
 * Licensed under: Ryan Smith - EsC1337
 */


window.addEventListener('DOMContentLoaded', event => {
    // Functionality to connect to the DOM, and manipulate the navbar:
    // As well as scroll functionality

    // Jquerry, wasnt working properly, leaving here for now.
    // $(document).ready(function(){
        // var img = 'data:image/png;base64, ...'; //place ur base64 encoded img here
        // document.body.style.backgroundImage = 'url(\'' + img + '\')';
        // $("#divId").css("background-image", "url('data:image/png;base64," + base64String + "')");
        // $('img').mousedown(function (e) {
        //     if(e.button == 2) { // right click
        //       return false; // do nothing!
        //     },
        //   }


    // $("#divId").css("background-image", "url('data:image/png;base64," + base64String + "')");
    // $("#divId").css("background-image", "url('data:image/jpg;base64," + base64String + "')");

    // document.getElementsByTagName('a').style.pointerEvents = "none";
    // document.getElementById("div").style.pointerEvents = "none";

    // $img.css("background-image", "url('data:image/png;base64," + base64String + "')");

    // });



    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
