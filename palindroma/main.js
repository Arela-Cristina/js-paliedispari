//Chiedere all’utente di inserire una parola 
//Creare una funzione per capire se la parola inserita è palindroma

//Chiediamo al utente di inserire una parola atraverso un prompt
//Salvare il risultato in una variabile
let userInput = prompt('Dettetore di parole Palindrome, scrivi una parola')

//Dichiariammo una funzione che ci ritornera un booleano che ci dica  se la parola e palindroma oppure no
function isApalindromicWord(word) {
    //Dichiariammo una variabile con una stringa vuota, ci servira dopo
    let newWord = '';
    //facciamo un ciclo for, per ciclare ogni lettera della parola
    for (let i = 0; i < word.length; i++) {
        //salviamo in una variabile tutte le iterazzioni, uttilizziamo il metodo  .at() in maniera negativa per farci ritornare ogni indice che corrisponde ad ogni lettera della parola 
        let letter = word.at(-i - 1);
        //richiammiamo la variabile con la stringa vuota per concatennare ogni lettera ciclata e falra diventare una stringa.
        newWord += letter;
        //fine ciclo for
    }
    //console.log del risultato del valore aggiornato della variabile con la stringa vuota
    console.log(newWord)
    //condizioni
    //Se la variabile e uguale al valor del promt del utente, significa che la stringa e vuota. return true 
    if (newWord !== userInput) {
        return false
    }
    return true
    //se no Return false
}

//INVOCARE LA FUNZIONE
//verificare se userInput e una parola palindroma
let answer = isApalindromicWord(userInput);
console.log(answer);