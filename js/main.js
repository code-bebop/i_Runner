function animationHandler(scrollWidth) {
  if(100 - scrollWidth > 3) {
    $(".main__section--01__box--right__txt").addClass("play");
    $(".main__section--01__box--right__copy").addClass("play").attr("data-swiper-parallax-x", -20+"%");
  }
  if(100 - scrollWidth > 35) {
    $(".main__section--02__box--left").addClass("play");
  }
  if(100 - scrollWidth > 55) {
    $(".main__section--02__box--right__txt").addClass("play");
    $(".main__section--02__box--right__txt__1").attr("data-swiper-parallax-x", 50+"%");
    $(".main__section--02__box--right__txt__2").attr("data-swiper-parallax-x", -50+"%");
  }
  if(100 - scrollWidth > 85) {
    $(".main__section--03__content").addClass("play");
  }
}

function scrollHandler() {
  let x = 0;
  
  function getPageSize() { //각 swiper-slide의 width를 더하고, window의 innerWidth를 뺀 값인 pagesize를 반환하는 함수
    let pageSize = -$(window).innerWidth();
    
    $(".swiper-slide").each(function(index, element){
      pageSize += element.offsetWidth;
    });
    
    return pageSize;
  }
  
  function getTranslateX(pageSize){ //swiper-wrapper의 translateX를 구하고 pageSize와 더하여 사용자의 swiper-wrapper의 위치를 구하는 함수
    var matrix = $(".swiper-wrapper").css("transform").replace(/[^0-9\-.,]/g, '').split(',');
    x = matrix[12] || matrix[4];
    
    
    return pageSize + Number(x);
  };
  
  setTimeout(()=>{
    $(".main__section--01__box--left__txt").addClass("play");
    $(".main__section--01__background").addClass("play").attr("data-swiper-parallax-x", -10+"%");
    $(".main__progress__title").addClass("play");
  }, 500);
  
  $(".swiper-wrapper").mousemove((e)=>{
    let pageSize = getPageSize(); 
    let currentOffsetX = getTranslateX(pageSize);
    let scrollWidth = (currentOffsetX/pageSize)*100;
    
    $(".main__progress__scrollbar__content").css("width", 100 - scrollWidth + "%");
    
    animationHandler(scrollWidth);
  })
}

function horizontalScroll() {
    $(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
      direction: "horizontal",
      freeMode: true,
      parallax: true,
      slidesPerView: 'auto',
      mousewheel: {
        invert: false,
      }
    })
  });
  
  function onMouseWheel(e) {
    clearTimeout($.data(this, 'timer'));

    $(".swiper-wrapper").addClass('mousewheel');

    $.data(this, 'timer', setTimeout( function () {
      $(".swiper-wrapper").removeClass('mousewheel')

    }, 250));
  };
  window.addEventListener( 'mousewheel', onMouseWheel, false )
  window.addEventListener( 'DOMMouseScroll', onMouseWheel, false )
  
}

function navFold() {
  $(".header__top__btn-container").click(
    function(e) {
      $(this).toggleClass("is-opend").prev().toggle().parent().toggleClass("is-folded");
      $(".header__product").slideToggle(100);
  })
}

function init() {
  navFold();
  horizontalScroll();
  scrollHandler();
}

init();
