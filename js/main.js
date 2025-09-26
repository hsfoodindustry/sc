const whatsappNumber = "923001234567"; // Replace with your number

const productsData = [
    {id:1,name:"Airpods1122",price:"5000",category:"Electronics",image:"images/airpods.jpg"},
    {id:2,name:"Smart Watch",price:"3000",category:"Wearables",image:"images/smartwatch.jpg"},
    {id:3,name:"Bluetooth Speaker",price:"1500",category:"Electronics",image:"images/speaker.jpg"},
    {id:4,name:"Wireless Mouse",price:"800",category:"Accessories",image:"images/mouse.jpg"},
    {id:5,name:"VR Glasses",price:"7000",category:"Wearables",image:"images/vrglasses.jpg"}
];

let cart = [];
const productsContainer = document.getElementById("products");
const cartCount = document.getElementById("cartCount");

function loadProducts(data){
    if(!productsContainer) return;
    productsContainer.innerHTML="";
    data.forEach(product=>{
        const card = document.createElement("div");
        card.className="product-card";
        card.innerHTML=`
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>PKR ${product.price}</p>
            <button class="btn-buy" onclick="buyProduct(${product.id})">Buy Now</button>
            <button class="btn-buy btn-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(card);
    });
}
loadProducts(productsData);

function filterProducts(category){
    if(category==='all') loadProducts(productsData);
    else loadProducts(productsData.filter(p=>p.category===category));
}

function buyProduct(id){
    const product=productsData.find(p=>p.id===id);
    const message=`Hi, I am interested in this product [${product.name}]`;
    const url=`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url,"_blank");
}

function addToCart(id){
    const product=productsData.find(p=>p.id===id);
    cart.push(product);
    if(cartCount) cartCount.textContent=cart.length;
    alert(`${product.name} added to cart`);
}

const cartBtn = document.getElementById("cartBtn");
if(cartBtn){
    cartBtn.addEventListener("click", ()=>{
        if(cart.length===0){ alert("Cart is empty!"); return; }
        let message="Hi, I want to buy the following products:\n";
        cart.forEach(p=>{ message += `- [${p.name}] PKR ${p.price}\n`; });
        const url=`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url,"_blank");
    });
}

// --- Contact Form ---
function contactSubmit(e){
    e.preventDefault();
    const name=document.getElementById("contactName").value;
    const email=document.getElementById("contactEmail").value;
    const msg=document.getElementById("contactMessage").value;
    const message=`Hi, I am ${name}. My email is ${email}. Message: ${msg}`;
    const url=`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url,"_blank");
}

// --- Career Form ---
function careerSubmit(e){
    e.preventDefault();
    const name=document.getElementById("careerName").value;
    const email=document.getElementById("careerEmail").value;
    const position=document.getElementById("careerPosition").value;
    const message=`Hi, I am ${name}. My email is ${email}. Applying for position: ${position}`;
    const url=`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url,"_blank");
}
