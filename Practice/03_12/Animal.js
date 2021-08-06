class Animal {
  constructor(
    // Define parameters
    species,
    numberOfLegs,
    domesticated
  ) {
    //Define properties
    this.species = species;
    this.numberOfLegs = numberOfLegs;
    this.domesticated = domesticated;
  }
  // Define methods
  toggleDomesticated(dom) {
    this.domesticated = dom;
  }
  setNumberOfLegs(number) {
    this.numberOfLegs = number;
  }
  setSpecies(species) {
    this.species = species;
  }
  makeNoise() {
    console.log("The %s made a noise", this.species);
  }
}

export default Animal;
