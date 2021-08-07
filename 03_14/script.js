/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

const bookA = new Book("ABCs", "Bruce", 12, false);
const bookB = new Book("123s", "Jenny", 10, false);
const bookC = new Book("Goosebumps", "Stephen", 135, true);
const bookD = new Book("Moby", "Carl", 327, false);
const bookE = new Book("Endgame", "Marv", 287, true);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());
console.log("Book A: ", bookA);
console.log("Book B: ", bookB);
console.log("Book C: ", bookC);
console.log("Book D: ", bookD);
console.log("Book E: ", bookE);
