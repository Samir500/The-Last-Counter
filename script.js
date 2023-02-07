let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}




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

    $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
        }
    });

});



var theme = document.getElementById("theme");

theme.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        theme.src = "./testingAssets/moon.png";
    } else {
        theme.src = "./testingAssets/sun.png";
    }
}