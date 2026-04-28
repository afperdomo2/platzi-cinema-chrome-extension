console.log("🚀 Extensión Platzi Cinema Mode cargada");

function injectCinemaButton() {
  if (document.getElementById("cinema-btn")) return;

  const btn = document.createElement("button");
  btn.id = "cinema-btn";
  btn.innerHTML = "🎬 MODO CINE";

  btn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #98ca3f;
    color: #000;
    border: none;
    padding: 12px 18px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 8px;
    z-index: 10000000;
    font-size: 14px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
  `;

  btn.onclick = (e) => {
    e.preventDefault();
    const isActive = document.body.classList.toggle("extension-cinema-mode");
    btn.innerHTML = isActive ? "📺 MODO NORMAL" : "🎬 MODO CINE";
  };

  document.body.appendChild(btn);
}

setInterval(injectCinemaButton, 2000);
