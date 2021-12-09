let userInputNumberKm = prompt('Inserisci il numero di chilometri che vuoi percorrere. km: ');
let userInputAge = prompt('Inserisci la tua età. Età: ');

let ticketPrice = userInputNumberKm * 0.21;

if (userInputAge >= 65) {
    ticketPrice -= ticketPrice * 0.4;
} else if (userInputAge < 18) {
    ticketPrice -= ticketPrice * 0.2;
}

ticketPrice = parseFloat(ticketPrice.toFixed(2));
document.writeln('Il prezzo del biglietto è: ' + ticketPrice + '€');
