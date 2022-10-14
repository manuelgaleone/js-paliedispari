/*

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
- Dichiariamo chi ha vinto.

*/


//L'utente sceglie un Numero e Pari o Dispari
let numeroUtente = Number(prompt("Scegli un numero da 1 a 5: "));
let pariDispariUtente = prompt("Scegli se Pari o Dispari");

//Verifico se il Numero e la Scelta siano corretti
while (0 > numeroUtente > 5) {

    if (0 > numeroUtente > 5) {

        alert("Devi scegliere un numero da 1 a 5!");
        let numeroUtente = Number(prompt("Scegli un numero da 1 a 5: "));
    
    }
};

//Genero il Numero per il Pc
function numeroPc(min, max) {

    return Math.floor(Math.random() * (5 - 1) ) + 1;
    return numeroPc;

};

let numeroDelPc = numeroPc;
alert("Il numero del pc è: " + numeroDelPc);

//Sommo i Numeri 
function sommaNumeri(numeroUtente, numeroPc) {

    let somma = numeroUtente + numeroPc;
    return somma;

};

//Vedo se la somma è pari o dispari
let somma = 0;

if (somma % 2) {

    alert("La somma è Pari, ha vinto il disari!");

} else {

    alert("La somma è pari, ha vinto il pari!");

};