// Three.js Setup and Utilities for Portfolio 3D Animations

// Create a rotating cube
function createRotatingCube(size = 2, color = 0x00eeff) {
  const geometry = new THREE.BoxGeometry(size, size, size);
  const material = new THREE.MeshStandardMaterial({
    color: color,
    emissive: color,
    emissiveIntensity: 0.3,
    metalness: 0.7,
    roughness: 0.2
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.rotation.x = Math.random() * Math.PI;
  cube.rotation.y = Math.random() * Math.PI;
  return cube;
}

// Create a rotating sphere
function createRotatingSphere(radius = 1.5, color = 0x00eeff) {
  const geometry = new THREE.IcosahedronGeometry(radius, 4);
  const material = new THREE.MeshStandardMaterial({
    color: color,
    emissive: color,
    emissiveIntensity: 0.2,
    metalness: 0.6,
    roughness: 0.3
  });
  const sphere = new THREE.Mesh(geometry, material);
  return sphere;
}

// Create a rotating torus
function createRotatingTorus(radius = 1.5, tubeRadius = 0.6, color = 0x00eeff) {
  const geometry = new THREE.TorusGeometry(radius, tubeRadius, 16, 32);
  const material = new THREE.MeshStandardMaterial({
    color: color,
    emissive: color,
    emissiveIntensity: 0.25,
    metalness: 0.5,
    roughness: 0.4
  });
  const torus = new THREE.Mesh(geometry, material);
  return torus;
}

// Initialize a Three.js scene with camera and renderer
function initThreeScene(canvas) {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0f5050);
  scene.fog = new THREE.Fog(0x0f5050, 100, 500);

  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ 
    canvas: canvas, 
    antialias: true, 
    alpha: true 
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowShadowMap;

  // Add lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0x00eeff, 1, 50);
  pointLight.position.set(5, 5, 5);
  pointLight.castShadow = true;
  pointLight.shadow.mapSize.width = 1024;
  pointLight.shadow.mapSize.height = 1024;
  scene.add(pointLight);

  return { scene, camera, renderer };
}

// Handle window resize
function onWindowResize(camera, renderer, canvas) {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

// Animate object with rotation
function animateRotation(object, speedX = 0.01, speedY = 0.01, speedZ = 0) {
  object.rotation.x += speedX;
  object.rotation.y += speedY;
  object.rotation.z += speedZ;
}

// Create animation loop
function createAnimationLoop(renderer, scene, camera, callback) {
  function animate() {
    requestAnimationFrame(animate);
    if (callback) callback();
    renderer.render(scene, camera);
  }
  animate();
}

// Dispose of scene resources
function disposeScene(scene) {
  scene.traverse((child) => {
    if (child.geometry) child.geometry.dispose();
    if (child.material) {
      if (Array.isArray(child.material)) {
        child.material.forEach((mat) => mat.dispose());
      } else {
        child.material.dispose();
      }
    }
  });
}
