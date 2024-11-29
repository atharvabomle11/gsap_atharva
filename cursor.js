var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var image = document.querySelector("#image")

main.addEventListener("mousemove",function(dets){
    console.log(dets.x)
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
       
    })
})

image.addEventListener("mouseenter",function(){
    cursor.innerHTML = "View more"
    gsap.to(cursor,{
        scale:3,
        backgroundColor:"#ffffff72"
    })
})

image.addEventListener("mouseleave",function(){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1,
         backgroundColor:"white"
    })
})