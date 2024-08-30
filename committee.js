gsap.to(".pages", {
    width: "50vw",
    height: "7vh",
    position: "fixed",
    top: "5.5%",
    left: "50%",
    transform: "translateX(-20%)",
    scrollTrigger: {
        trigger: ".committee-members",
        scroller: "body",
        start: "top 26%",
        end: "top 28%",
        scrub: 1,
    }
})

gsap.to(".pages h5", {
    fontSize: "0.7rem",
    scrollTrigger: {
        trigger: ".committee-members",
        scroller: "body",
        start: "top 26%",
        end: "top 28%",
        scrub: 1,
    }
})
