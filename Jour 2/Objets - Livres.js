'use strict'; 

(function() {

  function Document(numEnreg, titre){
    this.numEnreg = numEnreg;
    this.titre = titre;
  }

  function Livre(numEnreg, titre, Auteur, nbrPages){
    Document.call(this, numEnreg, titre)
    this.Auteur = Auteur;
    this.nbrPages = nbrPages;
    this.nbpages = function(){
      switch(this.nbrPages){
      case this.nbrPages <= 100:
        display("Nombre de pages entre 0 et 100");
      break;
      case this.nbrPages <= 200:
        display("Nombre de pages entre 101 et 200");
      break;
      case this.nbrPages <= 200:
          display("Nombre de pages entre 201 et 300");
      break;
      default:
          display("Nombre de pages superieur a 301");
      }
    }
  }


  function revue(numEnreg, annee, mois){
    Document.call(this, numEnreg, titre)
    this.mois = mois;
    this.annee = annee;
  }

  function Dictionnaire(numEnreg, titre, Langue){
    Document.call(this, numEnreg, titre)
    this.Langue = Langue;
  }

  Livre.prototype = Object.create(Document.prototype);
  revue.prototype = Object.create(Document.prototype);
  Dictionnaire.prototype = Object.create(Document.prototype);

  let Harry = new Livre(30504, "Harry Potter", "JK Rowling", 250);
  Harry.nbpages();

})();