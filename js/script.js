// Creare Countdown da 30 sec
// Prendo id countdown dall'html

let count = 30;
const timer = setInterval(function() {
  count--;
  // console.log(count);
  document.getElementById('countdown').innerHTML = count
  if (count === 0) {
    clearInterval(timer);
  }
}, 1000);

document.getElementById('countdown').innerHTML = count

// Finisce countdown e compaiono numeri
//  -quando countdown arriva a 0 -> display none

// Generare 5 numeri random
const numbersRandom = []
for ( let i = 0; i < 5; i++) {
  const num = Math.random() * (i + 1).toFixed(2)
  console.log(num)
}

document.getElementById('number-list').innerHTML = numbersRandom

// Scompaiono i numeri random dopo 30 secondi

// Al termine del countdown
//  - Numeri scompaiono
//  - Compaiono form input

// Utente invia numeri tramite un bottone

// SE numeri corrispondono a numeri random
//  - vittoria
// ALTRIMENTI
//  -perdita