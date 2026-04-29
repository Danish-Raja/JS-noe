const produkter = [
  { navn: "Eple", pris: 20, url: "https://cdn.pixabay.com/photo/2023/09/07/08/44/apple-fruit-8238633_1280.png" },
  { navn: "Banan", pris: 25, url: "https://images3.alphacoders.com/658/658610.jpg" },
  { navn: "Melon", pris: 35, url: "https://thumbs.dreamstime.com/b/fruit-isolated-white-background-melon-fruit-isolated-white-background-melon-159809164.jpg" },
  { navn: "Appelsiner", pris: 30, url: "https://www.siwskriv.no/wp-content/uploads/2022/11/Hel-appelsin-1.png" }
];

const display = document.getElementById("display");

for (let i = 0; i < produkter.length; i++) {

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
    let vogn = JSON.parse(localStorage.getItem("vogn")) || [];

    vogn.push({
      navn: produkter[i].navn,
      pris: produkter[i].pris,
      antall: 1
    });

    localStorage.setItem("vogn", JSON.stringify(vogn));

    alert("Lagt til vogna");
  };

  produkt.appendChild(kjop);

  display.appendChild(produkt);
}