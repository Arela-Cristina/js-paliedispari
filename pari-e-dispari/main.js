// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

//generiamo una funzione
function randomNum(){
    return Math.floor(Math.random() * 5) + 1
  }
  
//utente sceglie 'par' o 'dispari'
let userChoice = prompt("Scrivi se il numero sara 'pari' o 'dispari'");
userChoice = userChoice.toLowerCase();
let userNum = parseInt(prompt("Scrivi un numero dal 1 al 5"))

//assegniamo un numero random al pc con la nostra funzione creata
let pcNum = randomNum()

//somiamo entrambi i numeri
let sum = userNum + pcNum
console.log(userNum, pcNum)

//dichiariamo una variabile messagio 'You lose :('
let message = 'You lose! :('
//condizioni
//se la somma corrisponde alla userChoise ha vinto user
//console.log messagio
if (sum % 2 === 0 && userChoice === 'pari'){
    message = 'You win! :)';
  } else if  (sum % 2 === 1 && userChoice === 'dispari'){
    message = 'You win! :)';
  }
    
  console.log (message)

  //consigli
  //dovevamo fare una funzione per sapere se un numero e pari oppure no, e poi per definire il risultato, dovevamo utilizzare la funzione dentro di una condizione per definire la risposta, cioe se il user ha vinto, oppure ha perso, etc. 