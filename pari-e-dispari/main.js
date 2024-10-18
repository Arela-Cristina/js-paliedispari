// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

//generiamo una funzione
function randomNum(){
    return Math.floor(Math.random() * 5) + 1
  }
  
//utente sceglie 'par' o 'dispari'
let userChoice = prompt("Scrivi se il numero sara 'Pari' o 'Dispari'")
let userNum = parseInt(prompt("Scrivi un numero dal 1 al 6"))

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