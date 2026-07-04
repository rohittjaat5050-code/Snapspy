// ==========================
// SNAPSPY V5
// ==========================

// Matrix Background
const canvas = document.getElementById("matrix");

if (canvas) {
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener("resize", resize);

  const chars = "01SNAPSPYABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const size = 16;
  let columns = Math.floor(window.innerWidth / size);
  let drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(0,0,0,0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ff2020";
    ctx.font = size + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];

      ctx.fillText(text, i * size, drops[i] * size);

      if (drops[i] * size > canvas.height && Math.random() > 0.98) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  setInterval(draw, 35);
}

// ==========================
// Terminal Typing
// ==========================

const terminal = document.getElementById("terminal");

if (terminal) {

const lines = [

"> Booting SnapSpy...",
"> Loading Security Modules...",
"> Starting AI Engine...",
"> Encrypting Session...",
"> Demo Dashboard Ready."

];

let line = 0;
let ch = 0;

function type(){

if(line >= lines.length){

setTimeout(()=>{

terminal.innerHTML="";

line=0;
ch=0;

type();

},2500);

return;

}

if(ch < lines[line].length){

terminal.innerHTML += lines[line].charAt(ch);

ch++;

setTimeout(type,35);

}else{

terminal.innerHTML+="<br>";

line++;

ch=0;

setTimeout(type,250);

}

}

type();

}

// ==========================
// Button
// ==========================

const btn = document.querySelector(".search button");

if(btn){

btn.addEventListener("click",()=>{

const input=document.querySelector(".search input");

if(!input.value.trim()){

alert("Please enter a username.");

return;

}

alert("Demo mode: Analysis UI loaded for " + input.value);

});

}