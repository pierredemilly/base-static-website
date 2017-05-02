jQuery(function($) {

  $.fn.productPhotos = function() {

    var that = this;
    var curr = 0;

    function activate(index) {
      that.find('.selectors .selector').removeClass('current').eq(index).addClass('current');
      that.find('.photos img').removeClass('current').eq(index).addClass('current');
      curr = index;
    }

    function next() {
      if (curr >= that.find('.photos img').length - 1) {
        activate(0);
      } else {
        activate(curr + 1);
      }
    }

    function previous() {
      if (curr == 0) {
        activate($('.photos img').length - 1);
      } else {
        activate(curr - 1);
      }
    }

    that.find('.selectors a.selector').click(function(e) {
      e.preventDefault();
      activate($(this).index());
    });

    if (device.tablet.matches) {
      that.on('swipeleft', next);
      that.on('swiperight', previous);
    }

    return this;
  };

})
