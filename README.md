# JS-noe


kobling mellom html og js i <head>
<script src="script/script.js" defer></script>

kobling mellom html og js i <body>
<script src="script/script.js" ></script>

- console.log() = skriver en melding til konsollen
- alert("Tekst") = lager en diagonal boks med melding
- Const = betyr constant = fart
- let = kan endre



console.log("HEI")

const a = 1

const b = 66

const c = a + b

console.log(c)
;
const knapp = document.getElementById('knapp');

function siHei(){alert('HEI')};

knapp.addEventListener('click', siHei);

for(let i = 0; i < 11; i++){
    console.log(i)
};  

#knapp{
    height: 100px;
    width: 100px;
}

button:hover{
    color: white;
}