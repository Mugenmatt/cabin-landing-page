

// ------------------- Box2 -------------------
gsap.from(".boxNumberTitle2", {
    scrollTrigger: {
        trigger: ".box2",
        start: "top center",
    },
    x:400,
    duration: 3,
    opacity: 0
})

gsap.from(".paragraph2", {
    scrollTrigger: {
        trigger: ".box2",
        start: "top center",
    },
    x:400,
    duration: 3,
    opacity: 0,
    delay:2,
})

// ------------------- Box3 -------------------

gsap.from(".boxNumberTitle3", {
    scrollTrigger: {
        trigger: ".box3",
        start: "top center",
    },
    x:-400,
    duration: 3,
    opacity: 0
})

gsap.from(".paragraph3", {
    scrollTrigger: {
        trigger: ".box3",
        start: "top center",
    },
    x:-400,
    delay:2,
    duration: 3,
    opacity: 0
})

// ------------------- Box4 -------------------

gsap.from(".boxNumberTitle4", {
    scrollTrigger: {
        trigger: ".box4",
        start: "top center",
    },
    x:400,
    duration: 3,
    opacity: 0
})

gsap.from(".person", {
    scrollTrigger: {
        trigger: ".box4",
        start: "top center",
    },
    stagger: 0.6,
    duration: 1.5,
    y: -100,
    opacity: 0
})

gsap.from(".socialMedia", {
    scrollTrigger: {
        trigger: ".box4",
        start: "top center",
    },
    duration: 3,
    y: 100,
    opacity: 0
})


// ------------------- Box5 -------------------

gsap.from(".boxNumberTitle5", {
    scrollTrigger: {
        trigger: ".box5",
        start: "top center",
    },
    x:-400,
    duration: 3,
    opacity: 0
})

gsap.from(".leftVideo", {
    scrollTrigger: {
        trigger: ".box5",
        start: "top center",
    },
    duration: 3,
    x: -900,
    opacity: 0
})

gsap.from(".rightVideo", {
    scrollTrigger: {
        trigger: ".box5",
        start: "top center",
    },
    duration: 3,
    x: 900,
    opacity: 0
})

// ------------------- Box6 -------------------

gsap.from(".whatWant", {
    scrollTrigger: {
        trigger: ".box6",
        start: "top center",
    },
    duration: 3,
    y: -200,
    opacity: 0,
    delay: 0.5
})

gsap.from(".story", {
    scrollTrigger: {
        trigger: ".box6",
        start: "top center",
    },
    duration: 3,
    y: -200,
    opacity: 0,
    delay: 2,
    stagger: 0.5
})