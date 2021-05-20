const tl = gsap.timeline({
    ease: 'none',
    scrollTrigger:{
        trigger: '.bcg-parallax',
        start: 'top bottom',
        scrub: true
}
})

tl
.from('.content-wrapper', {duration: 0.4, autoAlpha: 0}, 0.4) 
.from('.bcg', {duration: 2, y: '-30%'}, 0)