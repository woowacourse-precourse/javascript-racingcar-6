class Car {
  constructor(name) {
    this.name = name;
    this.textResult = '';
  }

  move() {
    this.textResult += '-';
  }
}

export default Car;
