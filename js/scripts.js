// JavaScript Document
(function($){
  "use strict";
  jQuery(document).ready(function() {

    // A minimal slideshow for the #quote-box
    var currentIndex = 0,
    items = $('#quote-container .quote'),
    itemAmt = items.length;
    // $('#quote-frame .quote:first-child').addClass('active');

    function cycleItems() {
      var item = $('#quote-container .quote').eq(currentIndex);
      items.removeClass('active');
      item.addClass('active');
    }
    var autoSlide = setInterval(function() {
      currentIndex += 1;
      if (currentIndex > itemAmt - 1) {
        currentIndex = 0;
      }
      cycleItems();
    }, 12000);

  });
    
// Back to Top Animation
  var btt = $('#btt');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btt.addClass('show');
      } else {
        btt.removeClass('show');
      }
    });

    btt.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });


})(jQuery);