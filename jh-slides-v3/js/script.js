$(function () {

    impress().init();

    $("#next").click(function () {
        impress().next();
    });

    $("#prev").click(function () {
        impress().prev();
    });

    // common animations

    window.addEventListener('impress:stepenter', function () {
        $('.animar.active ul li').addClass('animated bounceIn');
    });
    window.addEventListener('impress:stepenter', function () {
        $('.animar.past ul li').removeClass('animated bounceIn');
    });
    window.addEventListener('impress:stepenter', function () {
        $('.animar.future ul li').removeClass('animated bounceIn');
    });

    //page animations

    // lets build page

    window.addEventListener('impress:stepenter', function () {
        $('#lets-build.active p.icon').addClass('animated tada');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#lets-build.past p.icon').removeClass('animated tada');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#lets-build.future p.icon').removeClass('animated tada');
    });

    // jhipater about page
    window.addEventListener('impress:stepenter', function () {
        setTimeout(function () {
            $('#jhipster-about.active .animate').addClass('animated bounceInUp');
        }, 3500)
    });
    window.addEventListener('impress:stepenter', function () {
        $('#jhipster-about.past .animate').removeClass('animated bounceInUp');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#jhipster-about.future .animate').removeClass('animated bounceInUp');
    });

    //sub features page 

    window.addEventListener('impress:stepenter', function () {
        $('#sub-features.active p.upLine').addClass('animated bounceInDown');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#sub-features.past p.upLine').removeClass('animated bounceInDown');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#sub-features.future p.upLine').removeClass('animated bounceInDown');
    });

    window.addEventListener('impress:stepenter', function () {
        $('#sub-features.active p.downLine').addClass('animated bounceInUp');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#sub-features.past p.downLine').removeClass('animated bounceInUp');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#sub-features.future p.downLine').removeClass('animated bounceInUp');
    });


    window.addEventListener('impress:stepenter', function () {
        $('#sub-features.active p.scaleZero').addClass('animated bounceIn');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#sub-features.past p.scaleZero').removeClass('animated bounceIn');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#sub-features.future p.scaleZero').removeClass('animated bounceIn');
    });

    // microservice pages

    window.addEventListener('impress:stepenter', function () {
        $('#microservice-jh-2.active p.animate').addClass('animated fadeInDown');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#microservice-jh-2.past p.animate').removeClass('animated fadeInDown');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#microservice-jh-2.future p.animate').removeClass('animated fadeInDown');
    });

    window.addEventListener('impress:stepenter', function () {
        $('#microservice.active p.animate').addClass('animated lightSpeedIn');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#microservice.past p.animate').removeClass('animated lightSpeedIn');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#microservice.future p.animate').removeClass('animated lightSpeedIn');
    });

    // thank you page

    window.addEventListener('impress:stepenter', function () {
        $('#intro-finish.present div.drop_box span#drop_down').addClass('animated hinge');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#intro-finish.past div.drop_box span#drop_down').removeClass('animated hinge');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#intro-finish.future div.drop_box span#drop_down').removeClass('animated hinge');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#intro-finish.present #border-radius').addClass('animated rollIn show');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#intro-finish.past #border-radius').removeClass('animated rollIn');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#intro-finish.future #border-radius').removeClass('animated rollIn');
    });
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