let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let controls;

const ddsLoader = new THREE.DDSLoader();
const clock = new THREE.Clock();
const manager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader();
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ alpha: true });
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 1000000);
const loader = new THREE.ColladaLoader(manager);
const debug = true;

let dae;
let dae_path = "";
let mainDDSPath = "";
let attachDDSPath = ""

init();

// Set new dae, main texture and attachement texture paths
function setModelPaths(model) {
  switch (model) {
    case "Orc Host":
      dae_path = "/models/orcs/AGO_BetterOrcs.dae";
      mainDDSPath = "/models/orcs/ago_orcs.dds";
      attachDDSPath = "/models/orcs/ago_orc_att.dds";
      break;

    case "Ruffians":
      dae_path = "/models/rebels/AGO_BetterOrcs.dae";
      mainDDSPath = "test";
      attachDDSPath = "test";

      break;
    case "Wulfingir":
      dae_path = "/models/rebels/AGO_BetterOrcs.dae";
      mainDDSPath = "/models/rebels/ago_orcs.dds";
      attachDDSPath = "/models/rebels/ago_orc_att.dds";
      break;

    case "Armsmen":
      dae_path = "/models/rebels/AGO_BetterOrcs.dae";
      mainDDSPath = "/models/rebels/ago_orcs.dds";
      attachDDSPath = "/models/rebels/ago_orc_att.dds";
      break;

    default:
      dae_path = "/models/orcs/AGO_BetterOrcs.dae";
      mainDDSPath = "/models/orcs/ago_orcs.dds";
      attachDDSPath = "/models/orcs/ago_orc_att.dds";
      break;
  }
}

// Change the background image
function setBackgroundImage(image) {
  let backgroundUrl = ""

  switch (image) {
    case "Mordor":
      backgroundUrl = "https://i.imgur.com/SIFCW0f.jpg"
      break;
    case "Dorwinion":
      backgroundUrl = "https://i.imgur.com/B9KLpUw.jpg"
      break;
    case "Dunland":
      backgroundUrl = "https://i.imgur.com/P4QsUbx.jpg"
      break;
    case "Minas Tirith":
      backgroundUrl = "https://i.imgur.com/R3HJpyb.png"
      break;
    default:
      backgroundUrl = "https://i.imgur.com/SIFCW0f.jpg"
      break;
  }

  textureLoader.load(backgroundUrl, function (texture) {
    texture.encoding = THREE.sRGBEncoding;
    scene.background = texture;
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
  camera.position.set(-0.00632805627663537, 1.5, -2);

  // Add some ambient lights
  const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
  scene.add(ambientLight);
  camera.add(ambientLight);
  scene.add(camera);

  // Create our WebGL Renderer
  renderer.setPixelRatio(10);
  renderer.gammaFactor = 1.5;
  renderer.outputEncoding = THREE.sRGBEncoding;

  // Add the background
  setBackgroundImage("Mordor");

  container.appendChild(renderer.domElement);

  // Add some basic controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);

  loadModel("Orcs", false)
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
    disposeNode(dae)
    scene.remove(dae);
  }

  // Loud our Collada model
  loader.load(dae_path, function (collada) {
    console.log('Loading model...');

    dae = collada.scene;

    // Setup transparency for the Alpha layer on our textures
    mesh = scene.children[0].children[0].clone();

    collada.scene.traverse(function (child) {
      if (child.material && child.isMesh) {
        child.material.transparent = true;
        child.material.alphaTest = 0.5;
      }
    });

    // Loud our two textures (main and attach)
    const mainTexture = ddsLoader.load(mainDDSPath);
    const attachTexture = ddsLoader.load(attachDDSPath);

    scene.add(dae);

    // Debug Print
    if (debug == true) {
      console.info(collada);
      console.info(mainTexture);
      console.info(attachTexture);
      console.info(dae_path);
      console.info(mainDDSPath);
      console.info(attachDDSPath);
      console.info(renderer);
      console.info(scene);
      console.info(camera);
    }
    animate();
  });
}


// Dispose Nodes to free up memory
function disposeNode(dae) {
  dae.traverse(function (node) {
    if (node instanceof THREE.Mesh) {
      if (node.geometry) {
        node.geometry.dispose();
      }
      if (node.material) {
        var materialArray;
        if (node.material) {
          materialArray = node.material.materials;
        }
        else if (node.material instanceof Array) {
          materialArray = node.material;
        }
        if (materialArray) {
          materialArray.forEach(function (mtrl, idx) {
            if (mtrl.map) mtrl.map.dispose();
            if (mtrl.lightMap) mtrl.lightMap.dispose();
            if (mtrl.bumpMap) mtrl.bumpMap.dispose();
            if (mtrl.normalMap) mtrl.normalMap.dispose();
            if (mtrl.specularMap) mtrl.specularMap.dispose();
            if (mtrl.envMap) mtrl.envMap.dispose();
            mtrl.dispose();
          });
        }
        else {
          if (node.material.map) node.material.map.dispose();
          if (node.material.lightMap) node.material.lightMap.dispose();
          if (node.material.bumpMap) node.material.bumpMap.dispose();
          if (node.material.normalMap) node.material.normalMap.dispose();
          if (node.material.specularMap) node.material.specularMap.dispose();
          if (node.material.envMap) node.material.envMap.dispose();
          node.material.dispose();
        }
      }
    }
  });
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