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

console.log("cup object:", cup);
console.log("guitar object:", guitar);
console.log("phone:", phone);
