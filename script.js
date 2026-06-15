const clients = [
  { name: "Astra Client", file: "astra.html" },
  { name: "Nebula Client", file: "nebula.html" },
  { name: "Archimedes Client", file: "Archimedes.html" },
  { name: "Ayuncraft Client", file: "Ayuncraft.html" },
  { name: "CoderCraft Client", file: "CoderCraft.html" },
  { name: "EB Client", file: "EB.html" },
  { name: "Odd Future Client", file: "Odd-Future.html" },
  { name: "Shadow Client", file: "Shadow.html" },
  { name: "Winston Horror Client", file: "Winston-Horror.html" },
  { name: "GX Client", file: "GX-Client.html" },
  { name: "JMO Client", file: "JMO-Client.html" },
  { name: "Justin Client", file: "Justin-Client.html" },
  { name: "Kerosene Client", file: "Kerosene-Client.html" },
  { name: "Lambda Client", file: "Lambda-Client.html" },
  { name: "Lumine Client", file: "Lumine-Client.html" },
  { name: "Mega Client", file: "Mega-Client.html" },
  { name: "Nit Client", file: "Nit-Client.html" },
  { name: "Nova Client", file: "Nova-Client.html" },
  { name: "Pi Client", file: "Pi-Client.html" },
  { name: "Pixel Client", file: "Pixel-Client.html" },
  { name: "Precision CLient", file: "Precision-Client.html" },
  { name: "Prism Client", file: "Prism-Client.html" },
  { name: "Prismarine Client", file: "Prismarine-Client.html" },
  { name: "Reborn Client", file: "Reborn-Client.html" },
  { name: "Resent Client", file: "Resent-Client.html" },
  { name: "Skyfactory Client", file: "Skyfactory-client.html" },
  { name: "Solar Client", file: "Solar-Client.html" },
  { name: "Starlike Client", file: "Starlike-Client.html" },
  { name: "Tuff Client", file: "Tuff-Client.html" },
  { name: "UwU Client", file: "UwU-Client.html" },
  { name: "Zeta Client", file: "Zeta-Client.html" },
];

// ---------- STORAGE ----------
function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
}

function setFavorites(data) {
  localStorage.setItem("favorites", JSON.stringify(data));
}

function getRecent() {
  return JSON.parse(localStorage.getItem("recent") || "[]");
}

function setRecent(data) {
  localStorage.setItem("recent", JSON.stringify(data));
}

// ---------- INIT UI ----------
window.onload = () => {
  renderAll();

  const select = document.getElementById("clientSelect");
  if (select) {
    clients.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c.file;
      opt.textContent = c.name;
      select.appendChild(opt);
    });
  }
};

// ---------- RENDER ----------
function renderAll() {
  const container = document.body;

  let favs = getFavorites();
  let recent = getRecent();

  // clear old sections (keep first 2 elements if needed)
  const old = document.querySelectorAll(".section");
  old.forEach(e => e.remove());

  createSection("⭐ Favorites", favs);
  createSection("🕒 Recently Launched", recent);
}

// ---------- SECTION UI ----------
function createSection(title, list) {
  if (!list || list.length === 0) return;

  const section = document.createElement("div");
  section.className = "section";

  section.innerHTML = `
    <h2 style="margin-top:20px;">${title}</h2>
    <div style="display:flex;gap:10px;overflow-x:auto;padding:10px 0;"></div>
  `;

  const row = section.querySelector("div");

  list.forEach(file => {
    const client = clients.find(c => c.file === file);
    if (!client) return;

    const card = document.createElement("div");

    card.style.cssText = `
      min-width:160px;
      background:#1a1f2a;
      padding:10px;
      border-radius:10px;
      cursor:pointer;
      flex-shrink:0;
      position:relative;
    `;

    const isFav = getFavorites().includes(client.file);

    card.innerHTML = `
      <div style="font-weight:bold;">${client.name}</div>
      <div style="font-size:12px;opacity:0.6;">Click to launch</div>
      <button style="
        position:absolute;top:5px;right:5px;
        background:${isFav ? "gold" : "#333"};
        border:none;color:white;
        border-radius:5px;
        cursor:pointer;
      ">★</button>
    `;

    // launch
    card.onclick = (e) => {
      if (e.target.tagName === "BUTTON") return;
      launchClient(client.file);
    };

    // favorite toggle
    card.querySelector("button").onclick = (e) => {
      e.stopPropagation();
      toggleFavorite(client.file);
    };

    row.appendChild(card);
  });

  document.body.appendChild(section);
}

// ---------- FAVORITES ----------
function toggleFavorite(file) {
  let favs = getFavorites();

  if (favs.includes(file)) {
    favs = favs.filter(f => f !== file);
  } else {
    favs.push(file);
  }

  setFavorites(favs);
  renderAll();
}

// ---------- RECENT ----------
function addRecent(file) {
  let recent = getRecent();

  recent = recent.filter(f => f !== file);
  recent.unshift(file);

  if (recent.length > 10) recent = recent.slice(0, 10);

  setRecent(recent);
}

// ---------- LAUNCH ----------
function launchClient(file) {
  const win = window.open("about:blank");

  if (!win) {
    alert("Popup blocked");
    return;
  }

  addRecent(file);

  fetch("clients/" + file)
    .then(res => res.text())
    .then(html => {
      win.document.open();
      win.document.write(html);
      win.document.close();
    });
}

// ---------- EAGLER ----------
function launchEagler() {
  const win = window.open("about:blank");

  if (!win) return;

  addRecent("eagler-forge.html");

  fetch("clients/eagler-forge.html")
    .then(res => res.text())
    .then(html => {
      win.document.open();
      win.document.write(html);
      win.document.close();
    });
}
