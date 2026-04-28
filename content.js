console.log("🚀 Extensión Platzi Cinema Mode cargada");

function injectCinemaButton() {
  if (document.getElementById("cinema-btn")) return;

  const btn = document.createElement("button");
  btn.id = "cinema-btn";
  btn.innerHTML = "▶ Modo Cine";
  btn.classList.add("cinema-btn-inactive");

  btn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 12px 24px;
    cursor: pointer;
    font-weight: 600;
    z-index: 10000000;
    font-size: 15px;
    border-radius: 50px;
    border: 2px solid #c9a84c;
    background: #1a1a1a;
    color: #c9a84c;
    box-shadow: 0 4px 24px rgba(0,0,0,0.6);
    transition: all 0.3s ease;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    letter-spacing: 0.5px;
  `;

  btn.onclick = (e) => {
    e.preventDefault();
    const isActive = document.body.classList.toggle("extension-cinema-mode");
    
    if (isActive) {
      btn.classList.remove("cinema-btn-inactive");
      btn.classList.add("cinema-btn-active");
      btn.innerHTML = "● Salir del cine";
      btn.style.background = "#c9a84c";
      btn.style.color = "#1a1a1a";
      btn.style.borderColor = "#c9a84c";
    } else {
      btn.classList.remove("cinema-btn-active");
      btn.classList.add("cinema-btn-inactive");
      btn.innerHTML = "▶ Modo Cine";
      btn.style.background = "#1a1a1a";
      btn.style.color = "#c9a84c";
      btn.style.borderColor = "#c9a84c";
    }
  };

  // Hover effects
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
    btn.style.boxShadow = "0 6px 32px rgba(201, 168, 76, 0.3)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
    btn.style.boxShadow = "0 4px 24px rgba(0,0,0,0.6)";
  });

  document.body.appendChild(btn);
}

setInterval(injectCinemaButton, 2000);
