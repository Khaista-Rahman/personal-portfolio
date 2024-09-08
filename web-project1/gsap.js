// nav 1 animation start 

gsap.to("#nav1 > *", {
  opacity: 0,
  duration: 0,
});

gsap.from("#nav1", {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  bottom: 0,
  overflow: "hidden",
  duration: 2,
  delay: 1,
});

gsap.to("#nav1 > *", {
  opacity: 1,
  duration: 1,
  delay: 1.5,
});

// nav 1 anitmation finish


// mobile shopping animation start
gsap.from("#mobilesShopping",{
  height: "50px",
  width : "50px",
  borderRadius : "50%",
  x : -100 ,
  duration : 2 , 
  delay : 2 , 
})

// mobile shopping animation finish

gsap.from("#header1", {
  x : -1400,
  duration : 2,
  delay : 1,
  rotate : "360deg"
})

gsap.from("#LatestFlagship", {
  y: -1400,
  duration : 2,
  delay : 1.3,
})

gsap.from("#stayontrend", {
  y: -1400,
  duration : 2,
  delay : 1.6,
})

gsap.from("#homeaudio", {
  y: -1400,
  duration : 2,
  delay : 1.9,
})

gsap.from("#smarthome", {
  y: -1400,
  duration : 2,
  delay : 2.3,
})

// buttons animation start 
gsap.from("button", {
  y: 100,
  duration: 1.5,
  delay: 1
});
//buttons animation finish

gsap.from("#newbrand",{
  y:20,
  duration : 2.5,
  delay: 2,
})


gsap.registerPlugin(ScrollTrigger);

gsap.to("footer", {
  scrollTrigger: {
    trigger: "footer", 
    start: "top 90%",   
    end: "top 70%",    
    toggleActions: "play none none none", 
  },
  y: 0,               
  opacity: 1,        
  duration: 1,        
  delay: 1,            
});

