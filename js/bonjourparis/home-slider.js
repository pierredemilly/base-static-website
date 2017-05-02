jQuery(function($) {

  $.fn.homeSlider = function(delay, speed, device) {
    var that = this;
    var $slides = $(this).find('.slideshow li');
    var nbOfSlides = $slides.length;
    var current = 0;
    var interval = null;

    // change HTML
    $slides.each(function(index) {
      if (device.mobile.matches) {
        var imgUrl = $(this).find('img.mobile').attr('src');
      } else {
        var imgUrl = $(this).find('img.desktop').attr('src');
      }
      $(this).find('img').remove();
      var container = $('<div></div>').addClass('image-container').css('background-image', 'url(' + imgUrl + ')');
      $(this).find('h3').appendTo(container);
      $(this).find('.right').appendTo(container);
      $(this).append(container);
      var dot = $('<span class="pager-box"></span>');
      dot.click(function() {
        if (index != current) {
          current = index;
          activate(current);
        }
      });
      that.find('.slideshow-pager').append(dot);
    });
    // Right arrow
    $right = $('<div class="right arrow"></a>');
    $right.click(next);
    that.prepend($right);
    // Left arrow
    $left = $('<div class="left arrow"></a>');
    $left.click(previous);
    that.prepend($left);

    function activate(index, reverse) {
      that.find('.pager-box').removeClass('active').eq(index).addClass('active');
      var $previousSlide = $slides.filter('.active');
      var $newSlide = $slides.eq(index);
      if (reverse) {
        that.find('.slideshow').addClass('reverse');
      }
      $previousSlide.removeClass('active').addClass('deactivating');
      $newSlide.addClass('activating');
      setTimeout(function() {
        $newSlide.addClass('active').removeClass('activating');
        $previousSlide.removeClass('deactivating');
        if (reverse) {
          that.find('.slideshow').removeClass('reverse');
        }
      }, speed);
      loopSlider();
    }

    function instantActivate(index) {
      that.find('.pager-box').removeClass('active').eq(index).addClass('active');
      $slides.removeClass('active').eq(index).addClass('active');
      loopSlider();
    }

    function next() {
      if (current + 1 === nbOfSlides) {
        current = 0;
      } else {
        current++;
      }
      activate(current, false);
    }

    function previous() {
      if (current === 0) {
        current = nbOfSlides - 1;
      } else {
        current--;
      }
      activate(current, true);
    }

    function loopSlider() {
      clearInterval(interval);
      interval = setInterval(next, delay + speed);
    }

    // Init
    instantActivate(current);
    if (device.tablet.matches) {
      that.on('swipeleft', next);
      that.on('swiperight', previous);
    }

    return this;
  };

});