function getIEVersion() {
  const sAgent = window.navigator.userAgent;
  const idx = sAgent.indexOf("MSIE");
  // If IE, return version number
  if (idx > 0) {
    return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", idx)));

    // If IE 11 then look for Updated user agent string.
  } else if (!!navigator.userAgent.match(/Trident\/7\./)) {
    return 11;
  } else {
    // It is not IE
    return 0;
  }
}

if (getIEVersion() > 0) {
  alert(`Vous utilisez actuellement Internet Explorer ${getIEVersion()}.\nCe site n'est pas optimal sur Internet Explorer.\n Nous supportons générallement les 2 dernières versions des navigateurs comme: Chrome, Firefox, Safari et Edge.\nAfin d'avoir une expérience optimale, nous vous conseillons de mettre à jour votre navigateur.`);
}
