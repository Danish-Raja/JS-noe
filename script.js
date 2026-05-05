console.log("Script startet");

/* Liste med alle produkter i butikken */
const produkter = [
  { navn: "Eple", pris: 20, url: "https://cdn.pixabay.com/photo/2023/09/07/08/44/apple-fruit-8238633_1280.png" },
  { navn: "Banan", pris: 25, url: "https://images3.alphacoders.com/658/658610.jpg" },
  { navn: "Melon", pris: 35, url: "https://thumbs.dreamstime.com/b/fruit-isolated-white-background-melon-fruit-isolated-white-background-melon-159809164.jpg" },
  { navn: "Appelsiner", pris: 30, url: "https://www.siwskriv.no/wp-content/uploads/2022/11/Hel-appelsin-1.png" }
];

console.log("Produkter lastet:", produkter);

/* Henter HTML-elementet */
const display = document.getElementById("display");
console.log("Display funnet:", display);

/* Går gjennom alle produktene i lista */
for (let i = 0; i < produkter.length; i++) {

  console.log("Lager produkt:", produkter[i].navn);

  const produkt = document.createElement("div");
  produkt.classList.add("produkt");

  produkt.innerHTML = `
    <img src="${produkter[i].url}">
    <h3>${produkter[i].navn}</h3>
    <p>${produkter[i].pris} kr</p>
  `;

  const kjop = document.createElement("button");
  kjop.innerHTML = "Kjøp";

  kjop.onclick = function () {

    console.log("Kjøp trykket:", produkter[i].navn);

    let vogn = JSON.parse(localStorage.getItem("vogn")) || [];
    console.log("Vogn hentet:", vogn);

    let funnet = false;

    for (let j = 0; j < vogn.length; j++) {

      console.log("Sjekker produkt i vogn:", vogn[j].navn);

      if (vogn[j].navn === produkter[i].navn) {

        console.log("Produkt finnes allerede, øker antall");

        vogn[j].antall += 1;

        console.log("Nytt antall:", vogn[j].antall);

        funnet = true;
        break;
      }
    }

    if (!funnet) {

      console.log("Legger til nytt produkt i vogn");

      vogn.push({
        navn: produkter[i].navn,
        pris: produkter[i].pris,
        antall: 1
      });
    }

    localStorage.setItem("vogn", JSON.stringify(vogn));
    console.log("Vogn lagret:", vogn);

    alert("Lagt til vogna");
  };

  produkt.appendChild(kjop);
  display.appendChild(produkt);

  console.log("Produkt lagt til på siden");
}