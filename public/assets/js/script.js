/* =========================================
   MOBILE MENU
========================================= */

$(document).ready(function () {

    // Open Mobile Menu
    $(".cta .mobile-icon").on("click", function () {
        $("body").addClass("open-menu");
    });

    // Close Mobile Menu
    $(".mobile-menu .mobile-menu-header span").on("click", function () {
        $("body").removeClass("open-menu");
    });

});


/* =========================================
   INITIALIZE AFTER REACT HAS RENDERED
========================================= */

window.addEventListener("load", function () {

    /* =========================================
       CUSTOM CURSOR
    ========================================= */

    const cursor = document.querySelector(".cursor-example");

    if (cursor) {

        let posX = 0;
        let posY = 0;

        let mouseX = 0;
        let mouseY = 0;

        gsap.to(cursor, {
            duration: 0.018,
            repeat: -1,

            onRepeat: function () {

                posX += (mouseX - posX) / 8;
                posY += (mouseY - posY) / 8;

                gsap.set(cursor, {
                    left: posX - 1,
                    top: posY - 2
                });

            }
        });

        document.addEventListener("mousemove", function (e) {

            mouseX = e.clientX;
            mouseY = e.clientY;

        });

    }


    /* =========================================
       GSAP + SCROLLTRIGGER
    ========================================= */

    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {

        gsap.registerPlugin(ScrollTrigger);


        /* =========================================
           SCROLL ANIMATIONS
        ========================================= */

        const animationSelectors = `
            .about-img,
            .portfolio-object-card,
            .portfolio-card,
            .experience-card,
            .process-title,
            .contribution-card,
            .contact-information-card,
            .contact-information-box,
            .services-box-card,
            .process-card,
            .services-card,
            .hero-card,
            .industries-card,
            .featured-card,
            .section-title span,
            .section-title h2,
            .section-title p,
            .testimonial-card,
            .contact-card h3,
            .expertise-line-1,
            .cta-btns,
            .featured-text span,
            .featured-link a,
            .about-section .about-link a
        `;

        const animatedElements = gsap.utils.toArray(animationSelectors);

        animatedElements.forEach(function (element) {

            gsap.from(element, {

                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }

            });

        });


        /* =========================================
           COUNTERS
        ========================================= */

        const counters = gsap.utils.toArray(".counter");

        counters.forEach(function (counter) {

            const target = parseInt(counter.dataset.count, 10);
            const suffix = counter.dataset.suffix || "+";

            const obj = {
                value: 0
            };

            gsap.to(obj, {

                value: target,
                duration: 2,
                ease: "power2.out",

                scrollTrigger: {
                    trigger: counter,
                    start: "top 85%",
                    once: true
                },

                onUpdate: function () {

                    counter.textContent =
                        Math.ceil(obj.value) + suffix;

                }

            });

        });

    }


    /* =========================================
       MARQUEE
    ========================================= */

    function Marquee(selector, speed) {

        const parentSelector = document.querySelector(selector);

        // Stop if marquee doesn't exist
        if (!parentSelector) {
            return;
        }

        const firstElement = parentSelector.children[0];

        // Stop if marquee is empty
        if (!firstElement) {
            return;
        }

        const clone = parentSelector.innerHTML;

        let i = 0;

        parentSelector.insertAdjacentHTML("beforeend", clone);
        parentSelector.insertAdjacentHTML("beforeend", clone);


        setInterval(function () {

            firstElement.style.marginLeft = `-${i}px`;

            if (i > firstElement.clientWidth) {
                i = 0;
            }

            i = i + speed;

        }, 0);

    }


    /* =========================================
       START MARQUEE
    ========================================= */

    Marquee(".marquee", 0.2);

});