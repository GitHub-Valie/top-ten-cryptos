// Exercice: Déterminez tous les nombres premiers jusqu'à une limite saisie par l'utilisateur.

var affichage = function () {

    // Saisie d'un nombre inputLimit par le user
    let inputLimit = document.getElementById("ex6-user-input").value;
    document.getElementById('demande6').innerHTML += '1 est premier' + '<br>';
    document.getElementById('demande6').innerHTML += '2 est premier' + '<br>';
    
    // on veut vérifier si i est un nombre premier: on itère sur i
    for (let i = 3; i <= inputLimit; i += 1) { // i prend les valeurs 3, 4, 5, ... jusqu'à inputLimit
        let isPrimeNumber = true; // booleen true: on part du principe que i est premier
        for (j = 2; j <= (i - 1); j += 1) { // j est notre diviseur-test, il sert à vérifier si i/j donne un reste. on itère dessus
            if (i % j === 0) { // si i/j ne donne pas de reste: j est un diviseur de i...
                isPrimeNumber = false; // ...donc i n'est pas premier
            }
        }
        // fin des itérations sur j (diviseur-test)
        if (isPrimeNumber === true) { // si le booleen est toujours vrai, i est premier
            document.getElementById('demande6').innerHTML += i + ' est premier' + '<br>';
        }
    }
    // fin des itérations sur i
}
document.getElementById('prime-number-limit').addEventListener("click", affichage, false);
