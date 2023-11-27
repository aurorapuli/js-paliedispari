// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// chiediamo all'utente di scegliere tra pari o dispari
let choice = prompt ('Scegli pari o dispari');

// chiediamo all'utente di inserire un numero da 1 a 5
let userNumber = parseInt(prompt ('Scegli un numero da 1 a 5'));

console.log(userNumber);

let risultato = document.getElementById('risultato');


 // creiamo funzione per ricavare un numero random

 function nRandom (){

    let pcNumber  = Math.floor((Math.random() * 5) + 1);

    return pcNumber;
}


// facciamo la funzione per chi ha vinto a dispari e pari
function pariODispari (n1){


     let somma = n1 + nRandom();

     console.log(somma);


   if(somma % 2 === 0 && n1 % 2 === 0){

       risultato.innerHTML = "Hai vinto"

   } else  if (somma % 2 === 1 && n1 % 2 === 1){

     risultato.innerHTML = "Bravo, hai vinto"

   } else{

     risultato.innerHTML = "Hai perso"
   }

   return risultato;

}




pariODispari(userNumber);

console.log(pariODispari(userNumber));