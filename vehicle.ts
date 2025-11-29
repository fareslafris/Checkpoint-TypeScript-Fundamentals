// Définir l'interface Véhicule
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Implémenter la classe Voiture qui implémente l'interface Vehicule
class Voiture implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

// Créer une instance de Voiture
const maVoiture = new Voiture("Toyota", "Corolla", 2020);

// Appeler la méthode start
maVoiture.start(); // Affiche "Car engine started"
