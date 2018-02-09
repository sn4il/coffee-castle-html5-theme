$('.js-coffee-mug').waypoint(function () {
  $(this.element).addClass('animated fadeInRight');
}, { offset: '100%' });

$('.js-mega-button').waypoint(function () {
  $(this.element).removeClass('invisible').addClass('animated bounceIn');
}, { offset: '100%' });

$('.js-coffee-menu-item-card').waypoint(function () {
  $(this.element).removeClass('invisible').addClass('animated fadeInUp');
}, { offset: '100%' });

$('.js-reviews-carousel').waypoint(function () {
  $(this.element).removeClass('invisible').addClass('animated zoomIn');
}, { offset: '100%' });

$('.js-instagram-feed-item').waypoint(function () {
  $(this.element).removeClass('invisible').addClass('animated fadeInLeft');
}, { offset: '100%' });

$('.js-map').waypoint(function () {
  $('.js-map').removeClass('invisible').addClass('animated fadeInLeft');
}, { offset: '100%' });

$('.js-form').waypoint(function () {
  $('.js-form').removeClass('invisible').addClass('animated fadeInRight');
}, { offset: '100%' });
