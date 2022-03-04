let list = document.querySelector(".menu");

let data1 = ["Ayush", "Fitness", "Mom & Baby", "Sexual Wellness", "Treatments", "Devices", "Health Conditions", "Otc Deals", "Eyewear", 
"Covid Essentials", "Surgical ", "Diabetes Support", "Fragrances ", "Make-Up", "Hair", 
"Men's Grooming", "Skin Care", "Tools & Appliances", "Wellness", "Personal Care"]

data1.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = item;

    list.appendChild(li);
});


let list2 = document.querySelector(".Categories_list")

let data2 = ["Mask(308)", "Personal & Home Essentials(154)", "Business Essentials(146)", "Immunity Booster(52)", "Travel Essentials(13)"]

data2.forEach((item) => {
    let li2 = document.createElement("li");
    li2.innerHTML = "<input type='checkbox'> " + item;
    list2.appendChild(li2);
})

let Manu_list = document.querySelector(".manufacturers_list")

let data3 = [" 1 Mile Healthcare (51)", " Advind Healthcare India Pvt. Ltd. (44)", " Advind Healthcare India Pvt. Ltd. (44)", " Advind Healthcare India Pvt. Ltd. (44)", "Livinguard Technologies Pvt. Ltd. (31)",
"Boldfit (28)", "Orient Exports Private Limited (28)","Reckitt Benckiser India Ltd (19)",
"West Coast Pharmaceuticals Works Ltd (16)","Axio Biosolutions Pvt.Ltd. (14)","Requity Applied Sciences Pvt Ltd (14)","Reliance Retail Limited (12)",
"Itc India Ltd (11)","Redroom Technology Private Limited (11)","Rising Sun Enterprise (11)","San Nap Healthcare (11)",
"Sahyog Wellness (10)","CRESCENZIA TRADETECH PVT LTD. (9)","Inlife Pharma Private Limited (9)",
"Medipride (9)","Medisales India Pvt Ltd (9)","Romsons Scientific & Surgical Pvt Ltd (9)",
"Antrix Health Care Pvt. Ltd. (8)","Chinar Forge Ltd. (8)","ENETSTUDIOZ INC (8)",
"Inventz Lifesciences Pvt Ltd (8)","Schulke India Pvt Ltd (8)","Sirona Hygiene Private Limited (8)",
"Visionaari LLP (8)", "Cipla Ltd(Otc) (7)",
"Piramal Healthcare Ltd (7)", "PASSIM MEDICHEM AGENCIES (6)",
"The Mask Lab (6)","Yakhi Retail (6)","Aditya Birla Fashion And Retail Limited (5)",
"Ansell India (5)","Eliph Nutrition Pvt Ltd (5)","Microgo LLP (5)",
"SFT Technologies Pvt. Ltd. (5)","Sanmed Healthcare Pvt Ltd (5)","Skyra Professional Equipment Pvt. Ltd (5)",
"Aeronutrix Sports Products Private Limited (4)","Airwell Enterprises (4)","Dhanvantari Nano Ayushadi (4)",
"Dispo Concept Pvt Ltd (4)","GRD Pharmaceuticals (4)","Genus Apparels Limited (4)",
"Helyxon Healthcare Solutions Pvt Ltd (4)","Kamadgiri Fashion Ltd. (4)","Kee Healthcare Private Limited (4)","Medichems (4)",
]

data3.forEach((item) => {
    let li3 = document.createElement("li");
    li3.innerHTML = "<input type='checkbox'>" + item;
    Manu_list.appendChild(li3);
})

// brand list 

let brand_list = document.querySelector(".brandlist");

let data4 = ["1Mile (51)","Advind Healthcare (44)","Care View (31)","Livinguard (31)","Boldfit (28)",
    "Shield Xtra (5)"]

    data4.forEach((item) => {
        let li4 = document.createElement("li");
        li4.innerHTML = "<input type='checkbox'>" + item;
        brand_list.appendChild(li4);
    })

// arr

