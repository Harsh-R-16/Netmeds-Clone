let sliderImgs = [
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1640966085_Web_Home_title_1680X320.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1643645501_Home_Banner741.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1643645870_Home_Bannerzdfsf.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1641829832_Homebvbbbb.jpg",
];
// console.log(sliderImgs);
let sliderImg = document.querySelector("#img-slider img");
let iBtns = document.querySelectorAll("#img-slider i");
let count = 0;
setInterval(() => {
  count++;
  if (count == sliderImgs.length) count = 0;
  sliderImg.src = sliderImgs[count];
}, 2000);

iBtns.forEach((i) => {
  i.addEventListener("click", function () {
    if (i.classList.contains("fa-angle-right")) {
      count++;
      if (count == sliderImgs.length) count = 0;
      sliderImg.src = sliderImgs[count];
    } else {
      count--;
      if (count == 0) count = sliderImgs.length - 1;
      sliderImg.src = sliderImgs[count];
    }
  });
});
