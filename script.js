/**
 * @author: LASME Ayou Emeline
 * @description:
 */
// Exercice1

const personne1 = {
    nomEtPrenom: "John JOE",
    masse: 58,
    hauteur: 1.65,
    // IMC est l'indice de masse corporelle
    IMC : function () {
        return (this.masse/Math.pow(this.hauteur, 2)); // BMI formula
    }
  };

const personne2 = {
    nomEtPrenom: "Dou Jack",
    masse: 90,
    hauteur: 1.75,
    // IMC est l'indice de masse corporelle
    IMC : function () {
        return (this.masse/Math.pow(this.hauteur, 2)); // BMI formula
    }
  };

// créez une fonction JS qui compare l'IMC des deux objets.
function comparerIMC(personne1, personne2) {
    /**
     * @description : cette fonction compare les deux objets personnes et determine qui des deux
     * a le plus grand IMC.
     * @param : personne1
     * @param : personne2
     */
    if(personne1.IMC() > personne2.IMC()) {
        console.log(`La personne qui a le plus grand IMC est : ${personne1.nomEtPrenom}`);
        return;
    }
    console.log(`La personne qui a le plus grand IMC est : ${personne2.nomEtPrenom}`);
}

// appeler la fonction qui donne le nom de celui qui a le plus grand IMC
comparerIMC(personne1, personne2);
/* ***************** fin Exercice 1 ************* */



/* ***************** Exercice 2 Debut ***************** */
// variable
let gradesList = [15, 16, 8, 7, 51, 96, 0, 1];
// Creation d'une fonction qui calcule et donne la moyenne
function findAvg(gradesList) {
  // gradesList represente la liste des notes de l'utilisateur
  // average reprensente la moyenne
  // sum represente la somme des notes
  let average = 0;
  let sum = 0;
  for(let grade of gradesList) {
    sum += grade;
  }
  average = sum / gradesList.length; // calcule de la moyenne
  console.log(`La moyenne est : ${average}`);
  checkIfAverageIsGood(average); // appel de la fonction de vérification
}

function checkIfAverageIsGood(average) {
  //  cette fonction vérifie la validité de la moyenne
  //  average represente la moyenne
  if(average > 65) {
    console.log("Succes vous avez reussi");
    return;
  }
  console.log("Desolez vous devez reprendre le cour");
}
findAvg(gradesList);
/* ***************** End Exercice 2 ***************** */

  







