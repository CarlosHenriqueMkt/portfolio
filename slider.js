import gsap from "gsap";

document.addEventListener('DOMContentLoaded', () => {
  let count = 0;
  const targets = document.querySelectorAll(".box");
  gsap.set(targets, { xPercent: 100 });
  gsap.set(targets[0], { xPercent: 0 });
  
  // Próximo
  function slideOneNext() {
    gsap.fromTo(
      targets[count],
      { xPercent: 0, zIndex: 0 },
      { delay: .8, duration: 1.2, xPercent: -100, zIndex: -10 }
    );
    
    count = count < targets.length - 1 ? ++count : 0;
    
    gsap.fromTo(
      targets[count],
      { xPercent: 100, zIndex: 10 },
      { duration: 1.2, xPercent: 0, zIndex: 0 }
    );
  }
  nextButton.addEventListener("click", function() {
    slideOneNext();
  });
  
  // Anterior
  function slideOnePrev() {
    gsap.fromTo(targets[count], 
      { xPercent: 0, zIndex: 0 }, 
      { delay: 0.9, duration: 1.2, xPercent: 100, zIndex: -10 });
      
      count = count > 0 ? --count : targets.length - 1;
      
      gsap.fromTo(
        targets[count],
        { xPercent: -100, zIndex: 10 },
        { duration: 1.2, xPercent: 0, zIndex: 0 }
      );
    }
    prevButton.addEventListener("click", function() {
      slideOnePrev();
    });
  })
    