import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { gsapAnimations } from './animations';

export function models(scene, callback) {
  const loader = new GLTFLoader();

  loader.load('/velociraptor_animated.glb', function (gltf) {
    const velociraptor = gltf.scene;
    const animations = gltf.animations;
    velociraptor.rotation.y = -1.5;
    if(window.innerWidth <= 768) {
      velociraptor.scale.setScalar(.2)
    } else {
      velociraptor.scale.setScalar(.8)
    }

    gsapAnimations(velociraptor);

    const mixer = new THREE.AnimationMixer(velociraptor);

    let walkAnimation = null;
    let idleAnimation = null;
    let roarAnimation = null;
    
    animations.forEach((clip) => {
      if (clip.name === "Walk") {
        walkAnimation = clip;
      }
      if (clip.name === "Idle_01") {
        idleAnimation = clip;
      }
      if (clip.name === "Roar_01") {
        roarAnimation = clip;
      }
    });

    if (walkAnimation !== null) {
      const walkAction = mixer.clipAction(walkAnimation);
      console.log(walkAction)
      
      walkAction.play();

     
      walkAction.repetitions = 2;
      walkAction.clampWhenFinished = true;

      // Marca o termino de uma animação e inicia a próxima
      mixer.addEventListener('finished', () => {
        console.log('Walk animation finished');

        if (idleAnimation !== null) {
          const idleAction = mixer.clipAction(idleAnimation);

          // Transição entre as animações
          walkAction.crossFadeTo(idleAction, .5, true);
          idleAction.play();
        } else {
          console.error('Idle animation not found.');
        }
      });
    } else {
      console.error('Animation "Walk" not found.');
    }

    scene.add(velociraptor);

    // Faz uma callback do model e do mixer. Importante para a atualização de frames dentro da function Animation().
    if (callback && typeof callback === 'function') {
      callback(velociraptor, mixer);
    }
  }, undefined, function (error) {
    console.error(error);
  });
}
