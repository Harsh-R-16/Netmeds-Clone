let inp = document.querySelector("#number");
console.log(inp);

let btn = document.querySelector(".otp_btn");
console.log(btn);
let a = Math.round(Math.random() * 10000 + 123456);
btn.addEventListener("click", () => {
  if (inp.value) {
    localStorage.setItem("otp", a);
    alert("Your OTP is " + a + ".");
    window.location.assign("/google.html");
  }
});
