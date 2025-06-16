/* Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Steps:
apri postman e crea una nuova collection black (vuota)
nella collection crea una nuova request cliccando sui tre pallini affianco al nome
copia il link del campo della request
clicca save e send per inviare la chiamata http tramite postman
Ora implementa la richiesta usando l'esempio nelle slide tramite javascript fetch
Stampa il risultato della singola mail in console per confermare che la chiamata sia andata a buon fine e siano presenti i risultati
Adesso PENSA: devo fare la stessa cosa per 10 volte :faccia_pensosa: che strumento mi permette di ripetere qualcosa usando un contatore?
Aggiorna la DOM inserendo gli indirizzi generati in una lista
Bonus (opzionale)
Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
 */


const buttonEl = document.getElementById('btn')
let ulEl = document.getElementById('email-list')
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'


const emailGenerator = () => {



    for (let i = 0; i < 10; i++) {

        ulEl.innerText = ''

        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                console.log(data)

                const liEl = document.createElement('li')
                ulEl.append(liEl)
                liEl.textContent = data.response

            })


            .catch(error => {

                console.log(error);



            })


    }

}


buttonEl.addEventListener('click', emailGenerator)

