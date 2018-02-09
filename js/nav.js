function random (from, to) {
  return Math.floor(Math.random() * to) + from;
}

$('.js-nav a, .js-to-top a, .-js-mega-button, .js-nav-link').click(function (event) {
  event.preventDefault();

  $('html, body').animate({
   scrollTop: $(this.getAttribute('href')).offset().top - ($(window).width() < 768 ? 0 : $('.js-navbar').height()) + 1
  }, 500);

  $(`.js-audio-wind-up-${random(1, 4)}`).prop('volume', 0.5).trigger('play');
});
