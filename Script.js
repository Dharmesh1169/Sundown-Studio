const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

function imgani() {
    let elemc = document.querySelector("#elem-con");
    let fix = document.querySelector("#fixed");
    elemc.addEventListener("mouseenter", function () {
        fix.style.display = "block";
    });

    elemc.addEventListener("mouseleave", function () {
        fix.style.display = "none";
    });

    let elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            let i = e.getAttribute("d-img");
            fix.style.backgroundImage = `url(${i})`;
        });
    });
}

function swiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
    });
}

function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loader () {
    let load = document.querySelector("#loader");
    setTimeout(function () {
        load.style.top = "-100%";
    },4000);
}

menuAnimation();
imgani();
swiper();
loader();