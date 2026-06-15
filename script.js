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
  { name: "Precision Client", file: "Precision-Client.html" },
  { name: "Prism Client", file: "Prism-Client.html" },
  { name: "Prismarine Client", file: "Prismarine-Client.html" },
  { name: "Reborn Client", file: "Reborn-Client.html" },
  { name: "Resent Client", file: "Resent-Client.html" },
  { name: "Skyfactory Client", file: "Skyfactory-client.html" },
  { name: "Solar Client", file: "Solar-Client.html" },
  { name: "Starlike Client", file: "Starlike-Client.html" },
  { name: "Tuff Client", file: "Tuff-Client.html" },
  { name: "UwU Client", file: "UwU-Client.html" },
  { name: "Zeta Client", file: "Zeta-Client.html" }
];

window.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("clientSelect");

  clients.forEach(client => {
    const option = document.createElement("option");
    option.value = client.file;
    option.textContent = client.name;
    select.appendChild(option);
  });
});

function launchClient() {
  const select = document.getElementById("clientSelect");
  const file = select.value;

  if (!file) {
    alert("Please select a client.");
    return;
  }

  window.open("clients/" + file, "_blank");
}

function launchEagler() {
  window.open("clients/Eagler-Forge.html", "_blank");
}
