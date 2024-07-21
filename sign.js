let email=document.getElementById('email');
let names=document.getElementById('name');
let password=document.getElementById('password');
let btn=document.getElementById('btn');
let info=[];
if(localStorage.userInfo!=null){
info=JSON.parse(localStorage.userInfo);
}


else{

     info=[];
}
btn.onclick=function(){
    let user={
        name:names.value,
        password:password.value,
        email:email.value,
    }

    info.push(user);
    localStorage.setItem('userInfo',JSON.stringify(info));
    clear();
  
}

function clear(){
    email.value='';
    names.value='';
    password.value='';
   
    }
    