jQuery(function($) {

	$.fn.viewedByModule = function() {

		var that = this;
		var grid = that.find('.photo-grid');
		var cells = that.find('.grid-element');
		var rowHeight = cells.first().outerHeight();
		var cols = 4;
		var colWidth = cells.first().outerWidth();

		function absoluteGrid() {
			var gridHeight = grid.height();
			var offset = grid.offset().top;
			grid.height(gridHeight);
			cells.each(function(index) {
				$(this).css({
					"position": "absolute",
					"top": offset + Math.floor(index / cols) * rowHeight,
					"left": 10 + (index % cols) * colWidth
				});
			});
		}

		// init
		absoluteGrid();
		cells.click(function() {
			var $that = $(this);
			if ($that.hasClass('fullscreen')) {
				$that.removeClass('fullscreen');
				setTimeout(function() {
					$that.removeClass('above');
				}, 500);
			} else {
				$that.addClass('fullscreen above');
			}
		});

	};

})
