import 'jquery';
import 'popper.js';
import 'bootstrap';

// import 'mapbox-gl/dist/mapbox-gl.css';
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


document.addEventListener( 'DOMContentLoaded', () => {
  const cookie = tarteaucitron.cookie.read();
  if (cookie === "!addtoanyshare=false") {
    const socialMediaDiv = document.querySelector('.social-media-sharing');
    socialMediaDiv.insertAdjacentHTML("afterbegin",
      `<p class="disclaimer">
        <i class="fas fa-exclamation-triangle"></i>
        L'activation des cookies est nécessaire afin
        de bénéficier des fonctionnalités relatives au partage sur les réseaux sociaux.
        <i class="fas fa-exclamation-triangle"></i>
        <span class="tooltiptext">AddToAny (share) est le plugin de partage sur les réseaux sociaux.
        <i></i>
        </span>
      </p>`);
  }
});
