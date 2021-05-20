gsap.to(['#intro h1', '#intro p'], {
    autoAlpha: 0,
    ease: 'none',
    scrollTrigger: {
        trigger: '#intro .content',
        pin: true,
        start: 'top top+=1%',
        // end: 'bottom bottom+=5%',
        scrub: true,
        markers: true
    }
})