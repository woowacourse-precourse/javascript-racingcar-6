class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  moveForward(randomNumber) {
    if (randomNumber >= 4) {
      this.position += 1;
    }
  }

  displayRaceResults() {
    return `${this.name} : ${"-".repeat(this.position)}`;
  }
}

export default Car;
