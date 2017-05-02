jQuery(document).ready(function($) {

  var BROWSER_HEIGHT = $(window).height();
  var DOCUMENT_HEIGHT = $(document).height();
  var HEADER_HEIGHT = $('#header').height();
  var TRANSITION_SPEED = 500;

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

	// Manual scroll on Home Page
	// $('.scrollOnDrag').kinetic();
	// $('.scrollOnDrag.startScroll').kinetic('start', { velocity: 1, cursor: 'grab' });

  // Body translate on submenu hover
  if (device.desktop.matches) {
    $('#nav li').hover(function() {
      $(this).addClass('active');
      $('body').addClass('submenu-hover');
    }, function() {
      $(this).removeClass('active');
      $('body').removeClass('submenu-hover');
    });
  }

  // Responsive Menu
  // @codekit-prepend  "bonjourparis/responsive-menu.js"
  if (device.tablet.matches) {
    $('#header').responsiveMenu(TRANSITION_SPEED);
  }

  // Home Slider
  // @codekit-prepend  "bonjourparis/home-slider.js"
  $('.slideshow-home-container').homeSlider(5000, 1000, device);

  // Hero image parallax
  // @codekit-prepend  "bonjourparis/bonjour-parallax.js"
  if (!device.mobile.matches) {
    $('.bonjour-parallax').bonjourParallax(BROWSER_HEIGHT);
  }

  // Mobile filters
  // @codekit-prepend  "bonjourparis/mobile-filters.js"
  if (device.mobile.matches && $('.filters').length) {
    $('#filters').mobileFilters();
  }

  // Panels
  // @codekit-prepend  "bonjourparis/side-panel.js"
  // Qick buy
  if ($('#quickBuyPanel').length) {
    $('#quickBuyPanel').sidePanel($('.shop-now'));
  }
  // Sizes
  if ($('#sizePanel').length) {
    $('#sizePanel').sidePanel($('.choose-size'));
  }
  // Added to cart
  if ($('#addToCartPanel').length) {
    $('#addToCartPanel').sidePanel($('.order-now'));
  }

  // Product page
  // tabs
  $('.tabs .tab-links .tab-link').click(function(e) {
    e.preventDefault();
    var index = $(this).index();
    $('.tabs .tab-links .tab-link').removeClass('current').eq(index).addClass('current');
    $('.tabs .tab-contents .tab-content').removeClass('current').eq(index).addClass('current');
  });
  // Photos
  // @codekit-prepend  "bonjourparis/product-photos.js"
  if ($('.product-photo').length) {
    $('.product-photo').productPhotos();
  }

  // Back to top button
  $.fn.backToTopButton = function() {
    var that = this;
    var footerHeight = $('.footer-container').length ? $('.footer-container').height() : 0;

    $(window).scroll(function() {
      var scrollPosition = $(window).scrollTop();
      if (scrollPosition > BROWSER_HEIGHT / 2) {
        that.addClass('visible');
      } else {
        that.removeClass('visible');
      }
      if (scrollPosition > DOCUMENT_HEIGHT - footerHeight - BROWSER_HEIGHT) {
        that.css({
          'position': 'absolute'
        });
      } else {
        that.css({
          'position': 'fixed'
        });
      }
    });

    this.click(function() {
      $("html, body").animate({ scrollTop: 0 }, TRANSITION_SPEED);
    });

    return this;
  };

  if (device.desktop.matches) {
    $('#backToTop').backToTopButton();
  }

  // Nav Customer Account

  $.fn.navCustomerAccount = function() {
    var that = this;

    function openNav() {
      $('.col-left-first').addClass('open-nav');
      that.css('display', 'none');
    }

    that.click(function() {
      openNav();
    });
  };

  if (device.mobileH.matches) {
    $('.button-nav-mobile').navCustomerAccount();
  }

  // History page
  // @codekit-prepend  "bonjourparis/history-module.js"
  if ($('.history-module').length) {
    $('.history-module').historyModule(BROWSER_HEIGHT, HEADER_HEIGHT, device);
  }

  // Viewed by
  // @codekit-prepend "bonjourparis/viewed-by.js"
  if ($('.viewed-by-module').length) {
    $('.viewed-by-module').viewedByModule(device);
  }

  // Template Star
  // @codekit-prepend "bonjourparis/template-star.js"
  // Photo slider
  if ($('.photos-slider').length) {
    $('.photos-slider').photosSlider();
  }


});
