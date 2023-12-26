const Cup = class {
  constructor(name, material, color, isFull, isEmpty) {
    this.name = name;
    this.material = material;
    this.color = color;
    this.isFull = isFull;
    this.isEmpty = isEmpty;
  }
  fill() {
    this.isFull = true;
    this.isEmpty = false;
    console.log("The cup is full again.");
  }
  drink() {
    this.isEmpty = true;
    this.isFull = false;
    console.log("Your drank from the cup. The cup is empty now.");
  }
};

export default Cup;
