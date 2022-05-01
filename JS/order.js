let sliderImgs = [
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1650033102_Home_Banner_Kareena.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1648222616_Home_bannerfdd.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1648222844_Home_bannerfdsdg.jpg",
  "https://www.netmeds.com/images/cms/aw_rbslider/slides/1648464223_Bowl_100_Home-Bannerdsgdsg.jpg",
];
// console.log(sliderImgs);
let sliderImg = document.querySelector("#slide img");
let count = 0;
setInterval(() => {
  count++;
  if (count == sliderImgs.length) count = 0;
  sliderImg.src = sliderImgs[count];
}, 2000);

let productDiv = document.querySelector("#parent-div");
let arr = JSON.parse(localStorage.getItem("cart"));

import { data } from "./data.js";
// console.log(arr);
// console.log(data);
let dprice = [];
let aprice = [];
for (let i = 0; i < data.length; i++) {
  if (arr.includes(data[i][5])) {
    dprice.push(data[i][3]);
    aprice.push(data[i][4]);
    productDiv.innerHTML += `<div>
                        <img src=${data[i][0]}
                            alt="">
                        <h3>${data[i][1]}</h3>
                        <p>Only ${
                          Math.floor(Math.random() * 7) + 5
                        } Left In Stock</p>
                        <p>Mfr: ${data[i][2]}</p>
                        <p class="price-span"><span>Rs.${
                          data[i][3]
                        }</span> Rs.${data[i][4]}</p>
                        <p>Delivery between MARCH 13-MARCH 15</p>
                        <label for="q">Quantity: </label>
                        <select name="q" id="q">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <button>Remove</button>
                    </div>`;
  }
}
console.log(dprice);
console.log(aprice);

function sum(arr) {
  let s = 0;
  for (let i = 0; i < arr.length; i++) {
    s += arr[i];
  }
  return Math.floor(s);
}
let odprice = [...dprice];
let oaprice = [...aprice];
// console.log(oprice);

let selects = productDiv.querySelectorAll("select");
selects.forEach((select, index) => {
  select.addEventListener("change", (e) => {
    console.log(select.value, index);
    dprice[index] = odprice[index] * select.value;
    aprice[index] = oaprice[index] * select.value;
    console.log(dprice, aprice);
    calcPrice(dprice, aprice);
  });
});
let paymentDiv = document.querySelector("#payment");
function calcPrice(dprice, aprice) {
  paymentDiv.innerHTML = `
                    <p>PAYMENT DETAILS</p>
                    <p><span>MRP Total:</span> <span>Rs.${sum(
                      aprice
                    )}</span></p>
                    <p><span>Netmeds Discount:</span> <span>Rs.${
                      sum(aprice) - sum(dprice)
                    }</span></p>
                    <p><span>Total Amount *</span> <span>Rs.${sum(
                      dprice
                    )}</span></p>
                    <p><span>Total Amount (MASAI30 Applied):</span> <span>RS.${Math.floor(
                      sum(dprice) * 0.7
                    )}</span></p>
                    <a href="addressPayment.html"><button>PROCEED TO PAY Rs.${Math.floor(
                      sum(dprice) * 0.7
                    )}</button></a>`;
}
calcPrice(dprice, aprice);

// let btn = paymentDiv.querySelector("button");
// btn.addEventListener("click", function () {
//   window.location.assign("addressPayment.html");
// });
