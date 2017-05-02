jQuery(function($) {
  $.fn.mobileFilters = function() {
    var that = this;

    $filters = that.find('.filter');

    function showFilters() {
      that.addClass('visible');
      that.find('.filter').first().addClass('open');
    }

    function hideFilters() {
      that.removeClass('visible');
    }

    $filters.find('.filter-name').click(function() {
      $(this).closest('.filter').toggleClass('open');
    });

    $('#mobile-filters-button').click(showFilters);
    that.find('.close-icon').click(hideFilters);
    that.find('#apply-filters').click(hideFilters);

    return this;
  }
});
