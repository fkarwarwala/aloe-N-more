// STICKY NAVIGATION
$(document).ready(function () {
    $('.js-section-features').waypoint(
        function (direction) {
            if (direction == 'down') {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        },
        {
            offset: '80px',
        }
    );
});

// STICKY NAV
$('.js-nav-icon').click(function () {
    var nav = $('.js-main-nav');

    nav.slideToggle(200);
    // $('.nav-title').hide();
});

// TOOGLE NAVIGATION
document
    .querySelector('.js-nav-icon')
    .addEventListener('click', toggleDivDisplay);
function toggleDivDisplay() {
    var x = document.querySelector('.nav-title');
    if (x.style.display === 'none') {
        x.style.display = 'inline-block';
    } else {
        x.style.display = 'none';
    }
}

// SNACKBAR

function myFunction() {
    // Get the snackbar DIV
    var x = document.getElementById('snackbar');

    // Add the "show" class to DIV
    x.className = 'show';

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
        x.className = x.className.replace('show', '');
    }, 3000);

    return false;
}
