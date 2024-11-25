
//ESERCIZIO 1
function controllaNumeri() {
    // Recupera i valori degli input
    let numero1 = parseInt(document.getElementById('numero1').value, 10);
    let numero2 = parseInt(document.getElementById('numero2').value, 10);

    // Controlla se uno dei due numeri è 50 o se la loro somma è 50
    // Non è necessario un if perché stiamo semplicemente verificando delle condizioni e assegnando il valore di questa verifica.
    let risultato = (numero1 === 50 || numero2 === 50 || (numero1 + numero2 === 50));

    // Mostra il risultato nel paragrafo finale
    document.getElementById('risultato-esercizio-1').textContent = risultato ? "true" : "false";
}

//ESERCIZIO 2
function rimuoviCarattere() {
    // Recupera i valori degli input
    let stringa = document.getElementById('stringa').value;
    let posizione = parseInt(document.getElementById('posizione').value, 10);

    // Trasforma la posizione in un indice (0-based)
    posizione -= 1;

    // Controlla se la posizione è valida
    if (posizione < 0 || posizione >= stringa.length || isNaN(posizione)) {
        document.getElementById('risultato-esercizio-2').textContent = "Posizione non valida.";
        return;
    }

    // Rimuovi il carattere dalla stringa
    let stringaModificata = stringa.slice(0, posizione) + stringa.slice(posizione + 1);

    // Mostra il risultato
    document.getElementById('risultato-esercizio-2').textContent = stringaModificata;
}

//ESERCIZIO 3
function controllaNumeriCompresi() {
    // Recupera i valori dagli input
    let numero1 = parseInt(document.getElementById('numero1-es3').value, 10);
    let numero2 = parseInt(document.getElementById('numero2-es3').value, 10);

    // Controlliamo se il valore è valido
    if (isNaN(numero1)||isNaN(numero1)) {
        console.log("Il valore inserito non è valido.");
    }
        
    // Funzione per verificare se un numero è compreso in un intervallo
    function range(num, min, max) {
        return num >= min && num <= max;
    }

    // Controlla se entrambi i numeri soddisfano le condizioni
    let condizione1 = range(numero1, 40, 60) && range(numero2, 40, 60);
    let condizione2 = range(numero1, 70, 100) && range(numero2, 70, 100);

    // Risultato finale
    let risultato = condizione1 || condizione2;

    // Mostra il risultato
    document.getElementById('risultato-esercizio-3').textContent = risultato ? "true" : "false";
}

//ESERCIZIO 4
function controllaCitta() {
    // Recupera il valore dall'input
    let citta = document.getElementById('nome-citta').value;
    let cittaLowerCase = citta.toLowerCase();

    // Controlla se il nome della città inizia con "Los" o "New"
    if (cittaLowerCase.startsWith("los") || cittaLowerCase.startsWith("new")) {
        document.getElementById('risultato-esercizio-4').textContent = citta;
    } else {
        document.getElementById('risultato-esercizio-4').textContent = "false";
    }
}

//ESERCIZIO 5
function calcolaSomma() {
    // Recupera l'input dell'utente
    let input = document.getElementById('array-input').value;

    // L'input viene diviso in un array di stringhe basandosi sulla virgola (,) come separatore
    // Ogni elemento della stringa viene poi convertito in un numero usando map(Number)
    let array = input.split(',').map(Number);

    // Verifica che tutti gli elementi siano numeri validi
    if (array.some(isNaN)) {
        document.getElementById('risultato-esercizio-5').textContent = "Errore: Inserisci solo numeri separati da virgole.";
        return;
    }

    // Calcola la somma degli elementi dell'array 
    // Si usa il metodo .reduce per calcolare la somma di tutti gli elementi
    // acc è l'accumulatore che mantiene la somma parziale. curr è l'elemento corrente dell'array.
    let somma = array.reduce((acc, curr) => acc + curr, 0);

    // Mostra il risultato
    document.getElementById('risultato-esercizio-5').textContent = `La somma è: ${somma}`;
}

