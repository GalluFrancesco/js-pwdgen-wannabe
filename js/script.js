//chiedo all'utente il nome
let userName = prompt('Inserisci il tuo nome');

//chiedo all'utente il cognome
let userLastName = prompt('Inserisci il tuo cognome');

//chiedo all'utente il colore preferito
let userColor = prompt('Inserisci il tuo colore preferito');

//chiedo all'utente l'anno di nascita
let userBirthYear = prompt('Inserisci il tuo anno di nascita');

//per stampare la pass richiamo un oggetto
//dell'html tramite un id e assegno un valore
//alla sua variabile di defoult innerHTML
let htmlElement = document.getElementById('password');

htmlElement.innerHTML= `La tua password è: ${userName}${userLastName}${userColor}${userBirthYear}`;
