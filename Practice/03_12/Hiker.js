import Backpack from "./Backpack.js";
class Hiker {
  constructor(
    name,
    age,
    pack,
    bpName,
    bpVolume,
    bpColor,
    bpPocketNum,
    bpStrapLengthL,
    bpStrapLengthR,
    bpLidOpen
  ) {
    this.name = name;
    this.age = age;
    this.pack = new Backpack(
      bpName,
      bpVolume,
      bpColor,
      bpPocketNum,
      bpStrapLengthL,
      bpStrapLengthR,
      bpLidOpen
    );
  }
  sayHello() {
    console.log(this.name, " says hello");
  }
}

export default Hiker;
