let h2 = document.querySelector("#container h2");
// h2.innerHTML = "k";
if (localStorage.getItem("url")) {
  h2.innerHTML = localStorage.getItem("url");
  document.title = localStorage.getItem("url");
}
data.sort(() => Math.random() - 0.5);
let summary = document.querySelector("#summary");
let checkboxes = document.querySelector("#checkboxes");
let summaryCategory = {
  Ayush: ["Homeopathy", "Ayurvedic", "Unani", "Siddha"],
  Fitness: [
    "Vitamins And Supplements",
    "Family Nutrition",
    "Health Food And Drinks",
    "Ayurvedic Supplements",
    "Sports Supplements",
    "Smoking Cessation Support",
    "Weight Management",
  ],
  "Mom & Baby": [
    "Baby Care",
    "Feminine Hygiene",
    "Maternity Care",
    "Toys & Games",
    "Baby Bath Time",
    "Maternity Accessories",
  ],
  "Sexual Wellness": [
    "Lubricants",
    "Massagers/Vibrators",
    "Sprays/Gels",
    "Vitamins",
    "Sexual Health Supplements",
  ],
  Treatments: [
    "Feminine Hygiene",
    "Maternity Care",
    "Toys & Games",
    "Baby Bath Time",
  ],
  Devices: ["Family Nutrition"],
  "Health Conditions": ["Health Food And Drinks"],
  "Otc Deals": [
    "Feminine Hygiene",
    "Maternity Care",
    "Toys & Games",
    "Baby Bath Time",
  ],
  Eyewear: ["Ayurvedic Supplements"],
  "Covid Essentials": ["Homeopathy", "Ayurvedic", "Unani", "Siddha"],
  Surgical: [
    "Feminine Hygiene",
    "Maternity Care",
    "Toys & Games",
    "Baby Bath Time",
  ],
  "Diabets Support": ["Sports Supplements"],
  Frangrances: [
    "Feminine Hygiene",
    "Maternity Care",
    "Toys & Games",
    "Baby Bath Time",
  ],
  "Make-Up": ["Homeopathy", "Ayurvedic", "Unani", "Siddha"],
  Hair: ["Maternity Care", "Toys & Games", "Baby Bath Time"],
  "Men's Grooming": [
    "Feminine Hygiene",
    "Maternity Care",
    "Toys & Games",
    "Baby Bath Time",
  ],
  "Skin Care": ["Smoking Cessation Support"],
  "Tools & Wellness": ["Weight Management"],
  Wellness: [
    "Feminine Hygiene",
    "Maternity Care",
    "Toys & Games",
    "Baby Bath Time",
  ],
  "Personal Care": ["Homeopathy", "Ayurvedic", "Unani", "Siddha"],
};

let checkData = {
  Availability: ["Exclude out of stock (389)"],
  Categories: [
    "Mask (308)",
    " Personal & Home Essentials (154)",
    " Business Essentials (146)",
    " Immunity Booster (51)",
    " Travel Essentials (13)",
  ],
  Manufacturers: [
    " Immunity Booster (51)",
    "Boldfit (28)",
    "Faballey (28)",
    "Mask (308)",
    "Dettol (24)",
    "Pinkblue (24)",
    " Travel Essentials (13)",
  ],
  Brands: [
    "1Mile (51)",
    "Advind Healthcare (44)",
    "Care View (31)",
    "Livinguard (31)",
    "Boldfit (28)",
    "Faballey (28)",
    "Dettol (24)",
    "Pinkblue (24)",
    "Orchidsplus (14)",
    "Resist+ (14)",
  ],
};

for (let item in summaryCategory) {
  summary.innerHTML += `<details>
                <summary><i class='fa fa-angle-right'></i>${item}</summary>
                ${getSummary(summaryCategory[item])}
                </details>`;
}

function getSummary(arr) {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += `<li>${arr[i]}</li>`;
  }
  return res;
}

