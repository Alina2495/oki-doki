var swiper = new Swiper('.promotions-swiper', {
    slidesPerView: 1,
    speed: 300,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 1
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});

var swiper = new Swiper('.swiper-comments', {
    slidesPerView: 1,
    speed: 300,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },
});



// show desktop menu while hover to menu link 
$(function() {
    $(".menu-hover-link").mouseenter(function() {
        $('.menu-hover').removeClass("d-none");
    });
    $(".menu-hover-link").mouseleave(function() {
        $('.menu-hover').addClass("d-none");
    });
});

$((function() { $(".hover-cart").mouseenter((function() { $(".hidden-cart").removeClass("d-none") })), $(".hover-cart").mouseleave((function() { $(".hidden-cart").addClass("d-none") })) }));

// show main mobile menu
$('.mobile-menu-show-svg').on('click', () => {
    $('.mobile-menu-show-svg').addClass('d-none');
    $('.mobile-menu-close-svg').removeClass('d-none');
    $('.mobile-menu').removeClass('d-none');
})

// hide main mobile menu
$('.mobile-menu-close-svg').on('click', () => {
    $('.mobile-menu-show-svg').removeClass('d-none');
    $('.mobile-menu-close-svg').addClass('d-none');
    $('.mobile-menu').addClass('d-none');
})

// show mobile search
$('.mobile-search-btn').on('click', () => {
    $('.mobile-search-btn').addClass('d-none');
    $('.mobile-search-close').removeClass('d-none');
    $('.mobile-search').removeClass('d-none');
    $('.mobile-search-input').focus();
})

// hide mobile search
$('.mobile-search-close').on('click', () => {
    $('.mobile-search-close').addClass('d-none');
    $('.mobile-search-btn').removeClass('d-none');
    $('.mobile-search').addClass('d-none');
})

// show mobile dishes menu
$('.dishes-menu-btn').on('click', () => {
    $('.mobile-menu-2').removeClass('d-none');
})

// hide mobile dishes menu
$('.mobile-menu-2-close').on('click', () => {
    $('.mobile-menu-2').addClass('d-none');
})

/* sticky header */
$(window).scroll(function() {
    var h_header = $('#header').outerHeight();
    var st = $(this).scrollTop();
    if (st > h_header) {
        $('.desktop-scroll-header').fadeIn(300);
    } else if (st < h_header) {
        $('.desktop-scroll-header').fadeOut(300);
    }
});

$(function() {
    $(".order_mini").click(function() {
        $(".order_details").removeClass("od_show");
        $(this).next(".order_details").addClass("od_show");
    });
});