$(document).ready(function(){

    var owl1 = $(".wrapper .body-gallery .owl-area-1");
    var prevBtn= '<i class="fas fa-chevron-left"></i>';
    var nextBtn = '<i class="fas fa-chevron-right"></i>';
    owl1.owlCarousel({
        navText:[prevBtn,nextBtn],
        items:1,
        loop:true,
        autoplay:true,
        dots:false,
        margin:0,
        nav:false,
        autoplaySpeed: 1500,
        responsive:{
            0:{
                nav:true,
            },
            991:{
                nav:false
            }

        }

        

    })
})