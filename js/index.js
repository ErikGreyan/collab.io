"use strict";

window.addEventListener("load", () => {
    const links = document.querySelectorAll("a[href='#']");
    links.forEach((elem) => {
        elem.addEventListener("click", (i) => {
            i.preventDefault();
        });
    });

    const menu = document.querySelector(".menu");
    const btnClick = document.querySelector(".btn");
    btnClick.addEventListener("click", () => {
        menu.classList.toggle("menu_active");
        btnClick.classList.toggle("btn_active");
    });

    scrollActive(".home", "#home");
    scrollActive(".features", "#features");
    scrollActive(".about", "#template");
    scrollActive(".blog", "#blog");
    function scrollActive(btn, element) {
        const link = document.querySelector(btn);
        const nav = document.querySelector("nav");
        link.addEventListener("click", () => {
            const elem = document.querySelector(element).offsetTop - nav.offsetHeight;
            window.scrollTo(0, elem);
            menu.classList.remove("menu_active");
            btnClick.classList.remove("btn_active");
        });
    }

    scroll(".home", "#home");
    scroll(".features", "#features");
    scroll(".about", "#template");
    scroll(".blog", "#blog");
    function scroll(link, element) {
        const linkSelector = document.querySelector(link);
        const elem = document.querySelector(element);
        window.addEventListener("scroll", () => {
            if (window.pageYOffset >= elem.offsetTop - 80 && window.pageYOffset <= elem.offsetTop + elem.offsetHeight) {
                linkSelector.classList.add("active");
            }
            else {
                linkSelector.classList.remove("active");
            }
        }
        )
    };
});