// slider js
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        items: 1,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        ],
    });
});

// Youtube link
$(document).ready(function() {
    $("#youtube").click(function() {
        open('https://youtu.be/4ge-6IwzrQU', '_blank');
        // Change Youtube Link here...
    });
});
