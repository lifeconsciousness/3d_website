const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector(`#background`)
});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ffff, wireframe: true } );
const cube = new THREE.Mesh( geometry, material );
//scene.add( cube );

const hedronGeometry = new THREE.IcosahedronGeometry(4);
const hedronMaterial = new THREE.MeshBasicMaterial( { color: 0x00ffff, wireframe: true } );
const hedron = new THREE.Mesh( hedronGeometry, hedronMaterial );
scene.add( hedron );

camera.position.z = 3;

function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.013;

    hedron.rotation.x += 0.0007;
    hedron.rotation.y += 0.0007;

    // hedron.rotation.x += 0.01; //this speed will make you dizzy
    // hedron.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();