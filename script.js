let menu = document.querySelector('#menu_bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .navbar a');


window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{
      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id');

      if(top => offset && top < offset + height){
        navlinks.forEach(links =>{
          links.classList.remove('active');
          document.querySelector('header .navbar a[href*=' +id+']').classList.add('active');
        });
      };
    });
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


var swiper = new Swiper(".review_slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  loop:true,
  breakpoints: {
    0:{
      slidesPerView: 1,
    },
    640:{
      slidesPerView: 2,
    },
    768:{
      slidesPerView: 2,
    },
    1024:{
      slidesPerView: 3,
    },
  },
  });