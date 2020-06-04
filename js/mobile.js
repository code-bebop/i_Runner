function topbtnHandler(scrollHeight) {
  $(".main__btn--top").click((e)=>{
    e.preventDefault();
    $('html, body').animate({
      scrollTop : 0
    }, 1000);
  })
}

function animationHandler(scrollHeight) {
  if(scrollHeight > 3) {
    $(".main__section--02__txt").addClass("play");
  }
  if (scrollHeight > 5){
    $(".main__btn--top").addClass("on");
  } else {
    $(".main__btn--top").removeClass("on");
  }
  if(scrollHeight > 27) {
    $(".main__section--03__content").addClass("play");
    $(".main__section--03__background").addClass("play");
  }
  if(scrollHeight > 52) {
    $(".main__section--04__copy").addClass("play");
    $(".main__section--04__background").addClass("play");
  }
  if(scrollHeight > 73) {
    $(".main__section--05__content").addClass("play");
    $(".main__section--05__background").addClass("play");
  }
  
  let parallax = (-scrollHeight + 30) * 2;
  
  $(".main__section--01__copy").css({
    "transform": "translateX(" + (parallax - 60)*5 + "%)"
  })
  
  $(".main__section--02__copy").css({
    "transform": "translateX(" + parallax + "%)"
  })
}

function scrollHandler() {
  
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
  $(".main__section--01__copy").addClass("play");
  $(".main__section--01__background").addClass("play");
  
  $(window).scroll(()=>{
    let currentHeight = windowHeight - document.documentElement.scrollTop;
    let scrollHeight = 100 - ((currentHeight / windowHeight) * 100);
    
    $(".main__progress-bar__content").css("height", scrollHeight + "%");
    
    animationHandler(scrollHeight);
  })
}

function menuHandler() {
  $(".header__top__btn").click((e)=>{
    e.preventDefault();
    $(".header__top__btn").toggleClass("is-opened");
    $(".header__product").toggleClass("is-opened");
  })
  
  let lastScrollTop = 0;
  
  $(window).scroll((e)=>{
    let st = $(this).scrollTop();
    
    if (st > lastScrollTop){
      $(".header").addClass("down");
    } else {
      $(".header").removeClass("down");
    }
    lastScrollTop = st;
  })
}

function init() {
  menuHandler();
  scrollHandler();
  topbtnHandler();
}

init();