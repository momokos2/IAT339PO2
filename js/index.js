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