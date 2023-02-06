let menu = document.querySelector('#menu_bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
document.querySelector('#search').onclick = () =>{
    document.querySelector('#search_form').classList.toggle('active');
}
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search_form').classList.remove('active');
}


var swiper = new Swiper(".home_slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  loop:true,
  });