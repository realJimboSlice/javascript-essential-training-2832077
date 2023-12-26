/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Pen from "./Pen.js";
import Cup from "./Cup.js";
import Backpack from "./Backpack.js";

const myPen = new Pen("My Pen", "red", false);
console.log("This is my pen", myPen);

const yourPen = new Pen("Your Pen", "yellow", true);
console.log(yourPen);

const myCup = new Cup("My Cup", "glass", "transparent", true, false);
console.log(myCup);

const cup2 = new Cup("Second Cup", "plastic", "green", false, true);
console.log(cup2);

const newBackpack = new Backpack("My Backpack", 30, "blue", 5, 20, 20, false);
console.log(newBackpack);
