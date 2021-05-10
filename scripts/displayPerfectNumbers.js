// Définition de la fonction "affichage"
var affichage = function() {

    var nombre = document.getElementById("ex-11-user-input").value;
    var somme_des_diviseurs = 0; 

    // Effacer la zone d'affichage
    document.getElementById("demande11").innerHTML = '';

    // Affichage du nombre saisi
    document.getElementById("demande11").innerHTML += "Nombre saisi: " + nombre + '<br>';

    // Algorithme

    // 3 paramètres dans le POUR: let i = 1 ; i est inférieur ou égal à nombre - 1 ; incrémenation de 1
    for (let i = 1; i <= (nombre - 1); i += 1) {
        if (nombre % i === 0) { // si i est un diviseur
            somme_des_diviseurs = somme_des_diviseurs + i; // Ajouter i à la somme des diviseurs
            document.getElementById("demande11").innerHTML += "Somme des diviseurs: " + somme_des_diviseurs + '<br>';
        } else {
            // Ne rien faire
        }
    }

    if (somme_des_diviseurs == nombre) {
        document.getElementById("demande11").innerHTML += nombre + " est un nombre parfait." + "<br>";
    } else {
        document.getElementById("demande11").innerHTML += nombre + " n'est pas un nombre parfait." + "<br>";
    }

}

document.getElementById("perfect-number2").addEventListener("click", affichage, false);
