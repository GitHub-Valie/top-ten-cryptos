// Exercice: Déterminer si un nombre est premier ou non
let isPrimeNumber = true;

var affichage = function () {

    // Effacer la zone d'affichage
    document.getElementById('demande5').innerHTML = '';

    let inputNumber = document.getElementById("ex5-user-input").value;
    // départ   // fin               // incrémentation/décrémentation
    for (let i = 2; i <= inputNumber - 1; i += 1) { // tant que i = 2 et plus petit que inputNumber - 1, la boucle ajoute 1 à i
        if (inputNumber % i === 0) {
            isPrimeNumber = false;
        }
    }

    if (isPrimeNumber === true) { // if !isPrimeNumber --> assigned 'false'
        console.log('Nombre premier : ' + inputNumber);
        document.getElementById('demande5').innerHTML += inputNumber + " est un nombre premier."  + '<br>';
    } else {
        document.getElementById('demande5').innerHTML += inputNumber + " n'est pas un nombre premier."  + '<br>';
    }
};

document.getElementById('prime-number').addEventListener("click", affichage, false);
