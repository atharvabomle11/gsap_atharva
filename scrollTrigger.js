// gsap.from("#page1 #box",{
//     scale:0,
//     delay:1,
//     duration:1,
//     rotate:180
// })

// gsap.from("#page2 #box",{
//     scale:0,
    
//     duration:1,
//     rotate:360,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"tpo 30%",
//         scrub:2
//     }
// })

// gsap.from("#page2 h1",{
//     opacity:0,
//     duration:1,
//     scale:0,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })

// gsap.from("#page2 h2",{
//     opacity:0,
//     duration:1,
//     scale:0,
//     scrollTrigger:{
//         trigger:"#page2 h2",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })


////                            Practice

gsap.to("#page2 h1",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true 
    }
})