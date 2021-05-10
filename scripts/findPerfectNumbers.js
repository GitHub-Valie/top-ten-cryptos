// Définition de la fonction "affichage"
var affichage = function() {

    // var nombre = document.getElementById("user-input2").value; -----> Forme générale: nombre est remplacé par j
    var limite = document.getElementById("user-input3").value;
    var somme_des_diviseurs; 

    // Effacer la zone d'affichage
    document.getElementById("demande3").innerHTML = '';

    // Affichage du nombre saisi
    document.getElementById("demande3").innerHTML += "Limite saisie: " + limite + '<br>';

    // Algorithme

    // Première boucle qui correspond à la limite, j est notre nombre
    for (let j = 2, somme_des_diviseurs = 0; j <= limite; j += 1) {
        // Seconde boucle qui correspond à i, la valeur du diviseur de j
        // 3 paramètres dans le POUR: let i = 1 ; i est inférieur ou égal à j - 1 ; incrémenation de 1
        for (let i = 1; i <= (j - 1); i += 1) {
            console.log(j, i);
            if (j % i === 0) { // si i est un diviseur de j
                somme_des_diviseurs = somme_des_diviseurs + i; // Ajouter i à la somme des diviseurs
                document.getElementById("demande3").innerHTML += "Somme des diviseurs: " + somme_des_diviseurs + '<br>';
            } else {
                // Ne rien faire
            }
        }

        if (somme_des_diviseurs == j) {
            document.getElementById("demande3").innerHTML += j + " est un nombre parfait." + "<br>";
        } else {
            // Rien
        }
    }    
}

document.getElementById("perfect-number3").addEventListener("click", affichage, false);
