class Car {
  constructor(name) {
    this.name = name;
    this.move = 0;
  }

  advance() {
    this.move += 1;
  }

  printMove() {
    return '-'.repeat(this.move);
  }
}

export default Car;
