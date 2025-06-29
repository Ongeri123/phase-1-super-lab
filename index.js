// Write your classes here
// Parent Tree class
class Tree {
  constructor(species) {
    this.species = species;
  }

  static definition() {
    return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
  }
}

// Deciduous subclass
class Deciduous extends Tree {
  constructor(species, name) {
    super(species);
    this.name = name;
  }

  static definition() {
    return `${super.definition()} Deciduous trees shed their leaves annually.`;
  }
}

// Evergreen subclass
class Evergreen extends Tree {
  constructor(species, name) {
    super(species);
    this.name = name;
  }

  static definition() {
    return `${super.definition()} Evergreens keep their leaves all year round.`;
  }
}
