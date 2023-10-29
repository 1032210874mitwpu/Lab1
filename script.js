// function locomotiveAnimation() {
//     gsap.registerPlugin(ScrollTrigger);
  
//     // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
//     const locoScroll = new LocomotiveScroll({
//       el: document.querySelector("#main"),
//       smooth: true,
//     });
//     // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//     locoScroll.on("scroll", ScrollTrigger.update);
  
//     // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
//     ScrollTrigger.scrollerProxy("#main", {
//       scrollTop(value) {
//         return arguments.length
//           ? locoScroll.scrollTo(value, 0, 0)
//           : locoScroll.scroll.instance.scroll.y;
//       }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         };
//       },
//       // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//       pinType: document.querySelector("#main").style.transform
//         ? "transform"
//         : "fixed",
//     });
  
//     // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
//     // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//     ScrollTrigger.refresh();
//   }
// locomotiveAnimation()

// function readmorecircle(){
// var box1=document.querySelector("#boxes1")
// var plybtn=document.querySelector("#readm")

// box1.addEventListener("mouseenter",function(){
//     gsap.to(plybtn,{
//         opacity:1,
//         scale:1
//     })
// })
// box1.addEventListener("mouseleave",function(){
//     gsap.to(plybtn,{
//         opacity:0,
//         scale:0
//     })
// })
// box1.addEventListener("mousemove",function(dets){
//     gsap.to(plybtn,{
//         left:dets.x-40,
//         top:dets.y-70
//     })
// })
// var box2=document.querySelector("#boxes2")
// box2.addEventListener("mouseenter",function(){
//     gsap.to(plybtn,{
//         opacity:1,
//         scale:1
//     })
// })
// box2.addEventListener("mouseleave",function(){
//     gsap.to(plybtn,{
//         opacity:0,
//         scale:0
//     })
// })
// box2.addEventListener("mousemove",function(dets){
//     gsap.to(plybtn,{
//         left:dets.x-100,
//         top:dets.y+100
//     })
// })
// }
// readmorecircle()


function navbardrop(){
    const togglebtn=document.querySelector('.toggle_btn')
    const togglebtnicon=document.querySelector('.toggle_btn i')
    const dropdownmenu=document.querySelector('.dropdown_menu')

    togglebtn.onclick = function(){
        dropdownmenu.classList.toggle('open')
        const isopen=dropdownmenu.classList.contains('open')

        togglebtnicon.classList=isopen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
    }
}
navbardrop()

function Headinganimation(){
    gsap.from(".logo",{
        y:100,
        opacity:0,
        delay:0.6,
        duration:0.9,
        stagger:0.9
    })
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })
    gsap.from("#page1 h2",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })
    gsap.from("#page1 span",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })
    gsap.from("#page2 h3",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })
}
Headinganimation()

function serivicesanimation(){
gsap.from("#page2 #boxes1",{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.9,
    stagger:0.3
})
gsap.from("#page2 #boxes2",{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.9,
    stagger:0.3
})
}
serivicesanimation()

function cursormove(){  
   document.querySelector("#page1").addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        transform: 'translate(-50%,-50%) scale(1)',
        left:dets.x,
        top:dets.y
    })
   })
   document.querySelector("#page1").addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        transform: 'scale(0)'
    })
   })
}
cursormove()

function accordiatoggle(){
            var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
            panel.style.display = "none";
            } else {
            panel.style.display = "block";
            }
        });
        }
}
accordiatoggle()