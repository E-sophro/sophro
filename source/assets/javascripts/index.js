import 'jquery';
import 'popper.js';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';
import 'mapbox-gl/dist/mapbox-gl.css';

// components JS files
import { toogleNav } from './components/mobile_nav';
import { initMapbox } from './components/init_mapbox';


// Sidenav
const sidenavTrigger = document.getElementById("sidenav-trigger");
sidenavTrigger.addEventListener("click", toogleNav);

// Mapbox
initMapbox();
