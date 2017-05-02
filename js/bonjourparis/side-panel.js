jQuery(function($) {
  $.fn.sidePanel = function(openers) {
    var that = this;

    function openPanel(e) {
      e.preventDefault();
      that.addClass('active');
      // setTimeout(closePanel, 5000);
    }

    function closePanel(e) {
      if (e) {
        e.preventDefault();
      }
      that.removeClass('active');
    }
    if (openers) { openers.click(openPanel); }

    that.find('.overlay').click(closePanel);
    that.find('.close-panel').click(closePanel);

    return this;
  };
});
