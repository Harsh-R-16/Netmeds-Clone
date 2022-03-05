import { data } from "./data.js";
let id = localStorage.getItem("singleId") - 100;
let index;
for (let i = 0; i < data.length; i++) {
  if (data[i][5] == id) {
    index = i;
    break;
  }
}
console.log(index);
document.querySelector("#link-url").innerHTML = `Home > ${localStorage.getItem(
  "url"
)} > ${data[index][1]}`;
let d = Math.round((1 - data[index][3] / data[index][4]) * 100);
let product = document.querySelector("#productGrid");
product.innerHTML = ` <article>
                <img src=${data[index][0]}
                   id="main-img" alt="">
                <div id="b-img">
                    <img src="https://media.istockphoto.com/photos/aerial-sunset-view-at-landmark-81-is-a-super-tall-skyscraper-in-ho-picture-id1346481055?b=1&k=20&m=1346481055&s=170667a&w=0&h=cfEP6y09hdZYgqVgpPeGGOAtxeK_Oou-4JySpaIdTCQ="
                        alt="">
                    <img src="https://www.netmeds.com/images/product-v1/600x600/958409/status_n95_face_mask_white_pack_of_20_3_1.jpg"
                        alt="">
                    <img src="https://www.netmeds.com/images/product-v1/600x600/959012/detelpro_juren_oxygen_concentrator_1_7_lpm_1s_0_0.jpg"
                        alt="">
                    <img src="https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="">
                    <img src="https://www.netmeds.com/images/product-v1/600x600/958677/shake_handz_e_alcohol_hand_rub_with_flicap_500_ml_500_ml_1_0.jpg"
                        alt="">
                </div>
            </article>
            <article>
                <h1>${data[index][1]}</h1>
                <span>Covid Essentials</span><span>Travel Essentials</span>
                <i class='fa fa-heart'></i>
                <hr>
                <p id="sprice">Best Price* <span>₹ ${data[index][3]}</span></p>
                <p id="aprice">MRP <span>₹ ${data[index][4]}</span> <span>GET ${d}% OFF</span></p>
                <p>(Inclusive of all taxes)</p>
                <li>*This product cannot be returned for a refund or exchange.</li>
                <li>* Mkt: ${data[index][2]}</li>
                <li>* Country of Origin: India</li>
                <li>* Delivery charges if applicable will be applied at checkout</li>
                <button>ADD TO CART</button>
                <hr>
                <p>Check Availability & Expiry</p>
                <p id="pinCode">PINCODE: <span>110002</span> <i class='fa-solid fa-circle-arrow-right'></i></p>
                <p>OFFERS APPLICABLE</p>
                <div>
                    <img src="https://th.bing.com/th/id/OIP.Uu0Y8byM39qnWmHLGH0lHAHaFs?w=257&h=198&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                        alt="">
                    <p>You get 30% OFF on this product (MASAI30)</p>
                    <span>offer applied</span>
                </div>
            </article>`;

let div = product.querySelectorAll("#b-img img");
div.forEach((item) => {
  item.addEventListener("click", function () {
    product.querySelector("#main-img").src = item.src;
  });
});
