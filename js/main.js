function scrollHandler() {
  let x = 0; //swiper-wrapper의 translateX 값
  
  function getPageSize() { //각 swiper-slide의 width를 더하고, window의 innerWidth를 뺀 값인 pagesize를 반환하는 함수
    let pageSize = -$(window).innerWidth();
    
    $(".swiper-slide").each(function(index, element){
      pageSize += element.offsetWidth;
    });
    
    return pageSize;
  }
  
  function getTranslateX(pageSize){ //swiper-wrapper의 translateX를 구하고 pageSize와 더하여 사용자의 swiper-wrapper의 위치를 구한다. swiper-wrapper는 진행방향이 왼쪽이기 때문에 translateX값은 음수이다.
    var matrix = $(".swiper-wrapper").css("transform").replace(/[^0-9\-.,]/g, '').split(',');
    x = matrix[12] || matrix[4];
    
    
    return pageSize + Number(x);
  };
  
  
  $(".swiper-wrapper").mousemove((e)=>{
    let pageSize = getPageSize(); 
    let currentOffsetX = getTranslateX(pageSize);
    let scrollWidth = (currentOffsetX/pageSize)*100; //slide-wrapper의 현재 위치를 slide-wrapper의 전체 너비로 나눈 뒤 100을 곱해 slide-wrapper의 현재 위치의 백분율을 구한다.
    
    $(".main__progress__scrollbar__content").css("width", 100 - scrollWidth + "%"); //그것을 scrollbar의 너비로 설정해서 시각화 한다.
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
