let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 350) {
            $(".header").css("background", "black");
        } else {
            $(".header").css("background", "#00000025");
        }
    })
})


// var myIndex = 0;
// carousel();

// function carousel() {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     myIndex++;
//     if (myIndex > x.length) { myIndex = 1 }
//     x[myIndex - 1].style.display = "block";
//     setTimeout(carousel, 9000);
// }




$(document).ready(function() {

    $('.button').click(function() {
        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if (filter == 'all') {
            $('.gallery .image').show(400);
        } else {
            $('.gallery .image').not('.' + filter).hide(200);
            $('.gallery .image').filter('.' + filter).show(200);
        }

    });

    $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
        }
    });

});