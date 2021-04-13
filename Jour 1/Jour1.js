function Calcul(num1, num2){
    if(num2!=0){
        return num1 / num2;
    }else{
        console.log("Division par 0 impossible");
    }
}
var numero1 = 3;
var numero2 = 0;
console.log(numero1 + " + " + numero2 + " = " + Calcul(numero1, numero2))



console.log("Exercice 1\n");//Exercice 1:
console.log("Calculez le carré d'un nombre\n");
function carre(b) {
    return b*b;
}
console.log("2 * 2 = " + carre(2));
console.log("4 * 4 = " + carre(4));



console.log("\nExercice 2:\n");//Exercice 2: 
console.log("Avec deux nombres, retournez TRUE si la somme des deux nombres est inférieure à 100. Sinon, retournez FALSE\n");
function Comparaison(num1, num2){
    return ((num1 + num2) < 100);
}
console.log("50 + 20 -> " + Comparaison(50,20));
console.log("60 + 60 -> " + Comparaison(60,60));



console.log("\nExercice 3:\n");//Exercice 3: 
console.log("Créez une fonction qui renvoie TRUE lorsque nbr1 est égal à nbr2; sinon retournez FALSE\n");
function Difference(num1, num2){
    return num1 === num2;
}
console.log(" '1' et 1 -> " + Difference('1',1));
console.log("1 et 1 -> " + Difference(1,1));

 

console.log("\nExercice 4:\n");//Exercice 4:
console.log("Écrivez une fonction pour inverser un tableau. Attention: N’utilisez pas la méthode intégrée reverse();\n");
function reverseTab(tab) { 
  let res = []; 
  for (let i = tab.length -1; i > -1; i--) { 
    res.push(tab[i]); 
  }
  return res; 
} 
console.log([1, 2, 3] + " -> " + reverseTab([1, 2, 3])); 
console.log([1, 1, 2, 2, 3] + " -> " + reverseTab([1, 1, 2, 2, 3])); 



console.log("\nExercice 5:\n");//Exercice 5:
console.log("Créez une fonction qui prend un tableau et renvoie le dernier élément du tableau\n");
function getLastElem(tab) { 
  return tab[tab.length - 1] 
} 
console.log([1, 2, 3, 4] + " -> " + getLastElem([1, 2, 3, 4])); 
console.log(["Alex", "Bob", "Emily"] + " -> " + getLastElem(["Alex", "Bob", "Emily"]));



console.log("Mini Projet\n");//Mini Projet
var tab = [];
function add_nom(){
    tab[tab.length] = prompt("Saisir un nom");
    console.log(tab);
}

function tirage(){
    if(tab.length === 0){
        console.log("Aucun utilisateur saisi\n");
    }else if(tab.length === 1){
        console.log("Nombre d'utilisateurs insuffisant\n");
    }else{
      let nb = Math.floor(Math.random()*tab.length);
      console.log(nb);
      console.log("Le gagnant est " + tab[nb]);
    }
}