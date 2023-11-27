// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.


let choice = prompt ('Scegli pari o dispari');

let userNumber = parseInt(prompt ('Scegli un numero da 1 a 5'));
 console.log(userNumber);



function nRandom (){

    let pcNumber  = Math.floor((Math.random() * 5) + 1);

    return pcNumber;
}
console.log(nRandom());




function pariODispari (n1, n2){

    let somma = n1 + n2;

   return somma

}




pariODispari(userNumber, nRandom());

console.log(pariODispari(userNumber, nRandom()));