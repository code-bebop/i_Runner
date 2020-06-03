function menuHandler() {
  $(".header__top__btn").click((e)=>{
    e.preventDefault();
    $(".header__top__btn").toggleClass("is-opened");
    $(".header__product").toggleClass("is-opened");
  })
}

function init() {
  menuHandler();
}

init();