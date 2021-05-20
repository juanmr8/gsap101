gsap.registerPlugin(ScrollTrigger);

    function init(){

        const projects = document.querySelectorAll('.project')

        projects.forEach((project) => {
            
            gsap.from(project, {
               opacity: 0, // fade in 
               yPercent: 5, // from the bottom up 
               scrollTrigger: {
                   trigger: project.querySelector('img'),
                   start: 'top bottom-=300', // fr
                   end: 'top center',
                   toggleActions: 'play none none reverse',
                   scrub: true,
                   onUpdate: ({progress, direction, isActive, getVelocity}) => console.log(progress, direction, isActive, getVelocity()),
                   markers: true
               }
            })

        })
}

window.addEventListener('load', function(){
    init();
})