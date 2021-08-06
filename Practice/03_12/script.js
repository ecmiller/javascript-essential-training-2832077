/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Animal from "./Animal.js";
import Hiker from "./Hiker.js";

const dog = new Animal("dog", 4, true);

const trailHiker = new Hiker(
  "Doug",
  25,
  "Light Backpack",
  12,
  "green",
  4,
  10,
  8,
  false
);
console.log("Animal: ", dog);
console.log("Hiker: ", trailHiker);
dog.makeNoise();
trailHiker.sayHello();
