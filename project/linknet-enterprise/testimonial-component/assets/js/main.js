


// #!

var swiper = new Swiper(".swiper-keunggulan", {
    slidesPerView: 1.6,
    spaceBetween: 12,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
      },
    freeMode: true,
    breakpoints: {
        499: {
            slidesPerView: 1.6,
            spaceBetween: 16,
            freeMode: true,
        },
        750:{
            slidesPerView: 2.25,
        },
        999: {
            slidesPerView: 5,
            spaceBetween: 20,
            freeMode: false,
        }
    }
});


var swiper = new Swiper(".swiper-listKeunggulan", {
    slidesPerView: 1.2,
    grid: {
        rows: 3,
        fill: "row",
    },
    spaceBetween: 12,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
      },
    freeMode: true,
    breakpoints: {
        499: {
            grid: {
                rows: 3,
            },
            slidesPerView: 1.2,
            spaceBetween: 16,
            freeMode: true,
        },
        750:{
            grid: {
                rows: 3,
            },
            slidesPerView: 2.25,
        },
        999: {
            grid: {
                rows: 3,
            },
            slidesPerView: 2,
            spaceBetween: 20,
            freeMode: false,
        }
    }
});

// SwiperSlider OnPage Menu
var swiper = new Swiper(".swiper-onpage-menu", {
    slidesPerView: "auto",
    spaceBetween: 2,
    breakpoints: {
        499: {
            spaceBetween: 2
        },
        999: {
            spaceBetween: 12
        }
    }
});

// industry
var swiper = new Swiper(".swiper-support", {
    slidesPerView: 'auto',
    spaceBetween: 20,
     navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        499: {
            spaceBetween: 20
        },
        999: {
            spaceBetween: 35
        }
    }
});



$.fn.isOnScreen = function () {
    var win = $(window);
    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

$(window).scroll(function () {
    if ($('.onpage-menu').isOnScreen() == true) {
        $(".ln-onpage-menu").appendTo(".onpage-menu");        
    }
    else{
        $(".ln-onpage-menu").appendTo(".sticky-header");
        $(".ln-onpage-menu").appendTo("body > nav > div.nav-business.nav-business-2 > div > div");
    }
});




// Switch Lang
// $(".dropdown-lang .dropdown-menu button").click(function(){
//     $(".dropdown-lang .dropdown-toggle").html('<span class="material-symbols-outlined">translate</span> '+$(this).val()+' <span class="material-symbols-outlined">expand_more</span>');
//     $('.dropdown-lang .dropdown-menu button').removeClass('active');
//     $(this).addClass('active');

// });

function scrollTo(section_id){
    $('html, body').animate({
        scrollTop: $(section_id).offset().top -172
    }, 500);
    // alert('daffa');
    location.hash.replace('#', '');
}






  
