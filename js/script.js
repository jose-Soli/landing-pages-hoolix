'use strict'

/*-----------------------------------*\
    # Add event On Element
\*-----------------------------------*/
const addEvenOnElem = function (elem, type, callback) {

    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}

/*-----------------------------------*\
    # Navbar toggle
\*-----------------------------------*/
const navbar = document.querySelector('[data-navbar]');
const navbar_btn = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEvenOnElem(navbar_btn, "click", toggleNavbar);

/*-----------------------------------*\
    # When you do click any links
\*-----------------------------------*/
const navbar_link = document.querySelectorAll('[data-nav-link]');

addEvenOnElem(navbar_link, "click", toggleNavbar);

/*-----------------------------------*\
    # Header active when you do scroll
\*-----------------------------------*/
const header = document.querySelector('[data-header]');

const scrollBar = function () {
    window.scrollY > 100 ? header.classList.add("active")
        : header.classList.remove("active");
}

addEvenOnElem(window, "scroll", scrollBar);

/*-----------------------------------*\
    # Acordion Section Faq
\*-----------------------------------*/

const faq_acordion = document.querySelectorAll('[data-accordion-action]');

const faqAcordion = function () {
    this.classList.toggle("active");
}

addEvenOnElem(faq_acordion, 'click', faqAcordion);

