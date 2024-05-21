const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 2000,  
    },    
    navigation:{ 
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    direction: 'vertical',
})
