var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 20;

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 150);

function hasScrolled() {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight) {
        $('#goTop').removeClass('hidden');
        $('header').removeClass('nav-down').addClass('nav-up');
        $('#glyphi').addClass('glyphicon-chevron-down').removeClass('glyphicon-chevron-up');
        $('#footer').addClass('hide').removeClass('show');
    }
    else {
        if (st + $(window).height() < $(document).height()) {
            $('#goTop').addClass('hidden');
            $('header').removeClass('nav-up').addClass('nav-down');
            $('#glyphi').addClass('glyphicon-chevron-up').removeClass('glyphicon-chevron-down');
            $('#footer').removeClass('hide').addClass('show');
        }
    }
    lastScrollTop = st;
}

setInterval(function () {
    var footer = $('#footer');
    var st = $(this).scrollTop();
    if (footer.hasClass('hide') && st < 10) { 
        $('#footer').removeClass('hide').addClass('show');
    }
}, 5000);

setInterval(function () {
    var footer = $('header');
    var st = $(this).scrollTop();
    if (footer.hasClass('nav-up')) { 
        $('header').removeClass('nav-up').addClass('nav-down');
    }
}, 5000);



$(function () {
    $(document).delegate('#hideMenu', 'click', (function () {
        $('header').toggleClass('nav-down').toggleClass('nav-up');
        if ($('header').hasClass('nav-down')) {
            $('#glyphi').addClass('glyphicon-chevron-up').removeClass('glyphicon-chevron-down');
        }
        else {
            $('#glyphi').addClass('glyphicon-chevron-down').removeClass('glyphicon-chevron-up');
        }
        event.stopPropagation()
    }));
});

$(function () {
    $(document).delegate('#hideFooter', 'click', (function () {
        $('#footer').addClass('hide').removeClass('show');
        event.stopPropagation()
    }));
});

$(function () {
    $(document).delegate('.top', 'click', (function () {
        var target = $(this.hash);
        target = target.length ? target : $('[id=top]');
        if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top - 1600)
            }, 1500);
            return false;
        }
        event.stopPropagation()
    }));
});

// function scrollWin() {
//     window.scrollTo(0, -500);
// }
