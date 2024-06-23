import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({ease: 'sine'})

export function gsapAnimations(velociraptor) {
  //Hero
  if(window.innerWidth <= 768) {

    /* Posição Mobile */
    gsap.fromTo(
      velociraptor.position, {
        x: 1.5,
        y: -.5,
      },
      {
        x: -.05,
        y: -.5,
        duration: 2.58333325386,
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
        x: 0.8,
        y: -1,
        duration: 2.58333325386, // Duração = Resultado da multiplicação do tempo das animações pelo número de repetições necessárias para atender o trajeto percorrido.
      }
    )
  }

  /* Animação de texto */
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
    }
  )

  const portText = document.getElementById('portTitle')
  gsap.fromTo(
    portText,
    {
      y: 20,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: portText,
        start: "top 70%",
        end: "top center"
      }
    }
  )

  /* Portfolio */
  const PortCard = document.querySelectorAll('.card')
  PortCard.forEach(card => {
    gsap.fromTo(card, 
      {
        x: card.classList.contains('left') ? -200 : 200,
        opacity: 0
      }, 
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: 'top 70%', 
          end: 'top center',
          scrub: 1,
          toggleActions: 'play none none none', 
        }
      }
    );
  });

  /* Conteúdos */

  
}