(function ($) {

let searchFrom = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = ()=>{
    searchFrom.classList.toggle('active')
    navbar.classList.remove('active')
    wishlist.classList.remove('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')

}
let wishlist= document.querySelector('.wishlist');

    document.querySelector('#heart-btn').onclick = ()=>{
        wishlist.classList.toggle('active')
        navbar.classList.remove('active')
        searchFrom.classList.remove('active')
        shoppingCart.classList.remove('active')
        loginForm.classList.remove('active')

    }

let shoppingCart= document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = ()=>{
    shoppingCart.classList.toggle('active')
    navbar.classList.remove('active')
    searchFrom.classList.remove('active')
    wishlist.classList.remove('active')
    loginForm.classList.remove('active')

}
let loginForm= document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = ()=>{
    loginForm.classList.toggle('active')
    navbar.classList.remove('active')
    searchFrom.classList.remove('active')
    wishlist.classList.remove('active')
    shoppingCart.classList.remove('active')


}
let navbar= document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.toggle('active')
    searchFrom.classList.remove('active')
    wishlist.classList.remove('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')

}
window.onscroll = ()=>{
    navbar.classList.remove('active')
    searchFrom.classList.remove('active')
    wishlist.classList.remove('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')

}







    $('.Trending-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        centerMode:true,
        centerPadding:'0px'
    });
    //
    // $('.counter').counterUp({
    //     delay: 10,
    //     time: 1000
    // });


    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Gallery filter
        --------------------*/
        $('.filter__controls li').on('click', function () {
            $('.filter__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.product__filter').length > 0) {
            var containerEl = document.querySelector('.product__filter');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
    CountDown
--------------------*/
    // For demo preview start
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    if(mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end


    // Uncomment below and use your date //

    /* var timerdate = "2020/12/30" */

    $("#countdown").countdown(timerdate, function (event) {
        $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Days</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Hours</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Minutes</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Seconds</p> </div>"));
    });












    $('.Trending-slide').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    centerMode:true,
    centerPadding:'0px'
});




$(window).on('load', function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");

    /*------------------
        Gallery filter
    --------------------*/
    $('.filter__controls li').on('click', function () {
        $('.filter__controls li').removeClass('active');
        $(this).addClass('active');
    });
    if ($('.product__filter').length > 0) {
        var containerEl = document.querySelector('.product__filter');
        var mixer = mixitup(containerEl);
    }
});



/*------------------
    CountDown
--------------------*/
// For demo preview start
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

if(mm == 12) {
    mm = '01';
    yyyy = yyyy + 1;
} else {
    mm = parseInt(mm) + 1;
    mm = String(mm).padStart(2, '0');
}
var timerdate = mm + '/' + dd + '/' + yyyy;
// For demo preview end


// Uncomment below and use your date //

/* var timerdate = "2020/12/30" */

$("#countdown").countdown(timerdate, function (event) {
    $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Days</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Hours</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Minutes</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Seconds</p> </div>"));
});

/*--------------------------
       Product Details Slider
   ----------------------------*/
$(".product__details__pic__slider").owlCarousel({
    loop: false,
    margin: 0,
    items: 1,
    dots: false,
    nav: true,
    navText: ["<i class='arrow_carrot-left'></i>","<i class='arrow_carrot-right'></i>"],
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: false,
    mouseDrag: false,
    startPosition: 'URLHash'
}).on('changed.owl.carousel', function(event) {
    var indexNum = event.item.index + 1;
    product_thumbs(indexNum);
});

function product_thumbs (num) {
    var thumbs = document.querySelectorAll('.product__thumb a');
    thumbs.forEach(function (e) {
        e.classList.remove("active");
        if(e.hash.split("-")[1] == num) {
            e.classList.add("active");
        }
    })
}

/*-------------------
      Quantity change
  --------------------- */
var proQty = $('.pro-qty');
proQty.prepend('<span class="fa fa-angle-up dec qtybtn"></span>');
proQty.append('<span class="fa fa-angle-down inc qtybtn"></span>');
proQty.on('click', '.qtybtn', function () {
    var $button = $(this);
    var oldValue = $button.parent().find('input').val();
    if ($button.hasClass('inc')) {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }
    $button.parent().find('input').val(newVal);
});

var proQty = $('.pro-qty-2');
proQty.prepend('<span class="fa fa-angle-left dec qtybtn"></span>');
proQty.append('<span class="fa fa-angle-right inc qtybtn"></span>');
proQty.on('click', '.qtybtn', function () {
    var $button = $(this);
    var oldValue = $button.parent().find('input').val();
    if ($button.hasClass('inc')) {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }
    $button.parent().find('input').val(newVal);
});

    /*------------------
           Single Product
       --------------------*/
    $('.product__thumb .pt').on('click', function(){
        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.product__big__img').attr('src');
        if(imgurl != bigImg) {
            $('.product__big__img').attr({src: imgurl});
        }
    });

    /*-------------------
       Radio Btn
   --------------------- */
    $(".product__color__select label, .shop__sidebar__size label, .product__details__option__size label").on('click', function () {
        $(".product__color__select label, .shop__sidebar__size label, .product__details__option__size label").removeClass('active');
        $(this).addClass('active');
    });

})(jQuery);