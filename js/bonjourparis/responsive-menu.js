jQuery(function($) {

  $.fn.responsiveMenu = function(TRANSITION_SPEED) {
    var that = this;
    var LEVEL = 0;

    function openMenu() {
      LEVEL = 1;
      $('#open-menu .label').text('Menu');
      that.find('#open-menu').addClass('open');
      that.find('#header-nav').addClass('open');
    }

    function openSubNav(index) {
      LEVEL = 2;
      var subnav = that.find('.subnav').eq(index);
      if (subnav.length) {
        var subNavTitle = subnav.closest('.level0.parent').find('a.level-top span').text();
        $('#open-menu .label').text(subNavTitle);
        subnav.addClass('open');
        that.find('#open-menu').addClass('open deep');
        that.find('#header-nav').addClass('open subnav-open');
      }
    }

    function closeMenu() {
      LEVEL = 0;
      that.find('#open-menu').removeClass('open deep');
      that.find('#header-nav').removeClass('open subnav-open');
      setTimeout(function() {
        that.find('.subnav.open').removeClass('open');
      }, TRANSITION_SPEED);
    }

    function closeSubNav() {
      LEVEL = 1;
      $('#open-menu .label').text('Menu');
      that.find('#open-menu').removeClass('deep');
      that.find('.subnav.open').removeClass('open');
      that.find('#header-nav').removeClass('subnav-open');
    }

    function overlayClick() {
      switch (LEVEL) {
        case 0:
        break;
        case 1:
        closeMenu();
        break;
        case 2:
        closeSubNav();
        break;
      }
    }

    function toggleSearch(evt) {
      evt.preventDefault();
      $('#header-search').toggleClass('visible');
    }

    // Toggle Search
    that.find('#mobile-search').click(toggleSearch);
    that.find('#header-search .mobile-close').click(toggleSearch);

    // Click on burger/cross/arrow
    that.find('#open-menu .burger-icon').click(openMenu);
    that.find('#open-menu .close-icon').click(closeMenu);
    that.find('#open-menu .arrow-icon').click(closeSubNav);

    // Click on Overlay
    that.find('.overlay.level0').click(overlayClick);

    // Open submenu
    that.find('#nav .level0.parent').click(function() {
      var index = $(this).index();
      openSubNav(index);
    });

    // Home menu
    if ($('#homeMobileMenu').length) {
      $('#homeMobileMenu .home-mobile-menu-anchor').click(function(e) {
        e.preventDefault();
        var index = $(this).index();
        openSubNav(index);
      });
    }

    return this;
  };

});