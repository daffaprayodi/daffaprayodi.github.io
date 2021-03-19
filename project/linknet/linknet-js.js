var swiper = new Swiper('#business-unit .swiper-container', {
    slidesPerView: 2.5,
    slidesPerColumn: 2,
    spaceBetween: 30,
    slidesPerColumnFill: 'row',
    breakpoints: {
        640: {
            slidesPerView: 2.5,
            slidesPerColumn: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            slidesPerColumn: 2,
            spaceBetween: 50,
        },
    }
});

var swiper = new Swiper('#home-event .swiper-container', {
    slidesPerView: 1.5,
    spaceBetween: 0,
    slidesPerColumnFill: 'row',
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    }
});

var swiper = new Swiper('#home-csr .swiper-container', {
    slidesPerView: 1.1,
    spaceBetween: 10,
    slidesPerColumnFill: 'row',
    breakpoints: {
        640: {
            slidesPerView: 1.1,
            slidesPerColumn: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});

var swiper = new Swiper('#home-recent .swiper-container', {
    slidesPerView: 1.1,
    spaceBetween: 10,
    slidesPerColumnFill: 'row',
    breakpoints: {
        640: {
            slidesPerView: 1.1,
            slidesPerColumn: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});