const clients = [
  { name: "Astra Client", file: "astra.html" },
  { name: "Nebula Client", file: "nebula.html" }
];

// fill dropdown on load
window.onload = () => {
  const select = document.getElementById("clientSelect");

  clients.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.file;
    opt.textContent = c.name;
    select.appendChild(opt);
  });
};

function launchClient() {
  const file = document.getElementById("clientSelect").value;

  const win = window.open("about:blank");

  if (!win) {
    alert("Popup blocked");
    return;
  }

  fetch("clients/" + file)
    .then(res => res.text())
    .then(html => {
      win.document.open();
      win.document.write(html);
      win.document.close();
    })
    .catch(() => {
      win.document.write("<h1>Failed to load client</h1>");
    });
}

function launchEagler() {
  const win = window.open("about:blank");

  if (!win) {
    alert("Popup blocked");
    return;
  }

  fetch("clients/eagler-forge.html")
    .then(res => res.text())
    .then(html => {
      win.document.open();
      win.document.write(html);
      win.document.close();
    })
    .catch(() => {
      win.document.write("<h1>Failed to load Eagler Forge</h1>");
    });
}
