// Affiche les nombres pairs et impairs jusqu'à une limite

var affichage = function () {

    var limit = document.getElementById("ex3-user-input").value;

    // Effacer la zone d'affichage
    document.getElementById('demande3').innerHTML = '';

    for (let i=0; i<=limit; i++) {
        if (i === 0) {
            document.getElementById('demande3').innerHTML += i + " est pair" + "<br/>";
            console.log(i);
        }
        else if (i % 2 === 0) {
            document.getElementById('demande3').innerHTML += i + " est pair" + "<br/>";
            console.log(i);
        }
        else {
            document.getElementById('demande3').innerHTML += i + " est impair" + "</br>";
            console.log(i);
        }
    }
};

document.getElementById("odd-or-even-limit").addEventListener("click", affichage, false);
