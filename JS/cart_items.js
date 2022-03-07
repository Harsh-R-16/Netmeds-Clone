const get_added_item_fn=(added_items)=>{
    
    let product_img=added_items[1].src
    let product_name=added_items[3].textContent
    let product_mfr=added_items[5].textContent
    let product_price=added_items[7].textContent
  
    let product_details_obj={
      product_img: product_img,
      product_name: product_name,
      product_mfr: 'Mfr: '+ product_mfr.trim().split(":")[1].trim(),
      product_price: product_price.trim().split(":")[1].trim()
    }
    // console.log(product_details_obj)
    
    let cart_items=JSON.parse(localStorage.getItem("cart_items"));
    if(cart_items==null){
      localStorage.setItem("cart_items", JSON.stringify([]));
      cart_items=JSON.parse(localStorage.getItem("cart_items"));
    }
    cart_items.push(product_details_obj);
    localStorage.setItem("cart_items", JSON.stringify(cart_items));
    
  }

export { get_added_item_fn }