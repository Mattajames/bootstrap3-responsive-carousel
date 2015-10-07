$(document).ready( function() {
    $('.carousel').carousel();
    $('.carousel').on('slide.bs.carousel', function(e) {
        var from = $('#myCarousel .carousel-buttons .col-xs-3').index();
        var next = $(e.relatedTarget);
        var to =  next.index();

      	$('#myCarousel .carousel-buttons .col-xs-3').removeClass('active').eq(to).addClass('active');
    });
});

//checks slide.bs.carousel is activating
//$('.carousel').bind('slide.bs.carousel', function (e) {
//    console.log('slide event!');
//});

//$('#myCarousel .carousel-buttons').addClass('active')

