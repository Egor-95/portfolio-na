// var swiper = new Swiper('.swiper', {
//    slidesPerView: 1,
//     spaceBetween: 10,
//      speed: 3000,
//    effect: "fade",
//   pagination: {
//     el: '.swiper-pagination',
//     clickable:true,
//   },
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
//   loop: true,
// });

  var swiper = new Swiper(".mySwiper", {
        effect: "cards",
    grabCursor: true,
         pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
      });

// function  openbox(more) {
//  display = document.getElementById('more').style.display;
//  if (display == "none") {
//   document.getElementById('more').style.display = "flex";
//  }
//  else {
//   document.getElementById('more').style.display = "none";
//  }
// };
function  openbox(more) {
  var more = document.getElementById ("more");
  var btn = document.getElementById ("btn");

  if (more.style.display === "flex") {
      more.style.display = "none";
      btn.innerHTML = "ПОКАЗАТЬ ЕЩЕ";
  }
  else {
      more.style.display = "flex";
      btn.innerHTML = "СКРЫТЬ";
     
  }
}

// const animItems = document.querySelectorAll('.anim-items');

// if (animItems.length > 0) { 
//   window.addEventListener('scroll', animOnScroll);
//   function animOnScroll() { 
//     for (let index = 0; index < animItems.length; index++) {
//       const animItem = animItems[index];
//       const animItemHeight = animItem.offsetHeight;
//       const animItemOffset = offset(animItem).top;
//       const animStart = 4;

//       let animItemPoint = window.innerHeight - animItemHeight / animStart;

//       if (animItemHeight > window.innerHeight) { 
//         animItemPoint = window.innerHeight - window.innerHeight / animStart;
//       }

//       if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
//         animItem.classList.add('._active');
//       } else { 
//         animItem.classList.remove('._active');
//       }

//     }
//   }
//   function offset(el) { 
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//       scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
//   }
//   animOnScroll()
// }



const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
  
}