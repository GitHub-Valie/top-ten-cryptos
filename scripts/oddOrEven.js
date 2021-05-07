var affichage = function () {

     // Input d'un nombre par l'utilisateur
    var nombre = document.getElementById("ex1-user-input").value;

    // Si le nombre saisi est pair ... sinon ...
    if (nombre % 2 == 0) {
        document.getElementById('demande1').innerHTML += nombre + " est pair.";
    } else {
        document.getElementById('demande1').innerHTML += nombre + " est impair.";
    }
    document.getElementById('demande1').innerHTML += '<br>'; // Passe une ligne après chaque exécution
/*
    document.getElementById('demande1').innerHTML += 'vous avez saisi : ' + nombre;
    document.getElementById('demande1').innerHTML += '<br>';
    alert("Bonjour Jarod");
*/
};

document.getElementById("odd-or-even").addEventListener("click", affichage, false);