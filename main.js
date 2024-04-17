const swiper1 = new Swiper('.home ', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

const swiper2 = new Swiper('.coming-container', {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 55000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 2
    },
    568: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 4
    },
    968: {
      slidesPerView: 5,
    }
  }
});

const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0)
})

const menuIcon = document.querySelector("#menu-icon");
const navBar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
}

window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navBar.classList.remove("active");
}