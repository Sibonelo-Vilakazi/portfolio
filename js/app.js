gsap.registerPlugin(ScrollTrigger);
// For each images with class "animate-image" on page
gsap.utils.toArray('.title_wrapper').forEach((el, index) => { 
    let tl = gsap.timeline({
    scrollTrigger: {
        trigger: el,
        start: "top top",
        toggleActions: "play none none reverse",
        
    }
})

tl
.set(el, {transformOrigin: 'center center'})
.fromTo(el, { opacity: 0, scale: 0.8, y: "+=100"}, {opacity: 1, scale: 1, y: 0, duration: 1, immediateRender: false})
})