for (let item in checkData) {
  checkboxes.innerHTML += `
  <h3>${item}</h3>
  ${getCheck(checkData[item])}
    `;
}

function getCheck(arr) {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += `<li>
    <input type="checkbox" id=${arr[i]}> <label for=${arr[i]}>${arr[i]}</label>
      </li>`;
  }
  return res;
}

import { data } from "./data.js";
let allProducts = document.querySelector("#allProducts");
let cart;
localStorage.getItem("cart")
  ? (cart = JSON.parse(localStorage.getItem("cart")))
  : (cart = []);

function getProducts(index) {
  let x = index * 16;
  allProducts.innerHTML = "";
  for (let i = x; i < x + 16; i++) {
    let d = Math.round((1 - data[i][3] / data[i][4]) * 100);

    allProducts.innerHTML += ` <div id=${data[i][5] + 100}>
                    <img src=${data[i][0]}
                        alt="">
                    <h4>${data[i][1]}</h4>
                    <p class="mkt">Mkt: ${data[i][2]}</p>
                    <p class="bestPrice">Best Price: <span>Rs. ${
                      data[i][3]
                    }</span></p>
                    <p class="mrp">MRP <span>Rs. ${data[i][4]}</span></p>
                    <button id=${data[i][5]}>${
      cart.includes(data[i][5]) ? "ADDED" : "ADD"
    } TO CART</button>
                    <p class="discount-price">${d}% OFF</p>
                </div>`;
  }
}
getProducts(0);
// import { get_added_item_fn } from "./cart_items.js"

let btns = document.querySelectorAll("#btns button");
let p = document.querySelector("#showNumber");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let num = btns[i].innerHTML - 1;
    p.innerHTML = `Showing <span>${num * 16 + 1}</span> to <span>${
      num * 16 + 16
    }</span> Products`;
    getProducts(num);
  });
}

let sortBtns = document.querySelector("#sortByCategory");
sortBtns.addEventListener("click", function (e) {
  if (e.target.innerHTML == "Popularity") {
    data.sort(() => Math.random() - 0.5);
  }
  if (e.target.innerHTML == "High to Low") {
    data.sort((a, b) => b[3] - a[3]);
  }
  if (e.target.innerHTML == "Low to High") {
    data.sort((a, b) => a[3] - b[3]);
  }
  if (e.target.innerHTML == "Discount") {
    data.sort((a, b) => {
      let d3 = Math.round((1 - a[3] / a[4]) * 100);
      let d4 = Math.round((1 - b[3] / b[4]) * 100);
      return d4 - d3;
    });
  }
  getProducts(0);
  p.innerHTML = `Showing <span>1</span> to <span>16</span> Products`;
  console.log(data);
});

allProducts.addEventListener("click", function (e) {
  if (e.target.tagName == "BUTTON") {
    console.log(e.target.id);
    // get_added_item_fn(e.target.parentNode.childNodes);
    // console.log(e.target.parentNode.childNodes)
    if (!cart.includes(+e.target.id)) {
      cart.push(+e.target.id);
      e.target.innerHTML = "ADDED TO CART";
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }
});
allProducts.addEventListener("click", function (e) {
  if (
    e.target.parentElement.tagName == "DIV" &&
    e.target.tagName !== "BUTTON"
  ) {
    console.log(e.target.parentElement);
    localStorage.setItem("singleId", +e.target.parentElement.id);
    window.location.assign("singleProduct.html");
  }
});

checkboxes.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.parentElement.tagName == "LI") {
    data.sort(() => Math.random() - 0.5);
    getProducts(0);
    p.innerHTML = `Showing <span>1</span> to <span>16</span> Products`;
  }
});
summary.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.tagName == "LI") {
    data.sort(() => Math.random() - 0.5);
    getProducts(0);
    p.innerHTML = `Showing <span>1</span> to <span>16</span> Products`;
  }
});
