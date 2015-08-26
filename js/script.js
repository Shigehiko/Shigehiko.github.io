
$(".thumb").hover(function () {
                $("img", this).stop().animate({opacity:0},"fast");
            },function () {
                $("img", this).stop().animate({opacity:1},"fast");
            });

$('.btn').mouseover(function(){
        
        $(this).css("background-color", "white");
        $(this).css("color", "black");
        }).mouseout(function(){
            $(this).css("background-color","transparent");
            
            $(this).css("color", "white");
        });




$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});


$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});




