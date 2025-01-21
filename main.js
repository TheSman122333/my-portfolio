import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';


function init() {
  const scene = new THREE.Scene();

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });

  renderer.domElement.style.position = "absolute";
  renderer.domElement.style.top = "0";
  renderer.domElement.style.left = "0";

  renderer.domElement.style.zIndex = 0;

  renderer.setClearColor(0x000000, 1);

  renderer.setSize(window.innerWidth, window.innerHeight-100);
  document.body.appendChild(renderer.domElement);

  const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 50 );
  camera.position.set(0, 2, 8);
  camera.lookAt(scene.position);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;

  const pointlight = new THREE.PointLight(0xffffff, 3);
  pointlight.position.set(0, 200, 0);
  scene.add(pointlight);

  const pointlight2 = new THREE.PointLight(0xffffff, 3);
  pointlight2.position.set(200, 0, 0);
  scene.add(pointlight2);

  const pointlight3 = new THREE.PointLight(0xffffff, 3);
  pointlight3.position.set(-200, 0, 0);
  scene.add(pointlight3);

  const pointlight4 = new THREE.PointLight(0xffffff, 3);
  pointlight4.position.set(0, 0, 200);
  scene.add(pointlight4);

  const pointlight5 = new THREE.PointLight(0xffffff, 3);
  pointlight5.position.set(0, 0, -200);
  scene.add(pointlight5);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const starGeometry = new THREE.BufferGeometry();
  const starCount = 10000;
  const starVertices = [];
 
  for (let i = 0; i < starCount; i++) {
    const x = THREE.MathUtils.randFloatSpread(100);
    const y = THREE.MathUtils.randFloatSpread(100);
    const z = THREE.MathUtils.randFloatSpread(100);
    starVertices.push(x, y, z);
  }
 
  starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
 
  const starMaterial = new THREE.PointsMaterial({
    color: 0x036601,
    size: 0.5,
  });
 
  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);
 
  function animateStars() {
    stars.rotation.x += 0.0005;
    stars.rotation.y += 0.0005;
  }


  /* Add a grid helper for debugging
  const gridHelper = new THREE.GridHelper(10, 10);
  scene.add(gridHelper);*/

  const loader = new GLTFLoader();

  loader.load('./mx5.glb', function ( gltf ) {
    const car = gltf.scene
    car.position.setY(-0.05)
    car.scale.set(0.8,0.8,0.8)
    car.rotation.y = 100;
  
    scene.add( car );
  
  }, undefined, function ( error ) {
  
    console.error( error );
  
  } );

  loader.load('./potatos.glb', function ( gltf ) {

    const model = gltf.scene;

    model.scale.set( 2.5, 2.5, 2.5 );

    model.position.setX(1);
    model.position.setZ(-2.25);
    model.position.setY(1.4)
    model.rotation.y = 50; 

    scene.add( model );
  
  }, undefined, function ( error ) {
  
    console.error( error );
  
  } );

  loader.load('./mask.glb', function ( gltf ) {

    const mask = gltf.scene
    mask.scale.set( 2.5, 2.5, 2.5 );
    mask.position.setX(-1.5);
    mask.position.setZ(-1.5);
    mask.position.setY(0.1)
    mask.rotation.y = 180;
    mask.rotation.z = 70;
  
    scene.add( mask );
  
  }, undefined, function ( error ) {
  
    console.error( error );
  
  } );

  loader.load('./keyboard.glb', function ( gltf ) {

    const keyboard = gltf.scene
    keyboard.scale.set( 2.5, 2.5, 2.5 );
    keyboard.position.setX(-4);
    keyboard.position.setZ(0);
    keyboard.position.setY(-1.899)
    keyboard.rotation.y = -0.78;
    //keyboard.rotation.z = 70;
  
    scene.add( keyboard );
  
  }, undefined, function ( error ) {
  
    console.error( error );
  
  } );

  loader.load('./laptop.glb', function ( gltf ) {

    const laptop = gltf.scene
    laptop.scale.set( 2.5, 2.5, 2.5 );
    laptop.position.setX(-0.5);
    laptop.position.setZ(-2.5);
    //laptop.position.setY(0.1)
    laptop.rotation.y = 180;
    //laptop.rotation.z = 70;
  
    scene.add( laptop );
  
  }, undefined, function ( error ) {
  
    console.error( error );
  
  } );

  loader.load('./mokujin.glb', function ( gltf ) {

    const mokujin = gltf.scene
    //mokujin.scale.set( 1.2, 1.2, 1.2 );
    mokujin.position.setX(2.85);
    mokujin.position.setZ(-1.25);
    //mokujin.position.setY(0.1)
    mokujin.rotation.y = 180;
    //mokujin.rotation.z = 70;
  
    scene.add( mokujin );
  
  }, undefined, function ( error ) {
  
    console.error( error );
  
  } );

  loader.load('./designer_guitar.glb', function ( gltf ) {

    const acousticg = gltf.scene
    acousticg.scale.set( 1.5, 1.5, 1.5 );
    acousticg.position.setX(1.65);
    //acousticg.position.setZ(0);
    acousticg.position.setY(0.75);
    //acousticg.rotation.y = 180;
    //acousticg.rotation.z = 70;
  
    scene.add( acousticg );
  
  }, undefined, function ( error ) {
  
    console.error( error );
  
  } );

  loader.load('./racket.glb', function ( gltf ) {

    const racket = gltf.scene
    racket.scale.set( 0.2, 0.2, 0.2 );
    racket.position.setX(-2);
    racket.position.setZ(-2);
    racket.position.setY(0)
    racket.rotation.y = 180;
    //racket.rotation.z = 70;
  
    scene.add( racket );
  
  }, undefined, function ( error ) {
  
    console.error( error );
  
  } );

  loader.load('./ball.glb', function ( gltf ) {

    const ball = gltf.scene
    //ball.scale.set( 0.2, 0.2, 0.2 );
    ball.position.setX(-2.25);
    ball.position.setZ(-2);
    ball.position.setY(0.2)
    //ball.rotation.y = 180;
    //ball.rotation.x = 70;
  
    scene.add( ball );
  
  }, undefined, function ( error ) {
  
    console.error( error );
  
  } );

  function animate() {
    controls.update();
    renderer.render(scene, camera);
    animateStars()
    requestAnimationFrame(animate);
  }

  animate();
}

init();