var affichage = function () {

    var limite = document.getElementById("ex2-user-input").value;
    
    // Effacer la zone d'affichage
    document.getElementById('demande2').innerHTML = '';

    for (let i = 1; i <= limite; i++) {
        if (i%7 == 0) {
            document.getElementById('demande2').innerHTML += i + ' est divisible par 7' +  '<br>' ;
        }
        
    }

};

document.getElementById("division-by-7").addEventListener("click", affichage, false);
