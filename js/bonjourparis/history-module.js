jQuery(function($) {
	$.fn.historyModule = function(BROWSER_HEIGHT, HEADER_HEIGHT, device) {
		var that = this;
		var slides = that.find('.slide');
		var dots = that.find('.dot');
		var scroller = that.find('.scroller');
		var ACTIVE_INDEX;
		var DOTS_WIDTH = 30;
		var SLIDES_NUMBER = dots.length;

		function positionElements() {
			var moduleHeight = BROWSER_HEIGHT - HEADER_HEIGHT;
			that.height(moduleHeight);
      if (device.mobile.matches) {
       that.find('.dots').css('marginTop', .45 * moduleHeight);
     } else {
      that.find('.dots').css('marginTop', moduleHeight - 60);
    }
  }

  function activateSlide(index) {
   slides.filter('.active').removeClass('active');
   slides.eq(index).addClass('active');

   dots.filter('.active').removeClass('active');
   dots.eq(index).addClass('active');

   ACTIVE_INDEX = index;
 }

 function scrollEvent(evt) {
   var scrollPosition = scroller.scrollLeft();

   var index = Math.min(Math.floor(scrollPosition / DOTS_WIDTH), SLIDES_NUMBER - 1);
   activateSlide(index);
 }

 function scrollToIndex(index, speed) {
   var scrollPosition = index * DOTS_WIDTH;
   scroller.animate({
    scrollLeft: scrollPosition
  }, speed);
 }

 function next() {
   scrollToIndex(Math.min(ACTIVE_INDEX + 1, SLIDES_NUMBER - 1), 300);
 }

 function previous() {
   scrollToIndex(Math.max(ACTIVE_INDEX - 1, 0), 300);
 }

    // events
    scroller.scroll(scrollEvent);
    dots.click(function() {
    	scrollToIndex($(this).index(), 600);
    });
    that.find('.arrow.left').click(previous);
    that.find('.arrow.right').click(next);
    $(document).keydown(function(evt) {
    	if (evt.keyCode == '37') {
    		previous();
    	} else if (evt.keyCode == '39') {
    		next();
    	}
    });
    $(window).resize(function() {
      BROWSER_HEIGHT = $(window).height();
      DOCUMENT_HEIGHT = $(document).height();
      positionElements();
    });

    // init
    activateSlide(0);
    positionElements();
  };
})
