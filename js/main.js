gsap.registerPlugin(ScrollTrigger);

    function init(){
    gsap.to(['#intro h1', '#intro p'], {
        autoAlpha: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: '#intro .content',
            pin: true,
            start: 'top top+=2%',
            scrub: true,
            markers: true
        }
    })

}

window.addEventListener('load', function(){
    init();
})