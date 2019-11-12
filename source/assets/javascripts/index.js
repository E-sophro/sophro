import 'jquery';
import 'popper.js';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';
import 'mapbox-gl/dist/mapbox-gl.css';

// components JS files
import { initMapbox } from './components/init_mapbox';
import { toogleNav } from './components/mobile_nav';
import './components/form_validation';


// Sidenav
const sidenavTrigger = document.getElementById("sidenav-trigger");
sidenavTrigger.addEventListener("click", toogleNav);

// Mapbox
initMapbox();
