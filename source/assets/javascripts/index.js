import 'jquery';
import 'popper.js';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';

// components JS files
import { toogleNav } from './components/mobile_nav';


// Sidenav
const sidenavTrigger = document.getElementById("sidenav-trigger");
sidenavTrigger.addEventListener("click", toogleNav);
