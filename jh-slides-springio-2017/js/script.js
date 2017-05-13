$(function () {

    impress().init();

    $("#next").click(function () {
        impress().next();
    });

    $("#prev").click(function () {
        impress().prev();
    });

    // page animations
    addAnimation('.animate', 'ul li', 'bounceIn');
    addAnimation('#lets-build', 'p.icon', 'tada');
    addAnimation('#jhipster-about', '.animate', 'bounceInUp');
    addAnimation('#sub-features', 'p.animate', 'bounceIn');
    addAnimation('#dep-features', 'p.animate', 'bounceIn');
    addAnimation('#microservice', 'p.animate', 'lightSpeedIn');
    addAnimation('#microservice-jh-2', 'p.animate', 'fadeInDown');
    addAnimation('#intro-finish', 'div.drop_box span#drop_down', 'hinge');
    addAnimation('#intro-finish', '#border-radius', 'rollIn');

    window.addEventListener('impress:stepenter', function () {
        $('#intro-finish.present #border-radius').addClass('show');
    });

    function addAnimation(selector, subSelector, animateClass) {
        window.addEventListener('impress:stepenter', function () {
            $(selector + '.active ' + subSelector).addClass('animated ' + animateClass);
        });
        window.addEventListener('impress:stepenter', function () {
            $(selector + '.past ' + subSelector).removeClass('animated ' + animateClass);
        });
        window.addEventListener('impress:stepenter', function () {
            $(selector + '.future ' + subSelector).removeClass('animated ' + animateClass);
        });
    }
});

function toggleFullScreen() {
    if (!document.fullscreenElement && // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) { // current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}

// disable mousewheet
$(document).ready(function () {

    document.onmousewheel = function () {
        stopWheel();
    } /* IE7, IE8 */
    if (document.addEventListener) { /* Chrome, Safari, Firefox */
        document.addEventListener('DOMMouseScroll', stopWheel, false);
    }

    function stopWheel(e) {
        if (!e) {
            e = window.event;
        } /* IE7, IE8, Chrome, Safari */
        if (e.preventDefault) {
            e.preventDefault();
        } /* Chrome, Safari, Firefox */
        e.returnValue = false; /* IE7, IE8 */
    };

    document.addEventListener("keydown", function (e) {
        if (e.keyCode == 13) {
            toggleFullScreen();
        }
    }, false);
});