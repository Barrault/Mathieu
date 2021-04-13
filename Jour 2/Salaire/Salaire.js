'use strict'; 

function personne(name, salaire, sexe, nbPersonnesACharge){
  
  this.name = name;
  this.salaire = salaire;
  this.sexe = sexe;
  this.nbPersonnesACharge = nbPersonnesACharge;

  this.impotsAPayer = function(){
    var taux = 18;
    if(this.sexe === "F"){
      taux-=2;
    }
    switch(nbPersonnesACharge){
      case 3:
        taux = taux - 1;
      break;
      case 4:
        taux = taux - 2;
    }
    console.log("Le taux de " + this.name + " est : " + taux + "%");
    console.log("l'impot a payer de " + this.name + " est : " + this.salaire*taux/100);
    return this.salaire*taux/100;
  }

  this.assuranceApayer = function(){
    console.log("l'assurance a payer de " + this.name + " est : " + this.salaire*7/100);
    return this.salaire*7/100;
  }

  this.pensionAPayer = function(){
    console.log("la pension a payer de " + this.name + " est : " + this.salaire*5/100);
    return this.salaire*5/100;
  }

  this.salaireNet = function(){
    return this.salaire - this.impotsAPayer() - this.assuranceApayer(); - this.pensionAPayer();
  }

}

let sophie = new personne("sophie", 3000, "F", 4);
let mathieu = new personne("mathieu", 2500, "M", 0);
let Tom = new personne("Tom", 2000, "M", 3)
console.log(sophie.salaireNet());
console.log(mathieu.salaireNet());
console.log(Tom.salaireNet());