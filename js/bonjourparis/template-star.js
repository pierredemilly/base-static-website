jQuery(function($) {

	$.fn.photosSlider = function() {

		var that = this;

		var photos = that.find('.photo');
		var dots = that.find('.dot');
		var texts = that.find('.text');
		var CURRENT_INDEX;

		function activatePhoto(index, to_right) {
			if (to_right) {
				photos.eq(index).addClass('left');
				setTimeout(function() {
					photos.filter('.active').removeClass('active');
					photos.eq(index).addClass('active');
				}, 10);
				setTimeout(function() {
					photos.eq(index).removeClass('left');
				}, 500);
			} else {
				photos.filter('.active').removeClass('active').addClass('left');
				photos.eq(index).addClass('active');
			}
			dots.removeClass('active').eq(index).addClass('active');
			texts.removeClass('active').eq(index).addClass('active');

			CURRENT_INDEX = index;
		}

		dots.click(function(evt) {
			var new_index = $(this).index();
			if (new_index > CURRENT_INDEX) {
				activatePhoto(new_index, false);
			} else {
				activatePhoto(new_index, true)
			}
		});

		activatePhoto(0);

	};

});