var arr =  [
        [
          "https://www.netmeds.com/images/product-v1/150x150/930971/skin_elements_face_pack_turmeric_multani_mitti_100_gm_0_2.jpg",
          "Skin Elements Face Pack - Turmeric & Multani.",
          "Ayur Herbals",
          247,
          260,
        ],
        [
          "https://www.netmeds.com/images/product-v1/150x150/959727/hashmi_vetoll_xl_capsule_20s_0_0.jpg",
          "Hashmi Vetoll XL Capsule 20's",
          "Blossom Kochhar Beauty",
          184,
          205,
        ],
        [
          "https://www.netmeds.com/images/product-v1/150x150/959708/hashmi_hard_rock_capsule_20s_0_0.jpg",
          "Hashmi Multani Rock 20's",
          "Nivea India Pvt Ltd",
          189,
          199,
        ],
        [
          "https://www.netmeds.com/images/product-v1/150x150/924985/skin_elements_mens_intimate_wash_60_ml_0_2.jpg",
          "Skin Elements Men's Intimate Wash 60ml",
          "Ayur Herbals",
          247,
          399,
        ],
        [
          "https://www.netmeds.com/images/product-v1/150x150/924992/skin_elements_mens_intimate_wash_120_ml_0_2.jpg",
          "Skin Elements Men's Intimate Wash 160ml",
          "Blossom Kochhar Beauty",
          166,
          175,
        ],
        [
          "https://www.netmeds.com/images/product-v1/150x150/927520/prolixr_daily_essentials_bundle_0_0.jpg",
          "Prolixr Daily Essentials Bundle",
          "Ayur India Pvt",
          337,
          375,
        ],
        [
          "https://www.netmeds.com/images/product-v1/150x150/927532/prolixr_definite_detox_bundle_0_0.jpg",
          "Prolixr Definite Essential Bundle",
          "Pt Invent India Pvt",
          337,
          375,
        ],
        [
          "https://www.netmeds.com/images/product-v1/150x150/835774/accu_chek_instant_test_strips_50_s_0.jpg",
          "Accu-check test Strip",
          "Patanjali Herbals",
          161,
          170,
        ],
        [
          "https://www.netmeds.com/images/product-v1/150x150/38061/b_protin_nutritional_powder_supplement_chocolate_500_gm_0.jpg",
          "B-Protin Nutritional Powder",
          "Blossom Kochhar Beauty",
          450,
          450,
        ],
        [
          "https://www.netmeds.com/images/product-v1/150x150/853021/ducray_anaphase_anti_hair_loss_complement_shampoo_100_ml_0_3.jpg",
          "Ducray Anaphase + Anti-Hair Loss Complement Shampoo",
          "Pvt India Pvt",
          260,
          500,
        ],
        [
          "https://www.netmeds.com/images/product-v1/150x150/14608/nestle_peptamen_peptide_based_diet_powder_vanilla_flavour_400_gm_tin_0_1.jpg",
          "Nestle Peptamen  Poweder - Vanilla Flavour 400",
          "Ayur Herbals",
          247,
          260,
        ],
        [
          "https://www.netmeds.com/images/product-v1/150x150/362506/scalpe_plus_anti_dandruff_shampoo_75_ml_0_1.jpg",
          "MilkShake Prolixr Powder",
          "Blossom Kochhar Beauty",
          184,
          205,
        ],
        [
          "https://www.netmeds.com/images/product-v1/150x150/413072/ensure_diabetes_care_powder_vanilla_flavour_400_gm_pet_jar_0.jpg",
          "MilkShake Prolixr Powder",
          "Nivea India Pvt Ltd",
          189,
          199,
        ],
        [
          "https://www.netmeds.com/images/product-v1/150x150/914676/accu_chek_guide_test_strip_50s_0_1.jpg",
          "MilkShake Prolixr Powder",
          "Ayur Herbals",
          247,
          399,
        ],
        [
          "https://www.netmeds.com/images/product-v1/150x150/38061/b_protin_nutritional_powder_supplement_chocolate_500_gm_0.jpg",
          "Scalpe Plus Anti Dandruff 75ml",
          "Blossom Kochhar Beauty",
          166,
          175,
        ],
        [
          "https://www.netmeds.com/images/product-v1/150x150/38061/b_protin_nutritional_powder_supplement_chocolate_500_gm_0.jpg",
          "Ensure Diabets Care Powder",
          "Ayur India Pvt",
          337,
          375,
        ],
        [
          "https://www.netmeds.com/images/product-v1/150x150/902372/ensure_diabetes_care_powder_vanilla_flavour_1_kg_refill_pack_0_0.jpg",
          "Ensure Diabets Care Powder",
          "Pt Invent India Pvt",
          337,
          375,
        ],
]


let items = document.querySelector(".shop_by_category");


arr.slice(0,6).forEach( (ele) => {
    let items_inShopCategory = document.createElement("div");
    let items_img = document.createElement("img");
    let random = Math.floor(Math.random()*100);


    let dis = document.createElement("span");
    dis.innerHTML = "UPTO " + random + "%";
    dis.style.position = "absolute";
    dis.style.top="335px";
    dis.style.textAlign = "center";
    dis.style.color ="green";
    dis.style.fontWeight = "bold";

    let item_name = document.createElement("span");
    item_name.textContent = ele[2].slice(0,15) + "..";
    item_name.style.position = "absolute";
    item_name.style.top = "319px";
    item_name.style.overflow ="hidden";
    item_name.style.fontWeight = "bold";
    

        items_img.src = ele[0];
        items_inShopCategory.append(items_img, item_name, dis);
        items.append(items_inShopCategory);
        console.log(ele[2])
    
});


// show 8 products 

let products_8 = document.querySelector(".all_products");

arr.slice(0,8).forEach( (ele) => {
    let items_inShopCategory = document.createElement("div");
    items_inShopCategory.style.display = "flex";
    items_inShopCategory.style.flexDirection = "column";
    items_inShopCategory.style.alignItems = "left";
    items_inShopCategory.style.padding = "10px";

    let items_img = document.createElement("img");


    let item_name = document.createElement("h6");
    item_name.textContent = ele[1];
    item_name.style.fontWeight = "bold";

    let item_manf = document.createElement("span");
    item_manf.textContent = "Mkt:"+ele[2];
    item_manf.style.marginTop = "10px";
    
    let price = document.createElement("p");
    price.innerHTML = "Best price* <span style='color:red; font-size:18px'> Rs" + ele[3] +".00</span>";
    price.fontSize = "20px";

    let mrp = document.createElement("p");
    mrp.innerHTML = "MRP <s>Rs." + ele[4] + ".00 </s>";

    let addToCart = document.createElement("button");
    addToCart.textContent = "ADD TO CART";
    addToCart.style.backgroundColor = "#24aeb1";
    addToCart.style.color = "white";
    addToCart.style.border = "none";
    addToCart.style.padding = "10px";
    addToCart.style.fontWeight = "bold";
    addToCart.style.borderRadius = "2px";

    let random = Math.floor(Math.random()*100);
    let discount_tag = document.createElement("div");
    discount_tag.innerHTML = "<span style='color:white; background-color:green; padding:2px; display:flex; width:55px; position: absolute; >"+ random +"% OFF</span>"

    items_img.src = ele[0];
    items_inShopCategory.append(items_img, item_name, item_manf, price, mrp, addToCart, discount_tag);
    products_8.append(items_inShopCategory, );
    
    console.log(ele[3])
});


