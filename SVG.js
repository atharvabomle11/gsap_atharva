var init = `M 10 100 Q 500 100 990 100`
var final = `M 10 100 Q 500 100 990 100`

var str = document.querySelector("#string")

str.addEventListener("mousemove",function(dets){
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
   
    gsap.to("svg path",{
        attr:{ d: path},
        duration:0.3,
        ease:"power3.out"
    })
})

str.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:final},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})