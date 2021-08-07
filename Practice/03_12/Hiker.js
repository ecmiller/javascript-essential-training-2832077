class Hiker {
  constructor(name, age, pack) {
    this.name = name;
    this.age = age;
    this.pack = pack;
  }
  sayHello() {
    console.log(this.name, " says hello");
  }
}

export default Hiker;
