const swiper = new Swiper ('.swiper', {
 slidesPerView: 1,
spaceBetween: 10,
pagination:{
    el:'.swiper-pagination',
    clickable: true
    },
    
    breakpoints: {
        1078:{
            slidesPerView:3,
            spaceBetween:50,
        }
    }
});