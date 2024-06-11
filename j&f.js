 let card_list = document.querySelector(".cardlist");

cart_list = document.querySelector(".cartlist");

const cart = [];

let passwords = document.querySelector(".password");
let usernames = document.querySelector(".username");

const products = [
{
    name:"afang", 
    price:1500,
    image:"afang3.jpg"
},
{
    name:"Ewedu",
    price:1000,
    image:"ewedu.jpg"
},
{
    name:"Rice and beans",
    price:1500,
    image:"riceandbeans.jpg"
}, 
{
    name:"Egusi",
    price:2000,
    image:"egusi.jpeg"
},
{   name:"Apple pie",
    price: 1000, 
    image:"applepie.jpg"
},{   name:"Doughnut",
    price: 1000, 
    image:"doughnut.jpg"
},{   name:"Pizza",
    price:5000 , 
    image:"pizza.jpg"
},{   name:"Fries",
    price:1200 , 
    image:"fries.jpg"
},{   name:"Burger",
    price:2500 , 
    image:"burger.jpg"
},
{   name:"Egg roll",
    price:800, 
    image:"eggroll.jpg"
},{   name:"Puff  puff",
    price:500 , 
    image:"puffpuff.jpg"
},{   name:"Sand wich",
    price:1500 , 
    image:"sandwich.jpg"
},{   name:"Malt(pack)",
    price:2000 , 
    image:"malt.jpg"
},{   name:"Fanta (pack)",
    price:2000 , 
    image:"fanta.jpg"
},{   name:"Pepsi (pack)",
    price:2100 , 
    image:"pepsi.jpg"
}
]
function bodytag(){
let totalproduct= "";
products.forEach((product)=>{
    totalproduct += `
   <div id="menuu">
    <img src="${product.image}" width="80px">
    <h3>${product.name}</h3>
    <p>N${product.price}</p>
    <button class="addcart" data-product-name="${product.name}">Add to cart</button>
    </div>
    `
    let menu = document.getElementById("choice");
    menu.innerHTML= totalproduct;
});


        let btn = document.querySelectorAll(".addcart");
        btn.forEach((btns)=>{
            btns.addEventListener("click", ()=>{
                cart.push(btns.dataset.productName);
        let carthtml = "";
        cart.forEach((cards)=>{
                carthtml+=`<p>${cards}</p>
        ` });
            card_list.innerHTML = carthtml;
                
            });
            
            
        });
        }

function opens(){
    cart_list.style.display = "grid";
    console.log("opening");
} 


function close_cart(){
    console.log("hello boss");
    cart_list.style.display = "none";
}

function login(){
    if(passwords.value ==="jean" && usernames.value ==="jean" ){
        console.log('i am jean');
        window.location.href="jean.html";
    }
}