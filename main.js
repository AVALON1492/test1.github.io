import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer( { canvas: world, antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio( window.devicePixelRatio * 1 );
renderer.setSize( window.innerWidth / 1, window.innerHeight / 1 );

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 100 );
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
const material = new THREE.MeshBasicMaterial({color: 0x6600ff});
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const controls = new OrbitControls(camera, renderer.domElement);

// animation

function animation() {

    requestAnimationFrame(animation);
	renderer.render( scene, camera );

}

animation();