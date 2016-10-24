$(document).ready(function() {
    $('.expand').click(function(e) {
        e.preventDefault();
        $('section').slideUp('normal');
        if ($(this).next().is(':hidden') === true) {
            $(this).addClass('on');
            $(this).next().slideDown('normal');
        }
    });
    $('section').hide();
});


$(function() {
  
  var photoGallery = function($photoGalleryElement) {
    var $photoGallery = $photoGalleryElement,
        $photoLinks = $photoGallery.find('a[href*="#photo"]'),
        $photos = $photoGallery.find('img[id*="photo"]'),
        activeClass = 'active';
    
    function init() {
      $photoGallery.addClass('enabled');
         
      $photoGallery.on({
        click: function(e) {
          e.preventDefault();
          var $photoTarget = $(this).attr('href');
          $photos.removeClass(activeClass);
          $photoGallery.find($photoTarget).addClass(activeClass);
        }
      }, 'a[href*="#photo"]')
    }
    
    init();
  }
  
  $.each($('.photo-gallery'), function() {
    // Try commenting out this line below to see no-js functionality!
    var gallery = new photoGallery( $(this) );
  });
  
});