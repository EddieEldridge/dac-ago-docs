var container, controls, camera, scene, renderer;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var clock = new THREE.Clock();

init();

async function init() {
  await new Promise(r => setTimeout(r, 2000));

  // Setup the DOM elements
  container = document.createElement('div');
  contentBody = document.getElementById('content-body');
  container.className = "canvas-container"
  contentBody.appendChild(container);

  // Dropdown Event Listener
  const activities = document.getElementById('background-select');

  activities.addEventListener('change', (e) => {
    console.log(`e.target.value = ${e.target.value}`);
    console.log(`activities.options[activities.selectedIndex].value = ${activities.options[activities.selectedIndex].value}`);
    setBackgroundImage(e.target.value);
  });

  // Create the camera and position it
  camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.01, 1000000);
  camera.position.set(1, 1, -1);

  // Create the scene and add some ambient lights
  scene = new THREE.Scene();
  // var ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
  // var pointLight = new THREE.PointLight( 0xffffff, 0.6 );

  const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(1, 1, 0).normalize();

  scene.add(directionalLight);
  camera.add(ambientLight);
  camera.add(directionalLight);
  scene.add(camera);

  // Create our WebGL Renderer
  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setPixelRatio(10);
  // renderer.setClearColor(0x000000, 0);
  // renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.setClearColor("rgb(34, 34, 34)");
  renderer.gammaFactor = 1.5;
  renderer.outputEncoding = THREE.sRGBEncoding;
  // Add the background
  const loader = new THREE.TextureLoader();
  setBackgroundImage();

  // loader.load('https://i.imgur.com/SIFCW0f.jpg', function (texture) {
  //   texture.encoding = THREE.sRGBEncoding;
  //   scene.background = texture;
  // });


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
    default:
      backgroundUrl = "https://i.imgur.com/SIFCW0f.jpg"
      break;
  }

  loader.load(backgroundUrl, function (texture) {
    texture.encoding = THREE.sRGBEncoding;
    scene.background = texture;
  });
}

  container.appendChild(renderer.domElement);

  // Add some basic controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);

  // Setup our resize event listener
  window.addEventListener('resize', onWindowResize, false);
  window.addEventListener("keydown", onKeyDown);

  // Choose files handler
  document.querySelector('.inputfile').addEventListener('change', function (e) {
    var files = e.currentTarget.files;
    var dae_path;

    var extraFiles = {}, file;
    for (var i = 0; i < files.length; i++) {
      file = files[i];
      extraFiles[file.name] = file;

      //Filename ends in .dae/.DAE
      if (files[i].name.match(/\w*.dae\b/i)) {
        dae_path = files[i].name;
      }
    }

    const manager = new THREE.LoadingManager();
    manager.setURLModifier(function (url, path) {
      url = url.split('/');
      url = url[url.length - 1];

      if (extraFiles[url] !== undefined) {

        var blobURL = URL.createObjectURL(extraFiles[url]);
        console.log(blobURL); //Blob location created from files selected from file input
        return blobURL;

      }
      return url;
    });

    // Loud our Collada model
    var loader = new THREE.ColladaLoader(manager);
    loader.load(dae_path, function (collada) {

      console.info(collada);
      var dae = collada.scene;
      mesh = scene.children[0].children[0].clone();

      console.log('Mesh')
      console.log(mesh)
      // console.log(animations.scene)

      collada.scene.traverse(function (child) {
        if (child.material) {
          // child.material.opacity = 0.9;
          child.material.transparent = true;
          // child.material.premultipliedAlpha = true;
          child.material.alphaTest = 0.5;
        }
      });

      scene.add(dae);
      // scene.background = null;


      // console.log(collada);
      // var dae = collada.scene;
      // scene.add(dae);

    });
  });

  animate();

}

function onKeyDown(e) {
  console.log(e);

  if (e.code = 'Space') {
    console.log('SPACE!');
    animate();
  }
}

function onWindowResize() {

  // windowHalfX = window.innerWidth / 2;
  // windowHalfY = window.innerHeight / 2;
  // camera.aspect = window.innerWidth / window.innerHeight;
  // camera.updateProjectionMatrix();
  // renderer.setSize( window.innerWidth, window.innerHeight );

}

async function animate() {
  requestAnimationFrame(animate);
  var delta = clock.getDelta();
  controls.update(delta);
  render();

}

async function render() {
  renderer.render(scene, camera);
}

