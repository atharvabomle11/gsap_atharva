window.addEventListener("wheel",function(dets){
    if(dets.deltaY>0){
        gsap.to(".marque",{
            transform:"translate(-200%)",
            duration:3,
            ease:"none",
            repeat:-1
        })

        gsap.to(".marque img",{
            rotate:180
        })
    } else {
        gsap.to(".marque",{
            transform:"translate(0%)",
            duration:3,
            ease:"none",
            repeat:-1
        })
        gsap.to(".marque img",{
            rotate:0
        })
    }
})

