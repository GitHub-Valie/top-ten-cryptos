// Exercice : Afficher tous les multiples d'un nombre saisi par l'utilisateur 
// jusqu'à une limite saisie par l'utilisateur

const displayMultiples = () => {
    // Input1: User number
    const inputNumber = document.getElementById("ex4-user-input1").value;
    // Input2: User limit
    const inputLimit = document.getElementById("ex4-user-input2").value;
    // Algorithm

    for (let i = 1; i <= inputLimit; i += 1) {
        if (i % inputNumber === 0) {
            document.getElementById('demande4').innerHTML += i + " est divisible par " + inputNumber + '<br>';
        }
        // else {
        //     return null;
        // }
        // document.getElementById('demande4').innerHTML += '<br>';
    };
};
