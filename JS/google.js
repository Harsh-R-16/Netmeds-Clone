let btn = document.querySelector("button");
let otp = localStorage.getItem("otp");
btn.addEventListener("click", function () {
  if (otp == +document.querySelector("#otp").value) {
    window.location.assign("/order.html");
    localStorage.setItem("name", document.querySelector("#fname").value);
    localStorage.setItem("lname", document.querySelector("#lname").value);
  } else {
    alert("Please Enter correct OTP.");
  }
});
// console.log();
