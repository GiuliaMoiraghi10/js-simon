// // Dom Elements
// const countdown = document.getElementById ('countdown')
// // const numbers = document.getElementById ('number-list')
// const form = document.getElementById ('answers-form')
// const formButton = document.getElementById ('btnForm')
// const randomNumbers = document.getElementById ('numbers-list')

// // Creare Countdown da 30 sec
// // Prendo id countdown dall'html

// let count = 30;
// const timer = setInterval(function() {
//   count--;
//   // console.log(count);
//   document.getElementById ('countdown').innerHTML = count
//   if (count === 0) {
//     clearInterval(timer);
//   }
// }, 1000);

// document.getElementById('countdown').innerHTML = count

// // Finisce countdown e compaiono numeri
// //  -quando countdown arriva a 0 -> display none

// // Generare 5 numeri random
// const numbers = []
// for (let i = 0; i < 5; i++) {
//   const num = Math.floor(Math.random() * 50) + 1
//   numbers.push (num)
//   // console.log(numbers)
//   document.getElementById ('numbers-list').innerHTML = numbers
// }


// // Submit form
// function myFunction() {
//   document.getElementById('answers-form').submit();
// }

// const inputForm = document.getElementById ('input-group')
// console.log(inputForm)

// // Scompaiono i numeri random dopo 30 secondi

// // Compare form dopo 30 secondi
// setTimeout (myFunction, 30000);
//   function myFunction () {
//     console.log ('answers-form')
//     document.getElementById ('answers-form').innerHTML = form
//   } 30000



// // Utente invia numeri tramite un bottone

// // SE numeri corrispondono a numeri random
// //  - vittoria
// // ALTRIMENTI
// //  -perdita



//GENERARE NUMERI DA 1 A 50;

//! ELEMENTI DOM

//*timer
const countdownDisplay = document.getElementById('countdown');
// console.log(countdownDisplay);

//*lista numeri da inserire fino allo scadere del tempo
const numbersList = document.getElementById('numbers-list');
// console.log(numbersList);

const instructions = document.getElementById('instructions');

//FUNZIONE NUMERO DA 1 A 50
function randomIntOneToFifty() {
  let num = Math.floor(Math.random() * 50) + 1;
  // console.log(num);
  return num;
}

//*form da mostrare per l'inserimento e la validazione dei numeri
const form = document.getElementById('answers-form');
console.log(form);

const inputNum = document.querySelectorAll('input.answer');
console.log(inputNum);

//*btn
const btn = document.querySelector('.btn-primary');
// console.log(btn);

//! FINE ELEMENTI DOM -------------------------------------------------!

//array numeri da mostrare all'utente
let randomNumbers = [];
console.log(randomNumbers);
// console.log([...randomNumbers]);

// ciclo for per pushare 5 numeri nell'array
for (let i = 0; i < 5; i++) {
  let randomInt = randomIntOneToFifty();
  randomNumbers.push(randomInt);
}

//*aggiunta numeri generati in pagina
//ciclo per creazione di 5 elementi che contengono i numeri da ricordare
for (let i = 0; i < randomNumbers.length; i++) {
  const listItem = document.createElement('li');
  console.log(listItem);
  numbersList.append(listItem);
  listItem.innerText = randomNumbers[i];
  listItem.classList.add('list-group-item');
}

//*timer
let timer = 30;

// Aggiorna il timer ogni secondo e allo scadere scompaiono i numeri
const countdown = setInterval(() => {
  countdownDisplay.innerText = timer;  // Mostra il tempo rimanente nella console
  timer--;

  // Se il tempo è finito ferma il timer e mostra un messaggio
  if (timer < 0) {
    clearInterval(countdown);
    numbersList.classList.add('d-none');//lista numeri da memorizzare che diventa display none allo scadere del tempo
    form.classList.remove('d-none');
    instructions.innerText = 'Inserisci i numeri che hai memorizzato (l\'ordine non è importante)';
  }
}, 1000);


//***event listener start
//confronto input con numeri mostrati al timer
//per ogni ogni numero inserito confrontare l'uguaglianza con gli elementi dell'array

//recupero valori input

form.addEventListener('submit', (event) => {
  event.preventDefault();

  countdownDisplay.classList.add('d-none'); //display none al countdown

  const nodeListValues = [];

  let match = 0;//contatore numeri indovinati

  for (i = 0; i < inputNum.length; i++) { //inputNum è la lista di nodi contenente tutti i campi numbers

    let element = parseInt(inputNum[i].value);
    // console.log(element.value);
    nodeListValues.push(element);
    // console.log(ifIncludes(randomNumbers, element));


    if (randomNumbers.includes(element)) {
      console.log('numero giusto');
      match = match + 1;
      console.log(match);
    };

    inputNum[i].value = '';//svuotamento campi dopo aver preso i dati
  }

  // console.log(match);

  form.classList.add('d-none');
  instructions.innerText = `Hai indovinato ${match}`;
});



