/* Henter HTML-elementet der vogna skal vises */
const cart = document.getElementById("cart");

/* Henter lagret vogn fra localStorage
   Hvis det ikke finnes noe, brukes en tom liste */
let vogn = JSON.parse(localStorage.getItem("vogn")) || [];

/* Funksjon som lagrer vogna */
function lagre() {
  localStorage.setItem("vogn", JSON.stringify(vogn));
}

/* Funksjon som viser alt i vogna */
function visVogn() {

  /* Tømmer siden før vi tegner på nytt */
  cart.innerHTML = "";

  /* Hvis vogna er tom */
  if (vogn.length === 0) {
    cart.innerHTML = "<h3>Vogna er tom</h3>";
    return;
  }

  let totalPris = 0;
  let totalAntall = 0;

  /* Går gjennom alle varer i vogna */
  for (let i = 0; i < vogn.length; i++) {

    /* Regner ut pris per vare */
    let itemTotal = vogn[i].pris * vogn[i].antall;

    totalPris += itemTotal;
    totalAntall += vogn[i].antall;

    /* Lager en boks for hver vare */
    const item = document.createElement("div");
    item.classList.add("produkt");

    item.innerHTML = `
      <h3>${vogn[i].navn}</h3>
      <p>${vogn[i].pris} kr per stk</p>
      <p>Antall: ${vogn[i].antall}</p>
      <p><b>Sum: ${itemTotal} kr</b></p>
    `;

    /* Knapp for å fjerne vare */
    const fjernBtn = document.createElement("button");
    fjernBtn.innerHTML = "Fjern ";

    fjernBtn.onclick = function () {

      /* Fjerner varen fra lista */
      vogn.splice(i, 1);

      lagre();
      visVogn();
    };

    item.appendChild(fjernBtn);
    cart.appendChild(item);
  }

  /* Total boks nederst */
  const total = document.createElement("div");
  total.classList.add("produkt");

  total.innerHTML = `
    <h2>Total</h2>
    <p>Antall varer: ${totalAntall}</p>
    <p><b>Totalpris: ${totalPris} kr</b></p>
  `;

  cart.appendChild(total);
}

/* Viser vogna når siden åpnes */
visVogn();