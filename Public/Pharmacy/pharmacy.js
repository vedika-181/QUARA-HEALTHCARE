function searchMedicine()
{
  const input=document.getElementById('filter').value.toUpperCase();
  const CardContainer=document.getElementById('allcards');
  const cards= CardContainer.getElementsByClassName('card');
 


  for(let i=0; i< cards.length;i++){
    let medicine= cards[i].querySelector('h5.medicinename');

    if(medicine.innerText.toUpperCase().indexOf(input) > -1)
    {
      cards[i].style.display = "";
    }
    else{
      cards[i].style.display= "none";
    }
  }

}


let carts= document.querySelectorAll(".add-cart");
let products=[
    {
        name: '3 Ply Disposable Face Mask(Pack of 50)',
        tag: 'facemask',
        price: 380,
        inCart:0
    },
    {
        name: 'Nycil Herbal Hand Sanitizer',
        tag: 'nycil',
        price: 245,
        inCart:0
    },
    {
        name: 'Sanitizing Wipes (70 Each) Pack of 2',
        tag: 'wipes',
        price: 235,
        inCart:0
    },
    {
        name: 'Dettol Combo Pack(550ml)',
        tag: 'dettol',
        price: 376,
        inCart:0
    },
    {
        name: 'NutriLeon Calcium Vitamin D3 Tablet',
        tag: 'calcium',
        price: 331.00,
        inCart:0
    },
    {
        name: 'Zincovit Tablet',
        tag: 'zincovit',
        price: 94,
        inCart:0
    },
    {
        name: 'Revital H Woman Tablet',
        tag: 'revital',
        price: 311.00,
        inCart:0
    },
    {
        name: 'Chicnutrix Bounce Hair Recovery Complex',
        tag: 'chic',
        price: 634.00,
        inCart:0
    },
    {
        name: 'Thermometer and Pulse Oximeter',
        tag: 'digital',
        price: 1838.00,
        inCart:0
    },
    {
        name: 'Calpol Tablet',
        tag: 'calpol',
        price: 28.00,
        inCart:0
    },
    {
        name: 'Dr.Odin Digital Thermometer',
        tag: 'digi',
        price: 213.00,
        inCart:0
    },
    {
        name: 'Crocin Max',
        tag: 'crocin',
        price: 35,
        inCart:0
    },
    {
        name: 'Pampers Dry Pants(Pack of 66)',
        tag: 'pampers',
        price: 715,
        inCart:0
    },
    {
        name: 'Benadryl Kids Cough Syrup',
        tag: 'bena',
        price: 109,
        inCart:0
    },
    {
        name: 'Nasivion Kids Nasal Drop',
        tag: 'nasi',
        price: 135.00,
        inCart:0
    },
    {
        name: 'Cerelac Wheat Apple Cereal',
        tag: 'cerelac',
        price: 160.00,
        inCart:0
    }   
]
for(let i=0; i< carts.length; i++){
    carts[i].addEventListener('click', () =>{
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent=productNumbers;
    }
}

function cartNumbers(products){

    let productNumbers =localStorage.getItem('cartNumbers');
    productNumbers= parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers+1);
        document.querySelector('.cart span').textContent=productNumbers +1;
    }
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent=1;
    }
    setItems(products);
}
function setItems(products){
    let cartItems=localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);

    if(cartItems !=null){
        if(cartItems[products.tag] ==undefined){
            cartItems ={
                ...cartItems,
                [products.tag]:products
            }
        }
     cartItems[products.tag].inCart+=1;
    }
    else{
        products.inCart=1;
        cartItems={
        [products.tag]:products
    }
}
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(products){

    let cartCost=localStorage.getItem('totalCost');
    
    if(cartCost !=null)
    {
        cartCost=parseInt(cartCost);
        localStorage.setItem("totalCost",cartCost+products.price);
    }
    else{
        localStorage.setItem("totalCost",products.price);
    }
    

}
function displayCart(){
    let cartItems=localStorage.getItem("productsInCart");
    cartItems=JSON.parse(cartItems);
    let productContainer=document.querySelector(".products");
    let cartCost=localStorage.getItem('totalCost');

    if(cartItems && productContainer){
        productContainer.innerHTML='';
        Object.values(cartItems).map(item =>{
            productContainer.innerHTML +=`
            <div class="product">
            <ion-icon name="close-circle-outline"></ion-icon>
            <img src="./images/${item.tag}.jpg">
            <span class="product-title">${item.name}</span>
            </div>
            <div class="price">Rs.${item.price}.00</div>
            <div class="quantity">
            <ion-icon name="caret-back-circle-outline"></ion-icon>
            <span style="color:black">${item.inCart}</span>
            <ion-icon name="caret-forward-circle-outline"></ion-icon>
            </div>
            <div class="total">
            Rs.${item.inCart * item.price}.00
            </div>
            `;
        });

        productContainer.innerHTML +=`
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
        Basket Total
        </h4>
        <h4 class="basketTotal">
        Rs.${cartCost}.00
        </h4>
        `;
    }
}
onLoadCartNumbers();
displayCart();
