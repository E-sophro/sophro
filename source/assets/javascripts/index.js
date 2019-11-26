import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@babel/polyfill';

// components JS files
import { initMapbox } from './components/init_mapbox';
import { toogleNav } from './components/mobile_nav';
import { handleFirstTab } from './components/keyboard_focus';
import { readingTime } from './components/reading_time';
import './components/form_validation';
import './components/back_to_top';
import './components/IE_alert';

// outline for keyboard user on focus
window.addEventListener('keydown', handleFirstTab);

// Sidenav
const sidenavTrigger = document.getElementById("sidenav-trigger");
sidenavTrigger.addEventListener("click", toogleNav);

// Mapbox
initMapbox();

// reading time calculator for blog posts
readingTime();
