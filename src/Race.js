import { Console } from '@woowacourse/mission-utils';
class Race {
  constructor(cars) {
    this.cars = cars;
  }

  playRound() {
    this.cars.forEach((car) => {
      car.moveForwardIfPossible();
    });
  }

  displayCars() {
    this.cars.forEach((car) => {
      Console.print(`${car.name} : ${car.displayPosition()}`);
    });
    Console.print('\n');
  }

  start(attemptsNumber) {
    for (let i = 0; i < attemptsNumber; i++) {
      this.playRound();
      this.displayCars();
    }
  }
}
export { Race };
