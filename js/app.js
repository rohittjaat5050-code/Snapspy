// ===== Loader =====
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => loader.style.display = "none", 500);
    }, 1200);
  }
});

// ===== Typing Terminal =====
const terminal = document.getElementById("terminal");

const lines = [
  "> Initializing SnapSpy...",
  "> Loading Cyber UI...",
  "> Establishing secure session...",
  "> AI modules ready.",
  "> Dashboard online."
];

if (terminal) {
  let line = 0;
  let char = 0;

  function type() {
    if (line >= lines.length) return;

    if (char < lines[line].length) {
      terminal.textContent += lines[line].charAt(char);
      char++;
      setTimeout(type, 35);
    } else {
      terminal.textContent += "\n";
      line++;
      char = 0;
      setTimeout(type, 250);
    }
  }

  type();
}

// ===== Hero Button =====
const btn = document.querySelector(".search button");

if (btn) {
  btn.addEventListener("click", () => {
    const input = document.querySelector(".search input");

    if (!input.value.trim()) {
      alert("Please enter a username.");
      return;
    }

    localStorage.setItem("snapspy_username", input.value.trim());

    btn.textContent = "Opening...";
    btn.disabled = true;

    setTimeout(() => {
      window.location.href = "report.html";
    }, 1000);
  });
}