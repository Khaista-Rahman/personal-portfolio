gsap.from("#nav1", {
  y:-100,
  duration : 1.5,
  delay: 0.5 
})

gsap.from("#nav2", {
  y:-100,
  duration : 1.5,
  delay: 0.8 
})

gsap.from("#nav3", {
  y:-100,
  duration : 1.5,
  delay: 1.1 
})

gsap.from("#nav4", {
  y:-100,
  duration : 1.5,
  delay: 1.4 
})

gsap.from("#line1", {
  scale: 0,
  duration: 2, 
  delay : 1
})

gsap.from("#container1", {
  y:-600,
  duration: 1,
  delay : 0.5
})

gsap.from("#container1 button", {
  x:600,
  duration : 1,
  delay:1
})

gsap.from("#container1 #photo", {
  x:-400,
  y:200,
  x: 200,
  y: -100,
  duration : 1,
  delay:1
})

gsap.from("#container1 h1", {
  y:-300,
  duration : 1,
  delay:1
})

gsap.from("#intro,#line2", {
  scale : 0,
  duration : 1,
  scrollTrigger:{
    trigger : "#intro,#line2",
    scroller : "body",
    start : "top 80%",
    scrub : true,
  }
})

gsap.from("#container2", {
  y : -400,
  duration : 1,
  scrollTrigger : {
    trigger : "#container2",
    scroller : "body",
    start : "top 30%",
    scrub : true,
  }
})


gsap.from("#skill", {
  scale : 0,
  duration : 1,
  scrollTrigger:{
    trigger : "#skill",
    scroller : "body",
    start : "top 90%",
    end : "top 30%",
    scrub : true,
  }
})

gsap.from("#css", {
  scale : 0,
  delay : 0.3,
  duration : 1,
  scrollTrigger: {
    trigger: "#container3",
    scroller : "body",
    start : "top 75%",
    end : "top 50%",
    scrub : true ,
  }
})

gsap.from("#html", {
  scale : 0,
  delay : 0.6,
  duration : 1,
  scrollTrigger: {
    trigger: "#container3",
    scroller : "body",
    start : "top 75%",
    end : "top 50%",
    scrub : true ,
  }
})
gsap.from("#javascript", {
  scale : 0,
  delay : 0.9,
  duration : 1,
  scrollTrigger: {
    trigger: "#container3",
    scroller : "body",
    start : "top 75%",
    end : "top 50%",
    scrub : true ,
  }
})
gsap.from("#tailwindPhoto", {
  scale : 0,
  delay : 1,
  duration : 1,
  scrollTrigger: {
    trigger: "#container3",
    scroller : "body",
    start : "top 75%",
    end : "top 50%",
    scrub : true ,
  }
})
gsap.from("#tags h1", {
  scale : 0,
  duration : 1,
  scrollTrigger: {
    trigger: "#container3",
    scroller : "body",
    start : "top 75%",
    end : "top 50%",
    scrub : true ,
  }
})

gsap.from("#findMe", {
  scale : 0,
  duration : 1,
  scrollTrigger:{
    trigger : "#findMe",
    scroller : "body",
    start : "top 90%",
    end : "top 30%",
    scrub : true,
  }
})

gsap.from("#facebook", {
  x:800,
  delay : 0.3,
  duration : 3,
  scrollTrigger: {
    trigger: "#findMe",
    scroller : "body",
    start : "top 60%",
    end : "top 40%",
    scrub : true ,
  }
})

gsap.from("#instagram", {
  x:-800,
  delay : 0.3,
  duration : 3,
  scrollTrigger: {
    trigger: "#findMe",
    scroller : "body",
    start : "top 60%",
    end : "top 40%",
    scrub : true ,
  }
})
gsap.from("#whatsapp", {
  scale : 0,
  duration : 1,
  scrollTrigger: {
    trigger: "#findMe",
    scroller : "body",
    start : "top 60%",
    end : "top 40%",
    scrub : true ,
  }
})

gsap.from("#projects", {
  scale : 0,
  duration : 1,
  scrollTrigger:{
    trigger : "#projects",
    scroller : "body",
    start : "top 90%",
    end : "top 30%",
    scrub : true,
  }
})

gsap.from("#project1,#project2", {
  scale : 0,
  duration : 3,
  scrollTrigger:{
    trigger : "#projects",
    scroller : "body",
    start : "top 90%",
    end : "top 30%",
  }
})

gsap.to("#seeMore", {
  y: -100,
  duration : 1,
  scorllTrigger: {
    trigger : "#projects",
    scroller : "body",
    start : "top 90%",
    end : "top 30%",
    scrub : true,
    markers : true,
  }
})