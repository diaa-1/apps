let searchs=document.getElementById('search').value.toUpperCase();
let names=document.getElementById('name');
let rating=document.getElementById('rating');
let iconRating=document.getElementById('icon-rating');
let card=document.getElementById('card');



function search(){
    if(searchs===names.innerHTML.toUpperCase()){
       card.style.background='red';
    }
    else{
        card.style.background='black';
    }
 
}

// Json Loader for Products
let products = null;
fetch('items.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();
    })

function addDataToHTML() {
    let listProductHTML = document.querySelector('.cardsLoader');

    {
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.href = './details.html?id=' + product.id;
            newProduct.classList.add('card');
            newProduct.innerHTML =
            `<div class="img">
           
            <img src="${product.image}" alt="">
             </div>
        <div class="text">
            <p>${product.category}</p>
            <h4>${product.name}</h4>
            <div class="rating">
                <p>${product.rating}</p>
                <div class="icon">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
            </div>
          
        </div>`
            listProductHTML.appendChild(newProduct);

        });
    }
}
//Storege
function addItems(){
    const names=document.getElementById('productName').value;
    const rating=document.getElementById('productRating').value;
    const category=document.getElementById('productCategory').value;
    console.log(names);
    console.log(rating);
    console.log(category);
    
}