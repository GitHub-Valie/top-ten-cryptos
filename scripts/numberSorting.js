// Trie 3 nombres saisis par le user

var affichage = function () {

    var inputNumber1 = document.getElementById("ex7-user-input1").value;
    var inputNumber2 = document.getElementById("ex7-user-input2").value;
    var inputNumber3 = document.getElementById("ex7-user-input3").value;

    // Effacer la zone d'affichage
    document.getElementById('demande7').innerHTML = '';

    if (inputNumber1 > inputNumber2) { // inputNumber1 > inputNumber2
        
        document.getElementById('demande7').innerHTML += inputNumber1 + " est plus grand que " + inputNumber2;
        
        if (inputNumber1 > inputNumber3) { // inputNumber 1 > inputNumber2 & inputNumber3

            if (inputNumber2 > inputNumber3) { // inputNumber 1 > inputNumber2 > inputNumber3
                
                document.getElementById('demande7').innerHTML += " qui est plus grand que " + inputNumber3;

            } else { // inputNumber 1 > inputNumber2 < inputNumber3

                document.getElementById('demande7').innerHTML += " qui est plus petit que " + inputNumber3;

            }

        } else { // inputNumber3 > inputNumber1 > inputNumber2

            document.getElementById('demande7').innerHTML += inputNumber1 + " est plus grand que " + inputNumber2 + " qui est plus petit que " + inputNumber3;

        }

    } else { // inputNumber1 < inputNumber2

        document.getElementById('demande7').innerHTML += inputNumber1 + " est plus petit que " + inputNumber2;

        if (inputNumber2 > inputNumber3) { // inputNumber2 > inputNumber3 & inputNumber2 > inputNumber1

            if (inputNumber3 > inputNumber1) { // inputNumber1 < inputNumber3 < inputNumber2

                document.getElementById('demande7').innerHTML += " qui est plus grand que " + inputNumber3;

            } else { // inputNumber3 < inputNumber1 < inputNumber2

                document.getElementById('demande7').innerHTML += " qui est plus grand que " + inputNumber3;
                
            }
        
        } else { // inputNumber1 < inputNumber2 < inputNumber3

            document.getElementById('demande7').innerHTML += " qui est plus petit que " + inputNumber3;

        }
    }

    document.getElementById('demande7').innerHTML += '<br>';

};

document.getElementById("sort-numbers").addEventListener("click", affichage, false);
