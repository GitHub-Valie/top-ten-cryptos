// Définition de la fonction affichage
var affichage = function() {

    // Nombre saisi par l'uilisateur (id de la balise input)
    var inputNumber = document.getElementById("sugar-lump-input").value;

    // Trois paramètres dans le "for": i=1 ; i inférieur ou égal à inputNumber; incrémentation de 1
    for (i = 1; i <= inputNumber; i += 1) {
        // Pour i allant de 1 à inputNumber, écrire ceci
        document.getElementById("demande0").innerHTML += 'One sugar lump in your cup.' + '<br>';
    }

};

// Le script écoute le bouton (id de la balise button). Quand le bouton est cliqué, le script s'exécute
// Pour s'exécuter, il récupère inputNumber (id de la balise input)
document.getElementById("sugar-lumps").addEventListener("click", affichage, false);
