$(function(){
  $('.presentation__photo').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
  });
});

/*let presentList = document.getElementById("paginator-list");

const buttons = document.querySelectorAll(".presentation__photo-paginator__button");
const images = document.querySelectorAll(".presentation__photo-img");

presentList.addEventListener("click", function (event){
 event.preventDefault();

 function closeItems() {
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.classList.remove('presentation__photo-paginator__button--active');
  }
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    image.classList.remove('presentation__photo-img--active');
}
}

 function Images() {
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    if (target.classList.contains('presentation__photo-paginator__button--active')) {
      image.classList.add('presentation__photo-img--active');
    } 
    } 
}

 const target = event.target;
 if (target.classList.contains('presentation__photo-paginator__button')){
    closeItems();
    target.classList.add('presentation__photo-paginator__button--active');
    Images();
  }
});*/