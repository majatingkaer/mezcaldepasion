gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
    const divs =
          section.querySelectorAll("div");
    gsap.from(divs, {
        opacity: 0,
        y: 100,
        duration: 2,
        //stagger: 1,
        scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "center 40%",
            //markers: true,
            scrub: true,
        },
    });
});


gsap.to(".splash_flasker", {
    translateX: 200,
    duration: 1.5,
    ease: "back.out(1.7)",
});


gsap.from(".tegning", {
    yPercent: 30,
    stagger: .1,
    ease: "none",
    scrollTrigger: {
        trigger: ".tegning",
        start: "top 90%",
        end: "top 70%",
        scrub: true,
       //markers: true,
    }
});










