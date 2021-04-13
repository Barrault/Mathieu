'use strict'; 

function personne(salaireBrut, sexe, nbPersonnesACharge){
  
  this.salaire = salaire;
  this.sexe = sexe;
  this.nbPersonnesACharge = nbPersonnesACharge;

  this.impotsAPayer = function(){
    let taux = 0.18;
    if(this.sexe === "F"){
      taux-=0.02;
    }
    switch(nbPersonnesACharge){
      case 3:
        taux -= 0.01;
      break;
      case 4:
        taux -= 0.02;
    }
    return this.salaire*taux;
  }

  this.assuranceApayer = function(){
    return this.salaire*0.07;
  }

  this.pensionAPayer = function(){
    return this.salaire*0.05;
  }

  this.salaireNet = function(){
    return this.salaire - this.impotsAPayer - this.assuranceApayer - this.pensionAPayer;
  }

}