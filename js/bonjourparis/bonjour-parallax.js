jQuery(function($) {
  $.fn.bonjourParallax = function(BROWSER_HEIGHT) {
    var that = this;

    $(window).scroll(function() {
      var scrollPosition = $(window).scrollTop();
      var offset = - scrollPosition / 2;
      var opacity = 1 - (scrollPosition / BROWSER_HEIGHT) * .6;
      that.css('transform', 'translateY(' + offset + 'px)');
      that.css('opacity', opacity);
    });

    return this;
  };
});
