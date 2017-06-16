jQuery(function($) {

	$.fn.viewedByModule = function(device) {

		var that = this;
		var grid = that.find('.photo-grid');
		var cells = that.find('.grid-element');
		var rowHeight = cells.first().outerHeight();
		if (device.mobile.matches) {
			var cols = 2;
		} else {
			var cols = 4;
		}
		var colWidth = cells.first().outerWidth();
		var $overlay = that.find('.photo-overlay');

		// init
		cells.click(function() {
			var $that = $(this);
			var src = $that.find('img').attr('src');
			$that.addClass('fullscreen');
			$overlay.find('.photo').attr('src', src);
			$overlay.addClass('active');
		});
		$overlay.click(function() {
			$(this).removeClass('active');
			cells.filter('.fullscreen').removeClass('fullscreen');
		});

	};

})
