import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  const numbersSection = document.querySelector('#numbers');
  const numberElements = document.querySelectorAll('#numbers .number');

  // GSAP timeline com ScrollTrigger
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: numbersSection,
      start: 'top 80%', // Define o local que começa a animação de stagger
      end: 'top 20%', // Define o local que acaba a animação de stagger
      toggleActions: 'play none none none', //onEnter onLeave onEnterBack onLeaveBack
    },
    defaults: { 
      duration: 1, 
      ease: 'power2.out' 
    }
  });

  // Animação Stagger
  tl.fromTo(numberElements, {
    opacity: 0,
    y: 50,
  },
  {
    opacity: 1,
    y: 0,
    stagger: .5 // Intervalo de aparecimento de 0.5 segundos.
  }

);

  // Counting animation function
  function countUp(element, target, duration) {
    let start = 0;
    let increment = target / (duration * 60); // Aproximadamente 60fps

    function update() {
      start += increment;
      if (start < target) {
        element.innerText = Math.floor(start);
        requestAnimationFrame(update);
      } else {
        element.innerText = target; // Garantindo que o valor final será definido
      }
    }

    update();
  }

  // Ativa a animação numérica após a finalização do Stagger
  tl.add(() => {
    countUp(document.getElementById('years'), 9, 2); // + 9 de carreira
    countUp(document.getElementById('money'), 2, 2); // + 2 Milhões faturados pros bolsos dos contratantes
    countUp(document.getElementById('success'), 30, 2); // + 30 projetos bem sucedidos sem enlouquecer
  }, "-=0.5"); // Define que a animação vai começar levemente antes do stagger terminar
});

