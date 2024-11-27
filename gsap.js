// gsap.to("#box1",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:180,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     scale:0.5
// })

// gsap.to("#box2",{
//     x:1000,
//     duration:2,
//     delay:1
// })

// gsap.to("#div",{
//     x:1000,
//     duration:1,
//     delay:1,
//     rotate:180,
//     repeat:-1, // used to repeat the animation
//     yoyo:true // used to repeat the animation in reverse order
// })

// gsap.from("h1",{
//     opacity:0,
//     y:50,
//     duration:2,
//     delay:1,
//     stagger:0.5 // Property used to animate each h1 one by one
// })


//                        Time-line concept

var tl = gsap.timeline()

// tl.to("#box3",{
//     x:1000,
//     duration:1,
//     delay:1,
//     rotate:180
// })

// tl.to("#box4",{
//     x:1000,
//     duration:1,
//     backgroundColor:"green",  
// })

// tl.to("#box5",{
//     x:1000,
//     duration:1,
//     scale:0.5,
//     borderRadius:"50%"   
// })


tl.from("h1",{
    opacity:0,
    y:-30,
    duration:0.5,
    delay:1
})

tl.from("h4",{
    opacity:0,
    y:-30,
    duration:0.5,
    stagger:0.3
})

tl.from("h2",{
    opacity:0,
    scale:0.5,
    duration:0.5,
})

tl.from("#below h3",{
    opacity:0,
    x:60,
    duration:0.6,
    stagger:0.6
})