function cursorEffect(){ 
    var page1Content = document.querySelector("#page1-content")
var cursor = document.querySelector("#cursor")

page1Content.addEventListener("mousemove", function(dets){
    // cursor.style.left = dets.x+"px"
    // cursor.style.top = dets.y+"px"

    //by using gsap:
    gsap.to(cursor,{
        x:dets.x,  //jaha jaha mouse move karega in x-axis
        y:dets.y
    })
})

page1Content.addEventListener("mouseenter", function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})

page1Content.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}
cursorEffect()

var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")

elemC.addEventListener("mouseenter", function(){
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function(){
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem") 
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
    })
    
})

function sliderAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        duration: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
          },
      });
    
}
sliderAnimation()

var tl = gsap.timeline()

tl.from("#loader h3", {
    x: 200,
    opacity:0,
    duration: 3,
    stagger: 0.1
})
tl.to("#loader h3",{
    x: -50,
    opacity:0,
    duration: 1,
    stagger:0.1
})
tl.to("#loader",{
    opacity:0,
})
tl.from("#page1-content span",{
    y:100,
    opacity:0,
    stagger:0.2,
    duration: 0.5,
    delay: -0.3
})
tl.to("#loader",{
    display: "none"
})

tl.from("#page-new-bot span", {
    y:-200,
    opacity:0,
    stagger:0.2,
    duration: 0.5,
    delay: 1.5
})
