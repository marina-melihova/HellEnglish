$('.js-ham-menu').on('click', function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $('.js-header__nav-wrap').addClass('close').removeClass('open');
    $('body').css('overflow', 'visible');
  } else {
    $(this).addClass('active');
    $('.js-header__nav-wrap').addClass('open').removeClass('close');
    $('body').css('overflow', 'hidden');
  }
});
$('.header__nav-link').on('click', function () {
  $('.js-header__logo').removeClass('active');
  $('.js-ham-menu').removeClass('active');
  $('.js-header__nav-wrap').addClass('close').removeClass('open');
  $('body').css('overflow', 'visible');
});
$('.header__nav-lesson-link').on('click', function () {
  $('.js-header__logo').removeClass('active');
  $('.js-ham-menu').removeClass('active');
  $('.js-header__nav-wrap').addClass('close').removeClass('open');
  $('body').css('overflow', 'visible');
});
$(window).on('load resize', function () {
  const ww = window.innerWidth;
  if (ww > 1279 && $('.js-header__nav-wrap').hasClass('close')) {
    $('.js-header__nav-wrap').removeClass('close');
  }
});
