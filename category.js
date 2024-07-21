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
