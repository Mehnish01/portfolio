// Three.js Animations for Portfolio Sections

// Hero Section 3D Animation
function initHeroAnimation() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const { scene, camera, renderer } = initThreeScene(canvas);
  
  // Create rotating cube
  const cube = createRotatingCube(2, 0x00eeff);
  cube.castShadow = true;
  cube.receiveShadow = true;
  scene.add(cube);

  // Animation loop
  createAnimationLoop(renderer, scene, camera, () => {
    animateRotation(cube, 0.008, 0.01, 0.005);
  });

  // Handle resize
  const resizeHandler = () => onWindowResize(camera, renderer, canvas);
  window.addEventListener('resize', resizeHandler);

  return { scene, camera, renderer, cleanup: () => {
    window.removeEventListener('resize', resizeHandler);
    disposeScene(scene);
    renderer.dispose();
  }};
}

// Skills Section 3D Animation
function initSkillsAnimation() {
  const skillCards = document.querySelectorAll('.card');
  if (skillCards.length === 0) return;

  const skillAnimations = [];

  skillCards.forEach((card, index) => {
    // Create canvas for each skill card
    const canvas = document.createElement('canvas');
    canvas.className = 'skill-3d-canvas';
    canvas.style.width = '100%';
    canvas.style.height = '150px';
    card.insertBefore(canvas, card.firstChild);

    const { scene, camera, renderer } = initThreeScene(canvas);

    // Create different objects for each skill
    let object;
    if (index % 3 === 0) {
      object = createRotatingCube(1.2, 0x00eeff);
    } else if (index % 3 === 1) {
      object = createRotatingSphere(1, 0x00eeff);
    } else {
      object = createRotatingTorus(1, 0.4, 0x00eeff);
    }

    object.castShadow = true;
    object.receiveShadow = true;
    scene.add(object);

    // Animation loop
    createAnimationLoop(renderer, scene, camera, () => {
      animateRotation(object, 0.01, 0.008, 0.003);
    });

    // Handle resize
    const resizeHandler = () => onWindowResize(camera, renderer, canvas);
    window.addEventListener('resize', resizeHandler);

    skillAnimations.push({ 
      scene, 
      camera, 
      renderer, 
      cleanup: () => {
        window.removeEventListener('resize', resizeHandler);
        disposeScene(scene);
        renderer.dispose();
      }
    });
  });

  return skillAnimations;
}

// Projects Section 3D Animation
function initProjectsAnimation() {
  const projectCards = document.querySelectorAll('.project-card');
  if (projectCards.length === 0) return;

  const projectAnimations = [];

  projectCards.forEach((card) => {
    // Create canvas for each project card
    const canvas = document.createElement('canvas');
    canvas.className = 'project-3d-canvas';
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.3';

    // Ensure card is positioned relative
    card.style.position = 'relative';
    card.appendChild(canvas);

    const { scene, camera, renderer } = initThreeScene(canvas);

    // Create rotating object
    const cube = createRotatingCube(1.5, 0x00eeff);
    cube.castShadow = true;
    cube.receiveShadow = true;
    scene.add(cube);

    // Animation loop
    createAnimationLoop(renderer, scene, camera, () => {
      animateRotation(cube, 0.012, 0.015, 0.008);
    });

    // Handle resize
    const resizeHandler = () => onWindowResize(camera, renderer, canvas);
    window.addEventListener('resize', resizeHandler);

    projectAnimations.push({
      scene,
      camera,
      renderer,
      cleanup: () => {
        window.removeEventListener('resize', resizeHandler);
        disposeScene(scene);
        renderer.dispose();
      }
    });
  });

  return projectAnimations;
}

// Background Particles Animation
function initBackgroundParticles() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const { scene, camera, renderer } = initThreeScene(canvas);

  // Create particle geometry
  const particleCount = 200;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 50;
    positions[i + 1] = (Math.random() - 0.5) * 50;
    positions[i + 2] = (Math.random() - 0.5) * 50;

    velocities[i] = (Math.random() - 0.5) * 0.05;
    velocities[i + 1] = (Math.random() - 0.5) * 0.05;
    velocities[i + 2] = (Math.random() - 0.5) * 0.05;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({
    color: 0x00eeff,
    size: 0.2,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.6
  });

  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  // Animation loop with particle movement
  let time = 0;
  createAnimationLoop(renderer, scene, camera, () => {
    time += 0.001;
    const positions = geometry.attributes.position.array;

    for (let i = 0; i < positions.length; i += 3) {
      positions[i] += velocities[i];
      positions[i + 1] += velocities[i + 1];
      positions[i + 2] += velocities[i + 2];

      // Wrap around
      if (positions[i] > 25) positions[i] = -25;
      if (positions[i] < -25) positions[i] = 25;
      if (positions[i + 1] > 25) positions[i + 1] = -25;
      if (positions[i + 1] < -25) positions[i + 1] = 25;
      if (positions[i + 2] > 25) positions[i + 2] = -25;
      if (positions[i + 2] < -25) positions[i + 2] = 25;
    }

    geometry.attributes.position.needsUpdate = true;
  });

  // Handle resize
  const resizeHandler = () => onWindowResize(camera, renderer, canvas);
  window.addEventListener('resize', resizeHandler);

  return {
    scene,
    camera,
    renderer,
    cleanup: () => {
      window.removeEventListener('resize', resizeHandler);
      disposeScene(scene);
      renderer.dispose();
    }
  };
}

// Initialize all animations
function initializeAll3DAnimations() {
  const animations = {
    hero: initHeroAnimation(),
    skills: initSkillsAnimation(),
    projects: initProjectsAnimation(),
    background: initBackgroundParticles()
  };

  // Cleanup function for when page is destroyed
  window.cleanup3D = () => {
    Object.values(animations).forEach(anim => {
      if (Array.isArray(anim)) {
        anim.forEach(a => a.cleanup && a.cleanup());
      } else if (anim && anim.cleanup) {
        anim.cleanup();
      }
    });
  };

  return animations;
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Wait for Three.js to load
  if (typeof THREE === 'undefined') {
    console.error('Three.js is not loaded');
    return;
  }
  
  initializeAll3DAnimations();
});
