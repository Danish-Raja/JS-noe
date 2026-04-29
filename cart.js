const cart = document.getElementById("cart");

let vogn = JSON.parse(localStorage.getItem("vogn")) || [];

function lagre() {
  localStorage.setItem("vogn", JSON.stringify(vogn));
}

function visVogn() {
  cart.innerHTML = "";

  if (vogn.length === 0) {
    cart.innerHTML = "<h3>Vogna er tom</h3>";
    return;
  }

  let totalPris = 0;
  let totalAntall = 0;

  for (let i = 0; i < vogn.length; i++) {

    let itemTotal = vogn[i].pris * vogn[i].antall;

    totalPris += itemTotal;
    totalAntall += vogn[i].antall;

    const item = document.createElement("div");
    item.classList.add("produkt");

    item.innerHTML = `
      <h3>${vogn[i].navn}</h3>
      <p>${vogn[i].pris} kr per stk</p>
      <p>Antall: ${vogn[i].antall}</p>
      <p><b>Sum: ${itemTotal} kr</b></p>
    `;

    // Fjern knapp
    const fjernBtn = document.createElement("button");
    fjernBtn.innerHTML = "Fjern 🗑️";

    fjernBtn.onclick = function () {
      vogn.splice(i, 1);
      lagre();
      visVogn();
    };

    item.appendChild(fjernBtn);
    cart.appendChild(item);
  }

  // TOTAL INFO
  const total = document.createElement("div");
  total.classList.add("produkt");

  total.innerHTML = `
    <h2>Total</h2>
    <p>Antall varer: ${totalAntall}</p>
    <p><b>Totalpris: ${totalPris} kr</b></p>
  `;

  cart.appendChild(total);
}

visVogn();