// init Isotope
var $grid = $('.items').isotope({
    // options
    });
    // filter items on button click
    $('.menu-portfolio ul').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    });

    $('.menu-portfolio ul').on( 'click', 'li', function() {
        $(this).siblings(".active").removeClass('active');
        $(this).addClass("active");
    })