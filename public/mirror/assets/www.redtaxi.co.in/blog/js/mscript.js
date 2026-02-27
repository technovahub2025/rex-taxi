// auto generated side menu from top header menu start
  var topHeaderMenu = $('header nav > ul').clone();
  var sideMenu = $('.side-menu-wrap nav');
  sideMenu.append(topHeaderMenu);
  if ($(sideMenu).find('.sub-menu').length != 0) {
    $(sideMenu).find('.sub-menu').parent().append('<i class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M15.54 11.29L9.88 5.64a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.41l4.95 5L8.46 17a1 1 0 0 0 0 1.41a1 1 0 0 0 .71.3a1 1 0 0 0 .71-.3l5.66-5.65a1 1 0 0 0 0-1.47z" fill="#000"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg></i>');
  }
if ($('.pbm').find('.sub-menu').length != 0) {
    $(this).find('.sub-menu').parent().append('<i class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M15.54 11.29L9.88 5.64a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.41l4.95 5L8.46 17a1 1 0 0 0 0 1.41a1 1 0 0 0 .71.3a1 1 0 0 0 .71-.3l5.66-5.65a1 1 0 0 0 0-1.47z" fill="#000"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg></i>');
  }
if ($('.hmm2').find('.sub-menu').length != 0) {
    $(this).find('.sub-menu').parent().append('<i class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M15.54 11.29L9.88 5.64a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.41l4.95 5L8.46 17a1 1 0 0 0 0 1.41a1 1 0 0 0 .71.3a1 1 0 0 0 .71-.3l5.66-5.65a1 1 0 0 0 0-1.47z" fill="#000"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg></i>');
  }
if ($('.hdbm').find('.sub-menu').length != 0) {
    $(this).find('.sub-menu').parent().append('<i class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M15.54 11.29L9.88 5.64a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.41l4.95 5L8.46 17a1 1 0 0 0 0 1.41a1 1 0 0 0 .71.3a1 1 0 0 0 .71-.3l5.66-5.65a1 1 0 0 0 0-1.47z" fill="#000"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg></i>');
  }


  // auto generated side menu from top header menu end

  // close menu when clicked on menu link start
  // $('.side-menu-wrap nav > ul > li > a').on('click', function () {
  //   sideMenuCloseAction();
  // });
  // close menu when clicked on menu link end

  // open close sub menu of side menu start
  var sideMenuList = $('.side-menu-wrap nav > ul > li > i');
  $(sideMenuList).on('click', function () {
    if (!($(this).siblings('.sub-menu').hasClass('d-block'))) {
      $(this).siblings('.sub-menu').addClass('d-block');
     $(this).addClass('angdown');
    } else {
      $(this).siblings('.sub-menu').removeClass('d-block');
         $(this).removeClass('angdown');
    }
  });


 $('.pbm i').on('click', function () {
    if (!($('.pbm .sub-menu').hasClass('d-block'))) {
     $(this).siblings('.sub-menu').addClass('d-block');
     $('.pbm').addClass('active');
    } else {
      $(this).siblings('.sub-menu').removeClass('d-block');
          $('.pbm').removeClass('active');
    }
  });
 $('.bwm i').on('click', function () {
    if (!($('.bwm .sub-menu').hasClass('d-block'))) {
     $(this).siblings('.sub-menu').addClass('d-block');
     $('.bwm').addClass('active');
    } else {
      $(this).siblings('.sub-menu').removeClass('d-block');
         $('.bwm').removeClass('active');
    }
  });


  // side menu close start
  $('.side-menu-close').on('click', function () {
    if (!($('.side-menu-close').hasClass('closed'))) {
      $('.side-menu-close').addClass('closed');
    } else {
      $('.side-menu-close').removeClass('closed');
    }
  });
  // side menu close end

  // auto append overlay to body start
  $('.wrapper').append('<div class="custom-overlay h-100 w-100"></div>');
  // auto append overlay to body end

  // open side menu when clicked on menu button start
  $('.side-menu-close').on('click', function () {
    if (!($('.side-menu-wrap').hasClass('opened')) && !($('.custom-overlay').hasClass('show'))) {
      $('.side-menu-wrap').addClass('opened');
      $('.custom-overlay').addClass('show');
    } else {
      $('.side-menu-wrap').removeClass('opened');
      $('.custom-overlay').removeClass('show');
    }
  })
  // open side menu when clicked on menu button end

  // close side menu when clicked on overlay start
  $('.custom-overlay').on('click', function () {
    sideMenuCloseAction();
  });
// close side menu when clicked on overlay end

// close side menu when swiped start
var isDragging = false, initialOffset = 0, finalOffset = 0;
$(".side-menu-wrap")
.mousedown(function(e) {
    isDragging = false;
  initialOffset = e.offsetX;
})
.mousemove(function() {
    isDragging = true;
 })
.mouseup(function(e) {
    var wasDragging = isDragging;
    isDragging = false;
  finalOffset = e.offsetX;
    if (wasDragging) {
        if(initialOffset>finalOffset) {
           sideMenuCloseAction();
           }
    }
});
// close side menu when swiped end


  function sideMenuCloseAction() {
    $('.side-menu-wrap').addClass('open');
    $('.wrapper').addClass('freeze');
    $('.custom-overlay').removeClass('show');
    $('.side-menu-wrap').removeClass('opened');
    $('.side-menu-close').removeClass('closed');
    $(sideMenuList).siblings('.sub-menu').removeClass('d-block');
  }
  // close side menu when clicked on overlay end

  // close side menu over 992px start
    $(window).on('resize', function() {
        if($(window).width() >=1200) {
            sideMenuCloseAction();
        }
    })
    // close side menu over 992px end