// Selfwork Cicli 3
// Scrivi un programma che simuli un distributore di bevande e che rispetti i seguenti passaggi:

//     l’utente deve poter inserire un numero (ipotizziamo che l'utente possa inserire SOLO numeri)
//     in console dev’essere stampato il messaggio del distributore
//         se inserisce 1, seleziona acqua e quindi stampare in console: “E’ stata selezionata l’acqua”
//         se inserisce 2, seleziona coca cola e quindi stampare in console: “E’ stata selezionata coca cola”
//         se inserisce 3, seleziona birra e quindi stampare in console: “E’ stata selezionata birra”
//         se inserisce qualcosa di diverso, il programma dovra’ riproporre automaticamente la domanda di partenza


// Extra: correggere l'esercizio facendo in modo che l'utente non sia obbligato ad inserire solo numeri ma possa scrivere ciò che vuole. Nel caso il dato inserito non sia una scelta accettabile il programma dovrà rifiutare la risposta e riproporre automaticamente la domanda di partenza.


while (true) {
let tastierino=parseInt(prompt("Distributore automatico.\nInserisci il codice:\n[1]Acqua - [2]Coca - [3]birra"));

// Doppia verifica se è un numero e se maggiore di 3
    if (typeof(tastierino) == 'number' && tastierino <=3 ){
        
        // Controlla il valore inserito
        if (tastierino === 1) {
            console.log("E' stata selezionata l'acqua");
            break; // Esci dal ciclo
        } else if (tastierino === 2) {
            console.log("E' stata selezionata coca cola");
            break; // Esci dal ciclo
        } else if (tastierino === 3) {
            console.log("E' stata selezionata birra");
            break; // Esci dal ciclo
        } 

    } //if 

    alert("Attenzione è stato inserito un valore non valido.\nUsa: [1]Acqua - [2]Coca - [3]birra");
    
} //while