$(window).resize(function() {
  if(window.matchMedia('(min-width: 1250px)').matches) {
    $('.c-MenuButton').removeClass('is-active');
    $('.c-sidebar').removeClass('is-active');
    $('.l-sidebar').removeClass('is-active');
    $('.c-bg').removeClass('is-active');
  }else {
  };
  });