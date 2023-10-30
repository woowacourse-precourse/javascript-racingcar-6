class Car {
  name;

  movement;

  constructor(name) {
    this.name = name;
    this.movement = [];
  }

  getMovement() {
    return this.movement;
  }
}

export default Car;
