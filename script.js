// Liste med alle produkter i butikken
const produkter = [

  /* Hvert produkt har:
     navn = navnet på varen
     pris = hvor mye varen koster
     url = bilde til varen */
  { navn: "Eple", pris: 20, url: "https://cdn.pixabay.com/photo/2023/09/07/08/44/apple-fruit-8238633_1280.png" },
  { navn: "Banan", pris: 25, url: "https://images3.alphacoders.com/658/658610.jpg" },
  { navn: "Melon", pris: 35, url: "https://thumbs.dreamstime.com/b/fruit-isolated-white-background-melon-fruit-isolated-white-background-melon-159809164.jpg" },
  { navn: "Appelsiner", pris: 30, url: "https://www.siwskriv.no/wp-content/uploads/2022/11/Hel-appelsin-1.png" }
];

/* Henter HTML-elementet med id="display"
   Dette er området der produktene skal vises */
const display = document.getElementById("display");

/* Går gjennom alle produktene i lista */
for (let i = 0; i < produkter.length; i++) {

  /* Lager en ny div */
  const produkt = document.createElement("div");

  /* Gir div-en CSS-klassen "produkt" */
  produkt.classList.add("produkt");

  /* Legger inn HTML inni produktboksen */
  produkt.innerHTML = `

    <!-- Produktbilde -->
    <img src="${produkter[i].url}">

    <!-- Produktnavn -->
    <h3>${produkter[i].navn}</h3>

    <!-- Produktpris -->
    <p>${produkter[i].pris} kr</p>
  `;

  /* Lager en knapp */
  const kjop = document.createElement("button");

  /* Teksten på knappen */
  kjop.innerHTML = "Kjøp";

  /* Når man trykker på knappen */
  kjop.onclick = function () {

    /* Henter vogna fra localStorage
       Hvis den ikke finnes, bruk tom liste */
    let vogn = JSON.parse(localStorage.getItem("vogn")) || [];

    /* Sjekker om varen allerede finnes */
    let funnet = false;

    /* Går gjennom vogna */
    for (let j = 0; j < vogn.length; j++) {

      /* Hvis produktet finnes fra før */
      if (vogn[j].navn === produkter[i].navn) {

        /* Øk antall */
        vogn[j].antall += 1;

        funnet = true;

        break;
      }
    }

    /* Hvis produktet ikke finnes fra før */
    if (!funnet) {

      vogn.push({

        /* Produktnavn */
        navn: produkter[i].navn,

        /* Produktpris */
        pris: produkter[i].pris,

        /* Starter med 1 stk */
        antall: 1
      });
    }

    /* Lagrer vogna */
    localStorage.setItem("vogn", JSON.stringify(vogn));

    alert("Lagt til vogna");
  };

  /* Legger knappen i produktet */
  produkt.appendChild(kjop);

  /* Viser produktet på siden */
  display.appendChild(produkt);
}