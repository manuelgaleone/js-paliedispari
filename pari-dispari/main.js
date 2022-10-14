/*

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
- Dichiariamo chi ha vinto.

*/

//Scelgo il Numero del Pc
let numeroPerPc = numeroPc(1,5);
console.log("La scelta del Pc è: " + numeroPerPc);

//Genero il Numero per il Pc
function numeroPc(min, max) {

    return Math.floor(Math.random() * (max - min) ) + min;

};


//L'utente sceglie un Numero e Pari o Dispari
let numeroUtente = Number(prompt("Scegli un numero da 1 a 5: "));
console.log("La scelta dell'Utente è: " + numeroUtente);
let pariDispariUtente = prompt("Scegli se pari o dispari: ");
console.log("La scelta dell'Utente è: " + pariDispariUtente);

//Nel caso in cui l'utente fosse un simpaticone
while (numeroUtente < 1 || numeroUtente > 5 || isNaN(numeroUtente)) {

    alert("Il numero dev'essere da 1 a 5!");
    numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5: "));
    console.log("La scelta corretta dell'Utente è: " + numeroUtente);

};

while (pariDispariUtente !== "pari" && pariDispariUtente !== "dispari") {

    alert("Devi scegliere tra pari o dispari!");
    pariDispariUtente = prompt('Scegli se pari o dispari: ');
    console.log("La scelta corretta dell'Utente è: " + pariDispariUtente);

};


//Calcolo la Somma
let sommaUtentePc = numeroUtente + numeroPerPc; /* sommaNumeri();
console.log("La somma tra i due è: " + sommaUtentePc);

//Creo la funzione di somma
function sommaNumeri(num) {

    let somma = numeroPerPc + numeroUtente;
    return somma;
}; */


//Dichiaro la variabile che contiene il vincitore
let pariDispariWinner = pariDispariValid(sommaUtentePc);

//Creo la funzione di validazione
function pariDispariValid(numero) {
    
    //Dichiaro la varibile che contiene il risultato
    let pariDispari = "";
        
    //Verifico che sia o pari o dispari
    if (numero % 2) {

        console.log("La somma è dispari!");
        pariDispari = "dispari";

    } else {

        console.log("La somma è pari!");
        pariDispari = "pari";

    }

    //Stampo il risultato
        return pariDispari;

}


//Comunico il risultato
if (pariDispariWinner === pariDispariUtente) {

    alert("Ha vinto l'Utente!");

} else {

    alert("Ha vinto il Pc!");

};


console.log( Boolean(0) );