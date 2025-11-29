// Implémenter la classe Voiture qui implémente l'interface Vehicule
var Voiture = /** @class */ (function () {
    function Voiture(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Voiture.prototype.start = function () {
        console.log("Car engine started");
    };
    return Voiture;
}());
// Créer une instance de Voiture
var maVoiture = new Voiture("Toyota", "Corolla", 2020);
// Appeler la méthode start
maVoiture.start(); // Affiche "Car engine started"
