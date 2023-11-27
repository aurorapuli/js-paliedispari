// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// Chiedo all'utente di inserire un nome
// let userWord = prompt('Inserisci una parola');

// creo la funzione in cui stabilisco se la parola è polindroma 

function wordPalindroma(word) {

    // inverto la parola scritta 

    let wordReverse = word.split('').reverse().join('');

    // stabilisco le opzioni
    let risultato;

    if (userWord === wordReverse){
        risultato = "la parola è palindroma"

    } else{

        risultato = "la parola non è palindroma"
    }
    
    return risultato;
}



wordPalindroma (userWord);

// console.log(wordPalindroma(userWord));