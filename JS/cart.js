let saved_for_later=document.querySelector("#saved_for_later");
let os_heading=document.querySelector("#os_heading")
var cart_items=JSON.parse(localStorage.getItem("cart_items"));
var product_details_2nd_div=document.querySelector("#product_details>div:nth-child(2)");
product_details_2nd_div.setAttribute("id", "added_items");
import { data } from "./data.js"
if(cart_items==null || cart_items.length==0){

    // saved_for_later.removeAttribute("id");
    // saved_for_later.setAttribute("id", "sfl_div");

  var apply_promocode=document.querySelector("#apply_promocode");
  apply_promocode.style.background="transparent";
  var payment_details=document.querySelector("#payment_details").style.background="transparent"
  product_details_2nd_div.removeAttribute("id");
  product_details_2nd_div.setAttribute("id", "empty_added_items");
  var added_items=document.querySelector("#empty_added_items");
  added_items.innerHTML="";
  document.querySelector("#slide_show").innerHTML="";
  document.querySelector("#add_to_cart_products").innerHTML="";
  document.querySelector("#apply_promocode").innerHTML="";
  document.querySelector("#payment_details").innerHTML="";
  os_heading.textContent="My Cart";
  let empty_div=document.createElement("div");
  let empty_img=document.createElement("img");
  empty_img.src="https://www.netmeds.com/msassets/images/emptycart.svg"
  let empty_div2=document.createElement("div");
  let empty_h4=document.createElement("h6");
  empty_h4.textContent="Your Cart is empty!"
  let empty_p=document.createElement("p");
  empty_p.textContent="You have no items added in the cart. Explore and add products you like!"
  empty_div2.append(empty_h4, empty_p);
  let empty_btn=document.createElement("button");
  empty_btn.textContent="ADD PRODUCTS";
  empty_div.append(empty_img, empty_div2, empty_btn);
  empty_div.setAttribute("id", "empty_div")
  added_items.append(empty_div)
  saved_for_later.removeAttribute("id")
  saved_for_later.setAttribute("id", "empty_sfl");
}
else {
  product_details_2nd_div.removeAttribute("id");
  product_details_2nd_div.setAttribute("id", "added_items");
  var added_items=document.querySelector("#added_items")
  var added_item_list=document.querySelector("#added_item_list")
  added_item_list.innerHTML="";
  cart_items.forEach((element)=>{
    var div=document.createElement("div");
    var img=document.createElement("img");
    img.src=element.product_img;
    var div2=document.createElement("div");
    var product_name=document.createElement("h4");
    product_name.textContent=element.product_name;
    var product_mfr=document.createElement("p");
    product_mfr.textContent=element.product_mfr;
    product_mfr.setAttribute("id", "product_mfr")
    var div3=document.createElement("div");
    var product_price=document.createElement("p");
    product_price.textContent=element.product_price;
    product_price.setAttribute("id", "product_price")
    var div3_1=document.createElement("div");

    var qty_text=document.createElement("p");
    qty_text.textContent="QTY:";
    qty_text.setAttribute("id", "qty_text")
    var product_quantity=document.createElement("select");
    var option1=document.createElement("option");
    option1.textContent=1;
    var option2=document.createElement("option");
    option2.textContent=2;
    var option3=document.createElement("option");
    option3.textContent=3;
    product_quantity.append(option1, option2, option3);
    div3_1.append(qty_text, product_quantity);
    div3_1.setAttribute("id", "product_quantity")
    div3.append(product_price, div3_1);
    var div4=document.createElement("div");
    var product_del_date=document.createElement("p");
    var myday=new Date().toDateString().trim().split(" ");
    product_del_date.textContent="Delivery between "+myday[1]+" "+(+myday[2]+3)+" - "+myday[1]+" "+(+myday[2]+4);
    var empty_line=document.createElement("div");

    var div4_1=document.createElement("div");
    var remove_btn=document.createElement("button");
    remove_btn.textContent="REMOVE";
    remove_btn.addEventListener("click", remove_item)
    var save_for_later_btn=document.createElement("button"); 
    save_for_later_btn.textContent="SAVE FOR LATER"
    div4_1.append(remove_btn, save_for_later_btn);

    var hr_line=document.createElement("hr");
    div4.append(product_del_date, empty_line, div4_1);
    div2.append(product_name, product_mfr, div3, div4);
    div.append(img, div2);
    added_item_list.append(div, hr_line);
  })

  function remove_item(event){
    event.target.parentNode.parentNode.parentNode.parentNode.nextSibling.remove();
    event.target.parentNode.parentNode.parentNode.parentNode.remove();
    
    // return false;
    var pn=event.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[0].textContent;
    var pp=event.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[2].childNodes[0].textContent;
    
    var new_cart_items=[];
    var cart_items=JSON.parse(localStorage.getItem("cart_items"))
    cart_items.forEach((element)=>{
      if(element.product_name==pn && element.product_price==pp){
        console.log(`item ${pn} deleted`) 
      }
      else{
        new_cart_items.push(element)
      }
    })
    var cart_items=new_cart_items;
    if(cart_items.length==0){
      location.href="cart.html";
    }
    localStorage.setItem("cart_items", JSON.stringify(cart_items))
    get_total_price();
  }

  function get_total_price() {
    var payment_details=document.querySelector("#payment_details")
  cart_items=JSON.parse(localStorage.getItem("cart_items"));
  var mrp_total=0;
  cart_items.forEach((element)=>{
    mrp_total=mrp_total+ +element.product_price.split(".")[1].trim();
  })
console.log(cart_items)
  var netmeds_discount=mrp_total/10;

  payment_details.innerHTML="";

  payment_details.innerHTML=`<h4>PAYMENT DETAILS</h4>
  <div id="mrp_total">
    <p>MRP Total</p>
    <p>Rs.${mrp_total}.00</p>
  </div>
  <div id="netmeds_discount">
    <p>Netmeds Discount</p>
    <p>-Rs.${netmeds_discount}0</p>
  </div>
  <div id="total_amount_star">
    <p>Total Amount *</p>
    <p>Rs.${mrp_total-netmeds_discount}0</p>
  </div>
  <div id="total_savings">TOTAL SAVINGS RS.${netmeds_discount}</div>
  <div id="amount_proceed">
    <div id="total_amount">
      <h5>TOTAL AMOUNT</h5>
      <h2>Rs.${mrp_total-netmeds_discount}0</h2>
    </div>
    <button id="proceed_btn">PROCEED</button>
  </div>`}

  get_total_price();

  var apply_promocode=document.querySelector("#apply_promocode");
  apply_promocode.innerHTML="";
  apply_promocode.innerHTML=`<h4>APPLY PROMOCODE / NMS SUPERCASH</h4>
  <div>
    <img src="https://www.netmeds.com/msassets/images/icons/radio_unchecked.svg" id="img_code_check">
    <div id="apply_code_text">
      <h3>Apply Promo Code</h3>
      <p>Get flat discount! Vouchers applicable in payment options.</p>
    </div>
    <img src="https://www.netmeds.com/msassets/images/icons/arrow-drop-down.svg" id="down_arrow">
  </div>`

  const img_checked_fn=()=>{

    if(img_code_check.src=="https://www.netmeds.com/msassets/images/icons/radio_unchecked.svg"){
      img_code_check.src="https://www.netmeds.com/msassets/images/icons/check_circle.svg"
    }
    else if(img_code_check.src=="https://www.netmeds.com/msassets/images/icons/check_circle.svg"){
      img_code_check.src="https://www.netmeds.com/msassets/images/icons/radio_unchecked.svg";
    }
  }

  var img_code_check=document.querySelector("#img_code_check");
  img_code_check.addEventListener("click", img_checked_fn);

  var tnc_txt=document.querySelector("#tnc_txt_div")
  tnc_txt.innerHTML="";
  tnc_txt.innerHTML=`<p id="terms_cond">
  Netmeds is a technology platform to facilitate transaction of
   business. The products and services are offered for sale by the
   sellers. The user authorizes the delivery personnel to be his
   agent for delivery of the goods. For details read <a href="#" id="blue_tnc_txt">Terms &
    Conditions</a>
</p>`;

  var add_to_cart_products=document.querySelector("#add_to_cart_products")
  add_to_cart_products.innerHTML=`<h4 id="mst_slg_prdt_hd">MOST SELLING PRODUCTS</h4>
  <div id="mst_slg_prdt_dv"></div>`;

  var mst_slg_prdt_dv=document.querySelector("#mst_slg_prdt_dv");

  data.forEach((element)=>{
    let div=document.createElement("div");
    div.setAttribute("class", "mst_slg_prd")
    let img=document.createElement("img");
    img.src=element[0];
    let name=document.createElement("h4");
    name.textContent=element[1];
    let dis_price=document.createElement("p");
    dis_price.textContent=`Rs.${element[3]}.00`;
    dis_price.setAttribute("class", "mst_slg_prd_dis_price");
    let org_price=document.createElement("p");
    org_price.textContent=`Rs.${element[4]}.00`;
    org_price.setAttribute("class", "mst_slg_org_price")
    let btn=document.createElement("button");
    btn.textContent="Add to Cart";
    btn.setAttribute("id", "mst_slg_btn")
    btn.addEventListener("click", cart_add_to_cart_fn)
    div.append(img, name, dis_price, org_price, btn);
    mst_slg_prdt_dv.append(div);
  })

  function cart_add_to_cart_fn(e){
    let each_data=e.target.parentNode.childNodes;
    let prod_name=each_data[1].textContent.trim()
    let prod_price=+each_data[2].textContent.trim().split(".")[1].trim();
    let prod_img=each_data[0].src.trim();
    
    var prod_mfr;
    data.forEach((element)=>{
      if(element[1]==prod_name && element[3]==prod_price){
        prod_mfr=`Mfr: ${element[2]}`
      }
    })
    // console.log(prod_mfr)
    
    let product_data_one={
      product_img: prod_img,
      product_name: prod_name,
      product_mfr: prod_mfr,
      product_price: `Rs. ${prod_price}`
    }
    console.log(product_data_one)
    var cart_items=JSON.parse(localStorage.getItem("cart_items"))
    if(cart_items==null){
      localStorage.setItem("cart_items", JSON.stringify([]));
      cart_items=JSON.parse(localStorage.getItem("cart_items"));

    }
    cart_items.push(product_data_one);
    localStorage.setItem("cart_items", JSON.stringify(cart_items));
  }

}
