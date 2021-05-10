// document.getElementById("odd-or-even").addEventListener("click", affichage, false);

const displayOddOrEven = () => {
    // Input d'un nombre par l'utilisateur
    const inputNumber = document.getElementById("ex1-user-input").value;

    // Effacer la zone d'affichage (fonctionne pas à cause du format de la fonction)
    document.getElementById('demande1').innerHTML = '';

    // Si le inputNumber saisi est pair ... sinon ...
    if (inputNumber % 2 == 0) {
        document.getElementById('demande1').innerHTML += inputNumber + " est pair.";
    } else {
        document.getElementById('demande1').innerHTML += inputNumber + " est impair.";
    }
    document.getElementById('demande1').innerHTML += '<br>';
};
