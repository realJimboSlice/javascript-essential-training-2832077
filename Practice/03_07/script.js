/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const cup = {
  name: "Big Cup",
  isFull: false,
  isEmpty: false,
  color: "white",
  material: "ceramic",
};

const guitar = {
  name: "Betty",
  color: "black",
  manufacturer: "Epiphone",
  model: "Les Paul",
  knobs: 2,
  hasSwitchSelector: true,
  switchSelectorPosition: "middle",
  pickups: 2,
  bridge: "tune-o-matic",
  frets: 21,
  currentTuning: "standard",
  changeTuning: function (tuning) {
    this.currentTuning = tuning;
    console.log(`Tuning changed to ${tuning}.`);
  },
};

const phone = {
  manufacturer: "Apple",
  model: "iPhone 6S",
  color: "hwite",
  storage: "32GB",
  hasHeadphoneJack: true,
  damagePercentage: 0,
  damage: function (percentage) {
    this.damagePercentage = percentage;
    console.log(`Phone damaged ${percentage}%.`);
  },
  repair: function () {
    this.damagePercentage = 0;
    console.log("Phone repaired.");
  },
};

const candle = {
  color: "white",
  material: "wax",
  isLit: true,
  isMelted: false,
  melt: function () {
    this.isMelted = true;
    console.log("Candle melted.");
  },
  light: function () {
    this.isLit = true;
    console.log("Candle lit.");
  },
  blowOut: function () {
    this.isLit = false;
    console.log("Candle blown out.");
  },
  isInContainer: true,
  container: {
    color: "translucent",
    material: "glass",
  },
};

const playstation4 = {
  color: "black",
  model: "PS4 Slim",
  storage: "500GB",
  hasDiscDrive: true,
  hasDiscInside: false,
  isOn: false,
  powerButton: function () {
    if (this.isOn == true) {
      this.isOn = false;
      console.log("PS4 turned off.");
    } else {
      this.isOn = true;
      console.log("PS4 turned on.");
    }
  },
  ejectDisc: function () {
    if (this.hasDiscInside == true) {
      this.hasDiscInside = false;
      console.log("Disc ejected.");
    } else {
      console.log("No disc inside.");
    }
  },
};

const rainDroplet = {
  size: "big",
  color: "transparent",
  isFalling: true,
  isOnGround: false,
  fall: function () {
    this.isFalling = true;
    console.log("Rain droplet falling.");
  },
  hitGround: function () {
    this.isOnGround = true;
    console.log("Rain droplet hit the ground.");
  },
};

console.log("Cup:", cup);
console.log("Guitar:", guitar);
console.log("Phone:", phone);
console.log("Candle:", candle);
console.log("Playstation 4:", playstation4);
console.log("Rai droplet:", rainDroplet);
