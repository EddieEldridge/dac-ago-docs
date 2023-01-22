let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let controls;

// const ddsLoader = new THREE.DDSLoader();
const clock = new THREE.Clock();
const manager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader();
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ alpha: true });
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 100);
const loader = new THREE.ColladaLoader(manager);
const spotLight = new THREE.SpotLight(0xcccccc, 4, 11, Math.PI / 10);
const debug = false;

let dae_model;
let dae_path = "";
let mainTexPath = "";
let attachTexPath = ""

let DEFAULT_BACKGROUND = "Mordor"
let DEFAULT_MODEL = "Ruffians"

init();

// Set new dae, main texture and attachement texture paths
function setModelPaths(model) {
  switch (model) {
    case "Ruffians":
      dae_path = "/models/rebels/bandits.dae";
      mainTexPath = "/models/rebels/bandits_attach_new.png";
      attachTexPath = "/models/rebels/bandits_new.png";
      break;

    case "Ruffians_2":
      dae_path = "/models/rebels/bandits_2.dae";
      mainTexPath = "/models/rebels/bandits_attach_new.png";
      attachTexPath = "/models/rebels/bandits_new.png";
      break;

    case "Ruffians_3":
      dae_path = "/models/rebels/bandits_3.dae";
      mainTexPath = "/models/rebels/bandits_attach_new.png";
      attachTexPath = "/models/rebels/bandits_new.png";
      break;

    case "Oathband":
      dae_path = "/models/dunland/oathband.dae";
      mainTexPath = "/models/dunland/dunland_BG_alt.png";
      attachTexPath = "/models/dunland/dunland_bg.png";
      break;

    case "Oathband_2":
      dae_path = "/models/dunland/oathband_2.dae";
      mainTexPath = "/models/dunland/dunland_BG_alt.png";
      attachTexPath = "/models/dunland/dunland_bg.png";
      break;

    case "Oathband_3":
      dae_path = "/models/dunland/oathband_3.dae";
      mainTexPath = "/models/dunland/dunland_BG_alt.png";
      attachTexPath = "/models/dunland/dunland_bg.png";
      break;

    case "Huntmasters":
      dae_path = "/models/dunland/huntmasters.dae";
      mainTexPath = "/models/dunland/huntmasters.png";
      attachTexPath = "/models/dunland/huntmasters_attach.png";
      break;

    case "Huntmasters_2":
        dae_path = "/models/dunland/huntmasters_2.dae";
        mainTexPath = "/models/dunland/huntmasters.png";
        attachTexPath = "/models/dunland/huntmasters_attach.png";
    break;

    case "Grey_Company_1":
        dae_path = "/models/dunedain/grey_company.dae";
        mainTexPath = "/models/dunedain/ranger_elite.png";
        attachTexPath = "/models/dunedain/grey_company_diff.png";
    break;

    case "Grey_Company_2":
      dae_path = "/models/dunedain/grey_company_2.dae";
      mainTexPath = "/models/dunedain/ranger_elite.png";
      attachTexPath = "/models/dunedain/grey_company_diff.png";
    break;

    case "RK_Spearmen":
      dae_path = "/models/rk/rk_spearmen.dae";
      mainTexPath = "/models/dunedain/rk_da_banner.png";
      attachTexPath = "/models/dunedain/soldiers_attachments_diff.png";
    break;

    default:
      dae_path = "/models/orcs/AGO_BetterOrcs.dae";
      mainTexPath = "/models/orcs/ago_orcs.dds";
      attachTexPath = "/models/orcs/ago_orc_att.dds";
      break;
  }
}

// Change the background image
// To-Do: Replace this with a Skybox as demonstrated in: https://r105.threejsfundamentals.org/threejs/lessons/threejs-backgrounds.html
function setBackgroundImage(image) {
  let backgroundUrl = ""

  switch (image) {
    case "Black":
      backgroundUrl = "https://i.imgur.com/0TVRt1M.png"
      break;
    case "Mordor":
      backgroundUrl = "https://i.imgur.com/SIFCW0f.jpg"
      break;
    case "Dorwinion":
      backgroundUrl = "https://www.divide-and-conquer-ago.com/factions/dorwinion/images/Dorwinion_1.jpg"
      break;
    case "Dunland":
      backgroundUrl = "https://i.imgur.com/P4QsUbx.jpg"
      break;
    case "Minas Tirith":
      backgroundUrl = "https://i.imgur.com/R3HJpyb.png"
      break;
    case "Ered Luin":
      backgroundUrl = "https://i.imgur.com/B7ZRY4o.png"
      break;
    case "Umbar":
      backgroundUrl = "https://i.imgur.com/K7RqYge.png"
      break;
    case "Bree":
      backgroundUrl = "https://i.imgur.com/wFtaJE9.png"
      break;
    case "Fangorn":
      backgroundUrl = "https://i.imgur.com/O3Kir4f.png"
      break;
    default:
      backgroundUrl = "https://i.imgur.com/SIFCW0f.jpg"
      break;
  }

  textureLoader.load(backgroundUrl, function (texture) {
    texture.encoding = THREE.sRGBEncoding;
    // scene.background = texture;

    let skyboxMat = new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
    let skyboxGeo = new THREE.SphereGeometry( 50, 32, 16);
    let skybox = new THREE.Mesh(skyboxGeo, skyboxMat);
    scene.add(skybox);
  });
}

