console.log("hello world");

const openMenu = document.querySelector(".menu .menuOpenClose .menuOpen");
const closeMenu = document.querySelector(".menu .menuOpenClose .menuClose");
const menu = document.querySelector(".menu");
const menuPage = document.querySelector(".menu .menuPage");


if (window.innerWidth > 1200) {
  gsap.to(".pages", {
    width: "50vw",
    height: "7vh",
    position: "fixed",
    top: "5.5%",
    left: "50%",
    scrollTrigger: {
      trigger: ".carousel-container, .members-container, .committee-members, .eventCardsContainer, .objectivesInfo, .contact",
      scroller: "body",
      start: "top 26%",
      end: "top 28%",
      scrub: 1,
    },
  });

  gsap.to(".pages h5", {
    fontSize: "0.7rem",
    scrollTrigger: {
      trigger: ".carousel-container, .members-container, .committee-members, .eventCardsContainer, .objectivesInfo, .contact",
      scroller: "body",
      start: "top 26%",
      end: "top 28%",
      scrub: 1,
    },
  });
  
  gsap.to(".logo, .logo h4", {
    width: "25vw",
    gap: "14px",
    scrollTrigger: {
      trigger: ".carousel-container",
      scroller: "body",
      start: "top 26%",
      end: "top 28%",
      scrub: 1,
    },
  });
  gsap.to(".logo h4", {
    fontSize: "0.75vw",
    lineHeight: "18px",
    scrollTrigger: {
      trigger: ".carousel-container",
      scroller: "body",
      start: "top 26%",
      end: "top 28%",
      scrub: 1,
    },
  });
}


openMenu.addEventListener("click", () => {
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  menuPage.style.height = "80%";
  menuPage.style.width = "98%";
  menuPage.style.display = "flex";
  menuPage.style.flexDirection = "column";
  menuPage.style.alignItems = "center";
  menuPage.style.justifyContent = "center";
  menuPage.style.position = "fixed";
  menuPage.style.top = "50%";
  menuPage.style.left = "50%";
  menuPage.style.transform = "translate(-50%, -50%)";
  menuPage.style.zIndex = "2";
  menuPage.style.gap = "12px";
  menuPage.style.borderRadius = "20px";
  gsap.to(".menu", {
    height: "60vh",
    width: "95vw",
    duration: "0.2"
  });
  setTimeout(() => {
   gsap.to(".menuPage a", {
    opacity: 1,
   })
  }, 180);
});

closeMenu.addEventListener("click", () => {
  menuPage.style.display = "none";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
  menuPage.style.borderRadius = "50%";
  gsap.to(".menu", {
    height: "3rem",
    width: "3rem",
    duration: "0.2"
  });
  gsap.to(".menuPage a", {
    opacity: 0,
   })
});

// ------- Carousel Code -------

//step 1: get DOM
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");

let carouselDom = document.querySelector(".carousel");
let SliderDom = carouselDom.querySelector(".carousel .list");
let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
let timeDom = document.querySelector(".carousel .time");

let timeRunning = 2000;
let timeAutoNext = 5000;

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);
function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
  let thumbnailItemsDom = document.querySelectorAll(
    ".carousel .thumbnail .item"
  );

  if (type === "next") {
    SliderDom.appendChild(SliderItemsDom[0]);
    carouselDom.classList.add("next");
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
}
