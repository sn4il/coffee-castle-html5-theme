function revealToTop () {
  $('.js-to-top').removeClass('invisible');
}

function showToTop () {
  $('.js-to-top').removeClass('slideOutUp').addClass('slideInDown');
}

function hideToTop () {
  $('.js-to-top').removeClass('slideInDown').addClass('slideOutUp');
}

let revealed = false;

function updateToTop () {
  if ($(window).width() < 768) {
    if($(window).scrollTop() >= $('.js-header').height()) {
      showToTop();

      if (!revealed) {
        revealToTop();
        revealed = true;
      }
    } else {
      hideToTop()
    }
  } else {
    hideToTop();
  }
}

$(window).scroll(updateToTop);
$(window).resize(updateToTop);
