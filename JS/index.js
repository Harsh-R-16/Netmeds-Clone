let sliderImgs = [
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1650033102_Home_Banner_Kareena.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1648222616_Home_bannerfdd.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1648222844_Home_bannerfdsdg.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1648464223_Bowl_100_Home-Bannerdsgdsg.jpg",
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
