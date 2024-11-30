function single() {
    var h1 = document.querySelector("h1")
    var h1text = h1.textContent

    var split = h1text.split("")
    var half = Math.floor(split.length/2)

    var clutter = ""

    split.forEach(function (elem,idx) {
        if(idx<half){
            clutter += `<span class="a">${elem}</span>`
        }
        else{
            clutter += `<span class="b">${elem}</span>`
        }
    })

    h1.innerHTML = clutter
   console.log(h1)
}

single()

gsap.from(".a",{
    y:50,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:0.1,
})

gsap.from(".b",{
    y:50,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:-0.1,
})