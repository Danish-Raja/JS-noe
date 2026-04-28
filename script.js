const produkter = [
  { navn: "Eple", pris: 20, url: "https://cdn.pixabay.com/photo/2023/09/07/08/44/apple-fruit-8238633_1280.png" },
  { navn: "Banan", pris: 25, url: "https://images3.alphacoders.com/658/658610.jpg" },
  { navn: "Melon", pris: 50, url: "https://thumbs.dreamstime.com/b/fruit-isolated-white-background-melon-fruit-isolated-white-background-melon-159809164.jpg" }
];

const display = document.getElementById("display");

for (let i = 0; i < produkter.length; i++) {

  let antall = 1;

  const produkt = document.createElement("div");
  produkt.classList.add("produkt");

  produkt.innerHTML = `
    <img src="${produkter[i].url}">
    <h3>${produkter[i].navn}</h3>
    <p>${produkter[i].pris} kr</p>
  `;

  // minus knapp
  const minus = document.createElement("button");
  minus.innerHTML = "-";

  // vis antall
  const antallTekst = document.createElement("span");
  antallTekst.innerHTML = antall;

  // pluss knapp
  const pluss = document.createElement("button");
  pluss.innerHTML = "+";

  // kjøp knapp
  const kjop = document.createElement("button");
  kjop.innerHTML = "Kjøp";

  // minus funksjon
  minus.onclick = function () {
    if (antall > 1) {
      antall--;
      antallTekst.innerHTML = antall;
    }
  };

  // pluss funksjon
  pluss.onclick = function () {
    antall++;
    antallTekst.innerHTML = antall;
  };

  // kjøp funksjon
kjop.onclick = function () {
  let vogn = JSON.parse(localStorage.getItem("vogn")) || [];

  vogn.push({
    navn: produkter[i].navn,
    pris: produkter[i].pris,
    antall: antall
  });

  localStorage.setItem("vogn", JSON.stringify(vogn));

  alert("Lagt til 🧺");
};

  // legg til i produkt
  produkt.appendChild(minus);
  produkt.appendChild(antallTekst);
  produkt.appendChild(pluss);
  produkt.appendChild(kjop);

  display.appendChild(produkt);
}