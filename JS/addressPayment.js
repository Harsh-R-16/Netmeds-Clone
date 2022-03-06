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
let arr = [];
forms[0].addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(forms[0].elements);
  arr.push(forms[0].elements[3].value + " " + forms[0].elements[4].value);
  arr.push("harsh.gajera17@gmail.com");
  arr.push(forms[0].elements[6].value);
  arr.push(forms[0].elements[5].value);
  arr.push(
    forms[0].elements[1].value +
      ", " +
      forms[0].elements[2].value +
      ", India, " +
      forms[0].elements[0].value +
      "."
  );
  sec1.style.transform = "translate(-100%,-100%)";
  forms[1].querySelector("button").disabled = false;
});
forms[1].addEventListener("submit", function (e) {
  e.preventDefault();
  sec2.style.transform = "translate(100%,100%)";
  let p = document.querySelector("#bottomPara");
  p.innerHTML = `  <p>Thank you for choosing us.</p>
            <p>Your order will be delivered soon.</p>
            <p><span>Name:</span> ${arr[0]}</p>
            <p><span>Email ID:</span> ${arr[1]}</p>
            <p><span>Mobile Number:</span> ${arr[2]}</p>
            <p><span>Address:</span> ${arr[3]},</p>
            <p>${arr[4]}</p>
            <button><a href="index.html">GO TO HOME</a></button>
        `;
  p.style.top = "5%";
  localStorage.setItem("cart", JSON.stringify([]));
});