async function init() {
  await new Promise(r => setTimeout(r, 2000));
  let container;

  // Setup the DOM elements
  container = document.createElement('div');
  contentBody = document.getElementById('content-body');
  container.className = "canvas-container"
  contentBody.appendChild(container);

  // Setup our Dropdown Event Listeners
  const backgroundSelect = document.getElementById('background-select');
  const modelSelect = document.getElementById('model-select');

  backgroundSelect.addEventListener('change', (e) => {
    console.log(`e.target.value = ${e.target.value}`);
    setBackgroundImage(e.target.value);
  });

  modelSelect.addEventListener('change', (e) => {
    console.log(`e.target.value = ${e.target.value}`);
    loadModel(e.target.value, true)
  });

  // Create the camera and position it
  camera.position.set(0, 0.88, -2.25);

  // Add some subtle ambient lighting
  var ambiColor = "#0c0c0c";
  var ambientLight = new THREE.AmbientLight(ambiColor, 4);
  scene.add(ambientLight);

  // Create a DirectionalLight shining from infront
  spotLight.position.set(1.5, 1, -6);
  spotLight.target.position.set(0, 0, 0);
  spotLight.castShadow = true;

  //Set up shadow properties for the light
  spotLight.shadow.mapSize.width = 512;
  spotLight.shadow.mapSize.height = 512;
  spotLight.shadow.camera.near = 1;
  spotLight.shadow.camera.far = 500;

  // const spotLightHelper = new THREE.SpotLightHelper( spotLight );
  // scene.add( spotLightHelper );
  scene.add(spotLight);
  scene.add(camera);

  // Create our WebGL Renderer
  renderer.setPixelRatio(10);
  renderer.gammaFactor = 1.2;
  renderer.outputEncoding = THREE.sRGBEncoding;

  // Add the background
  setBackgroundImage(DEFAULT_BACKGROUND);

  container.appendChild(renderer.domElement);

  // Platform for the model
  // var geo = new THREE.PlaneBufferGeometry(2, 2);
  // const material = new THREE.MeshBasicMaterial( {color: "black", side: THREE.DoubleSide} );
  // var plane = new THREE.Mesh(geo, material);
  // scene.add(plane);
  // plane.rotateX( - Math.PI / 2);

  // Add some basic controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.zoomSpeed = 1;
  controls.autoRotate = true;
  controls.minDistance = 1.1;
  controls.maxDistance = 3;

  controls.target.set(0,0.8,0);

  loadModel(DEFAULT_MODEL, false)
};

async function animate() {
  requestAnimationFrame(animate);
  var delta = clock.getDelta();
  controls.update(delta);
  render();
}

async function render() {
  renderer.render(scene, camera);
}

async function loadModel(model, shouldReset) {
  setModelPaths(model);

  // If we call this function but there's already a model present, we can optionally reset
  // the scene and tidy things up
  if (shouldReset) {
    console.log('Removing model...');
    disposeNode(dae_model)
    scene.remove(dae_model);
  }

  // Loud our Collada model
  loader.load(dae_path, function (collada) {
    console.log('Loading model...');

    // Collada DAE Model variable
    dae_model = collada.scene;

    // Animations
    // let animations = collada.animations;
    // console.log(animations)

    // mixer = new THREE.AnimationMixer( dae_model ); // create global mixer
    // mixer.clipAction( animations[ 0 ] ).play(); // play first animation clip

    // Setup transparency for the Alpha layer on our textures
    collada.scene.traverse(function (child) {

      // Loud our two textures (main and attach)
      const mainTexture = textureLoader.load(mainTexPath);
      const attachTexture = textureLoader.load(attachTexPath);

      mainTexture.encoding = THREE.sRGBEncoding;
      attachTexture.encoding = THREE.sRGBEncoding;

      if (child.material && child.isMesh) {
        console.log('Alpha material detected, setting up transparency...');
        child.material.transparent = true;
        child.material.alphaTest = 0.5;
        // child.castShadow = true;
        // child.receiveShadow = true;
      }
    });

    scene.add(dae_model);
    controls.autoRotateSpeed = 0.3;
    controls.rotateSpeed = 0.5;
    controls.dampingFactor = 0.3;

    // Camera Helper
    // const helper = new THREE.CameraHelper( camera );
    // scene.add( helper );

    // Debug Print
    if (debug == true) {
      console.info(collada);
      // console.info(mainTexture);
      // console.info(attachTexture);
      console.info(dae_path);
      console.info(mainTexPath);
      console.info(attachTexPath);
      console.info(renderer);
      console.info(scene);
      console.info(camera);

      // Create a helper for the shadow camera (optional)
      // const helper = new THREE.CameraHelper(spotLight.shadow.camera);
      // scene.add(helper);
    }
    animate();
  });
}


// Dispose Nodes to free up memory
disposeNode = (node, recursive = false) => {
  if (!node) return;
  if (recursive && node.children)
    for (const child of node.children)
      disposeNode(child, recursive);
  node.geometry && node.geometry.dispose();
  if (!node.material) return;
  const materials = node.material.length === undefined ? [node.material] : node.material
  for (const material of materials) {
    for (const key in material) {
      const value = material[key];
      if (value && typeof value === 'object' && 'minFilter' in value)
        value.dispose();
    }
    material && material.dispose();
  }
}
// function onKeyDown(e) {
//   console.log(e);

//   if (e.code = 'Space') {
//     console.log('SPACE!');
//     animate();
//   }
// }


// function onWindowResize() {

//   // windowHalfX = window.innerWidth / 2;
//   // windowHalfY = window.innerHeight / 2;
//   // camera.aspect = window.innerWidth / window.innerHeight;
//   // camera.updateProjectionMatrix();
//   // renderer.setSize( window.innerWidth, window.innerHeight );

// }