import InputView from '../view/inputView';
import { validateCarNames, validateAttemptNumber } from '../utils/validation';
import Car from '../model/car';
import makeRandomNumber from '../utils/makeRandomNumber';
import OutputView from '../view/OutputView';
import makeDistanceString from '../utils/makeDistanceString';

class Controller {
  #cars = [];
  #attempt;

  async start() {
    await this.getCarName();
  }

  async getCarName() {
    const carName = await InputView.readCarName();
    validateCarNames(carName);

    carName.forEach((name) => {
      this.#cars.push(new Car(name));
    });

    await this.getAttemptNumber();
  }

  async getAttemptNumber() {
    const attemptNumber = await InputView.readAttemptNumber();
    validateAttemptNumber(attemptNumber);
    this.#attempt = attemptNumber;

    this.startRace();
  }

  startRace() {
    OutputView.printStart();
    for (let count = 0; count < this.#attempt; count++) {
      this.#cars.forEach((car) => {
        const randomNumber = makeRandomNumber();
        car.move(randomNumber);
      });
      this.printProgress();
    }
    this.printResult();
  }

  printProgress() {
    this.#cars.forEach((car, index) => {
      const distanceString = makeDistanceString(car.getDistance());
      const isLast = index === this.#cars.length - 1 ? true : false;

      OutputView.printMove(car.getName(), distanceString, isLast);
    });
  }

  printResult() {
    const winner = this.findWinner();
    OutputView.printWinner(winner);
  }

  findWinner() {
    let winners = [];
    let maxDistance = 0;

    this.#cars.forEach((car) => {
      if (car.getDistance() === maxDistance) {
        winners.push(car.getName());
      }
      if (car.getDistance() > maxDistance) {
        winners = [car.getName()];
        maxDistance = car.getDistance();
      }
    });

    return winners;
  }
}

export default Controller;