//ESERCIZIO 6
function controllaNumeriArray() {
    // Recupera l'input dall'utente
    let input = document.getElementById('array-input-es6').value;

    // Converte l'input in un array di numeri
    const array = input.split(',').map(Number);

    // Verifica che l'array contenga numeri validi
    if (array.some(isNaN)) {
        document.getElementById('risultato-esercizio-6').textContent = "Errore: Inserisci solo numeri separati da virgole.";
        return;
    }

    // Controlla se 1 o 3 sono nell'array
    let contieneUnoOTre = array.includes(1) || array.includes(3);

    // Determina il risultato
    let risultato = !contieneUnoOTre;

    // Mostra il risultato
    document.getElementById('risultato-esercizio-6').textContent = risultato ? "true" : "false";
}

//ESERCIZIO 7
function trovaTipoAngolo() {
    // Recupera il valore dall'input
    const gradi = parseFloat(document.getElementById('angolo-input').value);

    // Controlla che l'input sia un numero valido
    if (isNaN(gradi) || gradi < 0) {
        document.getElementById('risultato-esercizio-7').textContent = "Errore: Inserisci un valore numerico valido (>= 0).";
        return;
    }

    // Determina il tipo di angolo
    let tipoAngolo = "";
    if (gradi < 90) {
        tipoAngolo = "acuto";
    } else if (gradi === 90) {
        tipoAngolo = "retto";
    } else if (gradi > 90 && gradi < 180) {
        tipoAngolo = "ottuso";
    } else if (gradi === 180) {
        tipoAngolo = "piatto";
    } else {
        tipoAngolo = "non valido per questa classificazione";
    }

    // Mostra il risultato
    document.getElementById('risultato-esercizio-7').textContent = `L'angolo è: ${tipoAngolo}`;
}

//ESERCIZIO 8
function creaAcronimo() {
    // Recupera la frase dall'input
    let frase = document.getElementById('frase').value;

    // Controlla che l'input non sia vuoto
    if (!frase.trim()) {
        document.getElementById('risultato-esercizio-8').textContent = "Errore: Inserisci una frase valida.";
        return;
    }

    // Divide la frase in parole e crea l'acronimo
    let acronimo = frase
        .split(' ') // Divide la frase in un array di parole
        .filter(word => word.trim() !== '') // Filtra parole vuote
        .map(word => word[0].toUpperCase()) // Prende la prima lettera di ogni parola in maiuscolo
        .join(''); // Unisce tutte le lettere in una stringa

    // Mostra il risultato
    document.getElementById('risultato-esercizio-8').textContent = `L'acronimo è: ${acronimo}`
}


// Modalità Notturna
let toggleButton = document.getElementById('toggle-dark-mode');
let DarkMode = false; // Stato della modalità

toggleButton.addEventListener('click', () => {
    // Alterna la classe "dark-mode" su <body>
    document.body.classList.toggle('dark-mode');
    DarkMode = !DarkMode; // Cambia lo stato

    // Cambia il testo del pulsante
    toggleButton.textContent = DarkMode ? 'Disattiva Modalità Notturna' : 'Attiva Modalità Notturna';
})

// Seleziona gli elementi
let lista = document.getElementById('toggle-lista');
let inputContainer = document.getElementById('input-container');
let listaAngoli = document.getElementById('lista-angoli');

// Aggiungi un listener per l'evento "show.bs.collapse"
listaAngoli.addEventListener('show.bs.collapse', () => {
    inputContainer.style.display = 'none'; // Nascondi input e pulsante
});

// Aggiungi un listener per l'evento "hide.bs.collapse"
listaAngoli.addEventListener('hide.bs.collapse', () => {
    inputContainer.style.display = 'block'; // Mostra input e pulsante
});