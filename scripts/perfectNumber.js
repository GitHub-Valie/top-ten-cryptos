// Exercice : Afficher la somme de tous les diviseurs, sauf lui-même, d'un nombre donné par l'utilisateur
// si l'utilisateur saisit 6, on affiche (1+2+3) = 6
// si l'utilisateur saisit 7, on affiche 1
// si l'utilisateur saisit 14, on affiche (1+2+7) = 10

// Définition de la fonction "affichage"
var affichage = function () {

    var nombre = document.getElementById("ex10-user-input").value;
    var somme_des_diviseurs = 0; // Pour l'instant, pas de diviseurs

    // Effacer la zone d'affichage
    document.getElementById("demande10").innerHTML = '';

    // Affichage du nombre saisi
    document.getElementById("demande10").innerHTML += "Nombre saisi: " + nombre + '<br>';

    // Algorithme

    // 3 paramètres dans le POUR: let i = 1 ; i est inférieur ou égal à nombre - 1 ; incrémenation de 1
    for (let i = 1; i <= (nombre - 1); i+=1) {
        // On regarde si i divise le nombre
        if (nombre % i === 0) {
            somme_des_diviseurs = somme_des_diviseurs + i;
            document.getElementById('demande10').innerHTML += i + " est un diviseur." + '<br>';
        } else {
            // rien
        }
    }
    document.getElementById('demande10').innerHTML += "La somme des diviseurs de " + nombre + " (sauf lui même) vaut " + somme_des_diviseurs + '.<br>';
};

// Le script écoute le clic du bouton sur la page HTML 
// Dès que l'utilisateur clique sur le bouton, le script exécute la fonction "affichage"
document.getElementById("perfect-number").addEventListener("click", affichage, false);
