let forms = document.querySelectorAll("#addressPayment form");
let sec1 = document.querySelector("#add");
let sec2 = document.querySelector("#pay");
// forms.forEach(function (form) {
//   form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     if ((form.parentElement.id = "add")) {
//     } else {
//       console.log("kk");
//     }
//   });
// });
console.log(sec2);
forms[0].addEventListener("submit", function (e) {
  e.preventDefault();
  sec1.style.transform = "translate(-100%,-100%)";
  forms[1].querySelector("button").disabled = false;
});
forms[1].addEventListener("submit", function (e) {
  e.preventDefault();
  sec2.style.transform = "translate(100%,100%)";
  document.querySelector("#bottomPara").style.top = "20%";
  localStorage.setItem("cart", JSON.stringify([]));
});
