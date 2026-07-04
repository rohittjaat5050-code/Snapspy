// ===============================
// SNAPSPY V7
// Cyber Security Dashboard Demo
// ===============================

// MATRIX EFFECT
const canvas = document.getElementById("matrix");

if (canvas) {

const ctx = canvas.getContext("2d");

function resize() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resize();

window.addEventListener("resize", resize);

const letters =
"SNAPSPY01ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const fontSize = 16;

let columns = Math.floor(canvas.width / fontSize);

let drops = Array(columns).fill(1);

function draw() {

ctx.fillStyle = "rgba(0,0,0,0.06)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#ff2020";
ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){

const text=
letters[Math.floor(Math.random()*letters.length)];

ctx.fillText(
text,
i*fontSize,
drops[i]*fontSize
);

if(
drops[i]*fontSize>canvas.height &&
Math.random()>0.975
){

drops[i]=0;

}

drops[i]++;

}

}

setInterval(draw,35);

}

// ===============================
// TERMINAL
// ===============================

const terminal =
document.getElementById("terminalText");

if(terminal){

const lines=[

"> Booting SnapSpy V7...",

"> Initializing AI Engine...",

"> Loading Dashboard...",

"> Establishing Secure Session...",

"> Demo Interface Ready.",

];

let l=0;
let c=0;

function typing(){

if(l>=lines.length){

setTimeout(()=>{

terminal.innerHTML="";
l=0;
c=0;
typing();

},2500);

return;

}

if(c<lines[l].length){

terminal.innerHTML+=lines[l].charAt(c);

c++;

setTimeout(typing,30);

}else{

terminal.innerHTML+="\n";

l++;
c=0;

setTimeout(typing,250);

}

}

typing();

}

// ===============================
// PROGRESS BAR
// ===============================

const bar =
document.querySelector(".bar");

let value=70;

setInterval(()=>{

value++;

if(value>95){

value=70;

}

if(bar){

bar.style.width=value+"%";

}

},180);

// ===============================
// ANALYZE BUTTON
// ===============================

const btn =
document.getElementById("analyze");

if(btn){

btn.onclick=()=>{

const user=
document.getElementById("username");

if(!user.value.trim()){

alert("Please enter a username.");

return;

}

alert(
"Demo Mode\n\nUser: "
+user.value+
"\n\nCyber dashboard visualization loaded."
);

};

}

// ===============================
// CARD HOVER
// ===============================

document.querySelectorAll(".card,.panel")
.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-6px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

// ===============================
// PAGE FADE
// ===============================

window.addEventListener("load",()=>{

document.body.style.opacity="0";

document.body.style.transition="opacity .8s";

setTimeout(()=>{

document.body.style.opacity="1";

},50);

});