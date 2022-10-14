//Chiedo all'Utente una Parola
//Creo la funzione per capire se è Palindroma o meno

//Inserisco la Parola
let wordUser = prompt("Dimmi una Parola: ");
let wordReverse = reverseWordFunc(wordUser);
//console.log(wordReverse);

//Funzione per invertire le lettere
function reverseWordFunc(word) {
    
    let reverse = '';
    
    for (let i = word.length - 1; i >= 0; i--) {
        console.log(word[i]);
        reverse += word[i];
    }
    return reverse;

}

//Condizione 
if (wordUser === wordReverse) {
    
    alert("La tua è una Parola Palindroma!");

} else {

    alert("La tua non è una Parola Palindroma.");

}