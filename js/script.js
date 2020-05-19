// Chiedo il nome all'utente
var nomeUtente = prompt('Inserisci il tuo nome');

// Chiedo il cognome all'utente
var cognomeUtente = prompt('Inserisci il tuo cognome');

// Chiedo il colore preferito all'utente
var colorePreferito = prompt('Quale è il tuo colore preferito?');

// Creo la variabile col numero 19
var numero = 19;

// Creo la variabile generale che contiene tutti i valori inseriti dall'utente
var passwordUtente = nomeUtente + cognomeUtente + colorePreferito + numero;

// Mostro a video la password generata
document.getElementById('password').innerHTML = passwordUtente;
