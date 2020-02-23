const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Primer Cubo
var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshStandardMaterial({color: 0xff0051});
var cube = new THREE.Mesh (geometry, material);
// Luces
var ambientLight = new THREE.AmbientLight (0xffffff, 0.5);
var pointLight = new THREE.PointLight (0x101098, 1);
pointLight.position.set(25,50,25);
// Segundo cubo
var secondGeometry = new THREE.BoxGeometry(3,3,3);
var secondMaterial = new THREE.MeshBasicMaterial ({
	color: "#dadada",
	wireframe: true,
	transparent: true
});
var wireframeCube = new THREE.Mesh (secondGeometry, secondMaterial);

//Agregamos la escena y la camera a los objetos de renderizar.
renderer.render(scene, camera);

// Agregamos todos los elementos a la escena.
scene.add(cube);
scene.add(ambientLight);
scene.add(pointLight);
scene.add(wireframeCube);

//Movemos la camara
camera.position.z = 10;

// Funcion que se encarga de animar las figuras
function animate () {
	requestAnimationFrame(animate);
	cube.rotation.x += 0.04;
	cube.rotation.y += 0.04;
	wireframeCube.rotation.x -= 0.02;
	wireframeCube.rotation.y += 0.02;
	renderer.render(scene, camera);

}
animate();
