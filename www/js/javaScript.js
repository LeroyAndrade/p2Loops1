//tellerGenerator
let randomGenerator = Math.round(Math.random()*2);

//fruitGenerator
let fruitGenerator=["&#127813","&#127814;","&#127815;"]

//Teller pogingen
let iTeller = document.body.querySelector("#draaiTeller");
let iMaxTeller = document.body.querySelector("#maxTeller");

//Winst
let win = document.body.querySelector("#winst");

//Verlies
let verlies = document.body.querySelector("#verlies");

//Fruit0
let iFruit0 = document.body.querySelector("#grid0");

//Fruit1
let iFruit1 = document.body.querySelector("#grid1");

//Fruit2
let iFruit2 = document.body.querySelector("#grid2");

let winst=-0;
let teller = -0;
let maxTeller = 39;

function Rekenen(){
randomGenerator = Math.floor(Math.random()*2);
}

function scramble()
{
teller+=1;

iTeller.innerHTML=teller;

Rekenen();
iFruit0.innerHTML=fruitGenerator[randomGenerator];
Rekenen();
iFruit1.innerHTML=fruitGenerator[randomGenerator];
Rekenen();
iFruit2.innerHTML=fruitGenerator[randomGenerator];
win.innerHTML="Winst: u heeft: u heeft " + "<b>"+winst+"</b>"+" keer gewonnen";
iMaxTeller.innerHTML=maxTeller -=1;
jijbentEenWinnaar();
}

function gameStatus()
{
    if(iMaxTeller.innerHTML==0)
    {
      window.alert("Spel over");
      location.reload();
    }
}
function jijbentEenWinnaar()
{
  if (iFruit0.innerHTML === iFruit1.innerHTML && iFruit0.innerHTML ===iFruit2.innerHTML)
  {
    iMaxTeller.innerHTML=maxTeller;
    iTeller.innerHTML =teller;
    winst+=1;
    maxTeller-1;
    win.innerHTML="Winst: u heeft: u heeft " + "<b>"+winst+"</b>"+" keer gewonnen";
  }
  gameStatus();
}
