
const submit=document.getElementById("submit");
const pas=document.getElementById("password");
const anda=document.getElementById("incurrect");
const email=document.getElementById("email");
const first=document.getElementById("first")
const last=document.getElementById("last")
submit.addEventListener("click",()=>{
    if( pas.value=='niraj@123' && email.value=="niraj3213@gmail.com" && first.value=="niraj" && last.value=="kumar"){
        
        localStorage.setItem("email id",email.value);
        localStorage.setItem("password",pas.value);
        window.open("another.html");
    }else{
        anda.innerHTML="Password is incurrect";
    }

    if(pas.value!=='niraj@123'){
        anda.innerHTML="Password is incurrect";
    }else if(first.value!=='niraj'){
        anda.innerHTML="fist name is incurrect";
    }else if(last.value!=='kumar'){
        anda.innerHTML="last name is incurrect";
    }else if(email.value!=='niraj3213@gmail.com'){
        anda.innerHTML="Email id is incurrect";
    }



})

