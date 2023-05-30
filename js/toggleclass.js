'use strict'

$(".c-MenuButton").click(function () {
  $(this).toggleClass('is-active');
  $(".c-sidebar").toggleClass('is-active');
  $(".l-sidebar").toggleClass('is-active');
  $(".c-bg").toggleClass('is-active');
  $("body").toggleClass('is-active');
});

$(".c-CloseButton").click(function () {
  $(".c-MenuButton").removeClass('is-active');
  $(".c-sidebar").removeClass('is-active');
  $(".l-sidebar").removeClass('is-active');
  $(".c-bg").removeClass('is-active');
  $("body").removeClass('is-active');
});