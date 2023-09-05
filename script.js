var h1 =document.querySelector("h1").textContent 
var chutilulli= h1.split("") 
var chodumal="" 
chutilulli.forEach(function(elem){ 
    chodumal+=`<span>${elem}</span>`
})
document.querySelector("h1").innerHTML=chodumal 


gsap.from("h1 span",{ 
    y:30, 
    rotate:"60deg",
    stagger:0.3, 
    opacity:0,

    scrollTrigger:{ 
        trigger:"h1" 
        , scroller:"body", 
        start:"top 90%", 
        end: "top 0%" 
      , scrub:2, 
    }
})
