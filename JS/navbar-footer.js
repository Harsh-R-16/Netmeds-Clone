let navbar = document.querySelector("nav");
navbar.innerHTML = `<section id="top">
            <img src="https://www.netmeds.com/assets/gloryweb/images/home-logo-netmeds-new.svg" alt="">
            <div>
                <p>Deliver to <span id="zipCode">110002</span><i class='fa fa-chevron-down'></i></p>
                <p id="line">|</p>
                <input type="text" placeholder="Search for medicine & wellness products...">
            </div>
            <p><i class="fa fa-upload"></i> Upload</p>
            <p><i class='fa fa-shopping-cart'></i> Cart</p>
            <p><i class='fas fa-user-edit'></i> Sign in / Sign up</p>
        </section>
        <section id="middle">
            <p class="drop-p">
                <span><img
                        src="https://th.bing.com/th/id/OIP.kdCSK04x60LCmnn9gzs-lAHaFj?w=221&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                        alt=""></span>
                Medicine<i class='fa fa-caret-down'></i>
<span class="drop display">- All Medicines<br>- Previously Orderd<br>- All Products</span>
            </p>
            <p>
                <span><img
                        src="https://th.bing.com/th/id/OIP.94Is_rsEu77WRdiYoDFGEQHaHa?w=167&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                        alt=""></span>
                Wellness
            </p>
            <p>
                <span><img
                        src="data:image/jpeg;base64,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"
                        alt=""></span>
                Lab Tests
            </p>
            <p class="drop-p">
                <span><img
                        src="https://th.bing.com/th/id/OIP.kdCSK04x60LCmnn9gzs-lAHaFj?w=221&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                        alt=""></span>
                Beauty <i class='fa fa-caret-down'></i>
                <span class="drop display">- Personal Care<br>
                - Make-Up<br>- Hair<br>- Skin Cares<br>
                - Mom & Baby
                <br>- Appliance<br>- Fragrances<br>- Men's Grooming
                </span>
            </p>
            <p class="drop-p">
                <span><img
                        src="https://th.bing.com/th/id/OIP.94Is_rsEu77WRdiYoDFGEQHaHa?w=167&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                        alt=""></span>
                Health Corner <i class='fa fa-caret-down'></i>
                <span class="drop display">- Health Library<br>
            - Corona Awaerness<br>- Patients Alike</span>
            </p>

        </section>
        <section id="bottom">
            <a href="#">COVID Essentials</a>
            <a href="#">Diabetes</a>
            <a href="#">Eyewear</a>
            <a href="#">Ayush</a>
            <a href="#">Fitness</a>
            <a href="#">Mom & Baby</a>
            <a href="#">Devices</a>
            <a href="#">Surgicals</a>
            <a href="#">Sexual Wellness</a>
            <a href="#">Treatments</a>
        </section>`;

let footer = document.querySelector("footer");
footer.innerHTML = `<section>
            <img src="https://www.netmeds.com/assets/gloryweb/images/netmeds-footer-logo.svg" alt="">
            <p id="grey-para">Netmeds.com, India Ki Pharmacy, is brought to you by the Dadha & Company – one of India’s
                most trusted
                pharmacies, with
                over 100 years’ experience in dispensing quality medicines.</p>
        </section>
        <section>
            <div>
                <p>COMPANY</p>
                <ul>
                    <li>About Metmeds</li>
                    <li>Coustomers Speak</li>
                    <li>In the News</li>
                    <li>Career</li>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Fees and Payments Policy</li>
                    <li>Shipping and Delivery Policy</li>
                    <li>Return, Refund and Cancellations Policy</li>
                    <li>Contact</li>
                </ul>

            </div>
            <div>
                <p>SHOPPING</p>
                <ul>
                    <li>Browse by A-Z</li>
                    <li>Browse by Manufacturers</li>
                    <li>Health Articles</li>
                    <li>Offers / Coupons</li>
                    <li>FAQs</li>
                </ul>

            </div>
            <div>
                <p>SOCIAL</p>
                <ul>
                    <li>Patients Alike</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                    <li>Youtube</li>
                    <li>Refer & Earn</li>
                </ul>
            </div>
            <div>
                <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                <p id="second-para">Get a free subscription to our health and fitness tip and stay tuned to our latest
                    offers</p>
                <p id="inp-arrow"><input type="text" placeholder="Enter your email address"><i class='fas fa-long-arrow-alt-right'></i></p>
                <button>
                    <i class='fa fa-google'></i>
                    <span>GET IT ON</span>
                    <p>Google Play</p>
                </button>
                <button>
                    <i class='fa fa-apple'></i><span>Download on the</span>
                    <p>App Store</p>
                </button>
            </div>
        </section>
        <section>
            <a>Medicine</a>
            <a>Wellness</a>
            <a>Lab Tests</a>
            <a>Beauty</a>
            <p>Copyright© 2022. All Rights Reserved.</p>
        </section>`;

let dropP = document.querySelectorAll(".drop-p");
dropP.forEach((i) => {
  i.addEventListener("mouseover", function (e) {
    i.lastElementChild.classList.remove("display");
  });
});
dropP.forEach((i) => {
  i.addEventListener("mouseleave", function (e) {
    i.lastElementChild.classList.add("display");
  });
});
