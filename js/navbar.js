function fixateNavbar () {
  $('.js-navbar').addClass('bg-dark fixed-top');
}

function releaseNavbar () {
  $('.js-navbar').removeClass('bg-dark fixed-top')
}

function updateNavbar () {
  if ($(window).width() >= 768) {
    if($(window).scrollTop() >= $('.js-navbar-wrap').offset().top) {
      fixateNavbar();
    } else {
      releaseNavbar()
    }
  } else {
    releaseNavbar();
  }
}

$(window).scroll(updateNavbar);
$(window).resize(updateNavbar);

$('.js-navbar-wrap').height($('.js-navbar').height());

$(window).resize(function () {
  $('.js-navbar-wrap').height($('.js-navbar').height());
});
