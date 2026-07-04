// ===============================
// SNAPSPY V6
// UI DEMO ONLY
// ===============================

// Matrix Background
const matrix = document.getElementById("matrix");

if (matrix) {

    for (let i = 0; i < 120; i++) {

        const s = document.createElement("span");

        s.innerHTML = Math.random() > .5 ? "1" : "0";

        s.style.left = Math.random() * 100 + "%";

        s.style.animationDuration = 4 + Math.random() * 8 + "s";

        s.style.animationDelay = Math.random() * 5 + "s";

        matrix.appendChild(s);

    }

}

// Terminal Typing

const terminal = document.getElementById("terminalText");

const lines = [

"> Initializing SnapSpy Demo...",
"> Connecting UI Modules...",
"> Loading AI Components...",
"> Verifying Dashboard...",
"> Security Layer Active...",
"> Demo Ready."

];

let i = 0;

function typeLine(){

if(!terminal) return;

if(i < lines.length){

terminal.innerHTML += lines[i] + "\n";

terminal.scrollTop = terminal.scrollHeight;

i++;

setTimeout(typeLine,700);

}else{

setTimeout(()=>{

terminal.innerHTML="";

i=0;

typeLine();

},3000);

}

}

typeLine();


// Progress Animation

const percent = document.getElementById("percent");

const bar = document.getElementById("bar");

let value = 87;

setInterval(()=>{

value++;

if(value>99) value=87;

if(percent) percent.innerHTML=value+"%";

if(bar) bar.style.width=value+"%";

},180);


// Analyze Button (Demo)

const btn = document.getElementById("analyze");

btn?.addEventListener("click",()=>{

const user=document.getElementById("username");

if(!user.value.trim()){

alert("Please enter a username.");

return;

}

alert(
"Demo Mode\n\nUsername: "
+ user.value +
"\n\nThis is a cyber dashboard demonstration."
);

});


// Card Hover Glow

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",()=>{

card.style.boxShadow="0 0 30px rgba(255,0,0,.45)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="0 0 15px rgba(255,0,0,.15)";

});

});