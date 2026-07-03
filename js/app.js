window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},2200);

});

const btn=document.getElementById("generateBtn");

if(btn){

btn.onclick=function(){

const username=document.getElementById("username").value.trim();

if(username==""){

alert("Please enter a username.");

return;

}

localStorage.setItem("snapspy_username",username);

window.location="report.html";

}

}