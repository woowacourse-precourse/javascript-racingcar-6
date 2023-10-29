class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber >= 4) {
      this.position++;
    }
  }

  getPosition() {
    return "-".repeat(this.position);
  }
}

class RacingGame {
  constructor(carNames, totalAttempts) {
    this.cars = carNames.split(",").map((name) => new Car(name.trim()));
    this.totalAttempts = totalAttempts;
  }

  async play() {
    for (let i = 0; i < this.totalAttempts; i++) {
      this.cars.forEach((car) => car.move());
      this.printCurrentState();
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    }
    this.printWinners();
  }

  printCurrentState() {
    this.cars.forEach((car) => {
      console.log(`${car.name} : ${car.getPosition()}`);
    });
    console.log("");
  }

  printWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    const winners = this.cars.filter((car) => car.position === maxPosition);
    const winnerNames = winners.map((winner) => winner.name).join(", ");

    console.log(`최종 우승자: ${winnerNames}`);
  }
}

export default RacingGame;
