//Generator
let randomGenerator = Math.round(Math.random()*2);

//Teller pogingen
let iTeller = document.body.querySelector("#draaiTeller");

//Fruit
let ib = document.body.querySelector("#grid0");

let fruitGenerator=["&#127813","&#127814;","&#127815;"]

let teller = -0;
let max= 100;
let teksten = [];

function Rekenen(){
return randomGenerator = Math.floor(Math.random()*2);
}

function scramble()
{
teller+=1;


iTeller.innerHTML=fruitGenerator[randomGenerator];
Rekenen();
ib.innerHTML=fruitGenerator[randomGenerator];
}
