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
