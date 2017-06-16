jQuery(document).ready(function($) {

  var BROWSER_HEIGHT = $(window).height();
  var DOCUMENT_HEIGHT = $(document).height();
  var HEADER_HEIGHT = $('#header').height();
  var TRANSITION_SPEED = 500;

  $(window).resize(function() {
    BROWSER_HEIGHT = $(window).height();
    DOCUMENT_HEIGHT = $(document).height();
    HEADER_HEIGHT = $('#header').height();
  });

  // Media queries
  function detectDevice(device) {
    device.mobile = window.matchMedia( "(max-width: 550px)" );
    device.mobileH = window.matchMedia( "(max-width: 700px)" );
    device.tablet = window.matchMedia( "(max-width: 1000px)" );
    device.desktop = window.matchMedia( "(min-width: 1001px)" );
    device.largeDesktop = window.matchMedia( "(min-width: 1600px)" );
  }

  var device = {};
  detectDevice(device);

  // Module import
  // @codekit-prepend  "modules/example.js"
  if (device.tablet.matches) {
    $('body').example(TRANSITION_SPEED);
  }


});
