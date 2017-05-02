jQuery(function($) {

	$.fn.photosSlider = function() {

		var that = this;

		var photos = that.find('.photo');
		var dots = that.find('.dot');
		var texts = that.find('.text');
		var MAX_INDEX = photos.length - 1;
		var CURRENT_INDEX;

		function activatePhoto(index, to_right) {
			CURRENT_INDEX = index;
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

		}

		function next() {
			if (CURRENT_INDEX + 1 <= MAX_INDEX) {
				activatePhoto(CURRENT_INDEX + 1, false);
			}
		}

		function previous() {
			if (CURRENT_INDEX - 1 >= 0) {
				activatePhoto(CURRENT_INDEX - 1, true);
			}
		}

		// Events
		dots.click(function(evt) {
			var new_index = $(this).index();
			if (new_index > CURRENT_INDEX) {
				activatePhoto(new_index, false);
			} else {
				activatePhoto(new_index, true)
			}
		});
		that.on('swipeleft', next);
		that.on('swiperight', previous);

		activatePhoto(0);

	};

});
