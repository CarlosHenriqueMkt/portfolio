import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function gsapAnimations(velociraptor) {
  //Hero
  if(window.innerWidth < 768) {

    /* Posição Mobile */
    gsap.fromTo(
      velociraptor.position, {
        x: 3,
        y: -2,
        scale: 0,
      },
      {
        x: 0,
        y: -2,
        duration: 2.58333325386,
        ease: 'power1.inOut',
      }
    )

  } else {

    /* Posição Desktop */
    gsap.fromTo(
      velociraptor.position, {
        x: 6,
        y: -1
      },
      {
        x: -.5,
        y: -1,
        duration: 2.58333325386, // Duração = Resultado da multiplicação do tempo das animações pelo número de repetições necessárias para atender o trajeto percorrido.
        ease: 'power1',
      }
    )
  }

  /* Animação do texto */
  const heroText = document.getElementById('heroContent')
  gsap.fromTo(
    heroText, {
      x: -20,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: .5,
      ease: 'power1',
    }
  )

  /* Portfolio */
  const PortCard = document.querySelectorAll('.card')
  PortCard.forEach(card => {
    gsap.fromTo(card, 
      {
        x: card.classList.contains('left') ? -200 : 1500,
        opacity: 0
      }, 
      {
        x: card.classList.contains('right') ? 1000 : 0,
        opacity: 1,
        duration: 1,
        ease: 'power1.in',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%', 
          end: 'top center',
          scrub: true,
          toggleActions: 'play none none none', 
        }
      }
    );
  });

  /* Conteúdos */

  
}