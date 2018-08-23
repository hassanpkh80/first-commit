$(document).ready(function () {

    // <--  header  -->

    // <--  nav  -->

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
    });
    
    // Or with jQuery
    
    $(document).ready(function(){
        $('.sidenav').sidenav();
    });

    // <--  /nav  -->

    // <--  /header  -->


    // <--  main  -->

    // <--  category-box  -->

    $(".owl-carousel").owlCarousel({
        rtl: true,
        margin: 25,
        autoWidth: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            400: {
                items: 2,
                nav: true,
            },
            600: {
                items: 3,
                nav: false
            },
            900: {
                items: 4,
                nav: false
            },
            1200: {
                items: 5,
                nav: false
            }
        }
    });

    // <--  /category-box  -->

$(window).on('resize',function(e){

    if($(window).width() < 920){
        changeNewHomez();
    }else{
        $(".new-homes").owlCarousel('destroy')
    }
})
if($(window).width() < 920){
    changeNewHomez();
}else{
    $(".new-homes").owlCarousel('destroy')
}
function changeNewHomez(){
    $(".new-homes").owlCarousel({
        rtl: true,
        margin: 25,
        autoWidth: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            400: {
                items: 2,
                nav: false,
            },
            600:{
                items: 3,

            }
        }
    });
}

// <--  /main  -->

});    