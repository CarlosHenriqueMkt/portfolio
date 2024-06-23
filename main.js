import * as THREE from 'three';
import { models } from './models';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspectRatio = sizes.width / sizes.height;

let renderer, scene, camera, fov, clock, velociraptor, canvas, environment, pmremGenerator, mixer, speed;
clock = new THREE.Clock();

experience();
environmentForModels();
animate();

export function experience() {
  scene = new THREE.Scene();
  canvas = document.getElementById('app');

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  canvas.appendChild(renderer.domElement);
  renderer.shadowMap.enabled = true;
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));

  camSettings();

  // Load models and create the mixer
  models(scene, (loadedModel, loadedMixer) => {
    velociraptor = loadedModel;
    mixer = loadedMixer;
  });
  

  window.addEventListener('resize', updateRendererSizes);

  renderer.render(scene, camera);
}

function environmentForModels() {
  environment = new RoomEnvironment(renderer);
  pmremGenerator = new THREE.PMREMGenerator(renderer);
  scene.environment = pmremGenerator.fromScene(environment).texture;
}

function camSettings() {
  fov = window.innerWidth < 600 ? 10 : 15;
  camera = new THREE.PerspectiveCamera(fov, aspectRatio, 0.1, 1000);
  camera.position.z = 10;
  scene.add(camera);
}

function updateRendererSizes() {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
}

function animate() {
  const delta = clock.getDelta();

  /* speed = 1; */ //Controla a multiplicação de delta

  if (mixer) {
    mixer.update(delta);
  }

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
