// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// Chiedo all'utente di inserire un nome
 let userWord = document.getElementById('input');
 let sendButton = document.getElementById('button');
 

// creo la funzione in cui stabilisco se la parola è polindroma 
sendButton.addEventListener ('click', function () {

    function wordPalindroma(word) {

        // inverto la parola scritta 
    
        let wordReverse = word.split('').reverse().join('');
    
        // stabilisco le opzioni
        let risultato = document.getElementById('risultato');
    
        if (word === wordReverse){
            risultato.innerHTML = "La parola è palindroma"
    
        } else{
    
            risultato.innerHTML = "La parola non è palindroma"
        }
        
        return risultato;
    }
    
    
    
    wordPalindroma (userWord.value);

    console.log(wordPalindroma(userWord.value));
    
});


 