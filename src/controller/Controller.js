import InputView from '../view/inputView';
import checkValidation from '../utils/validation';
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
    const playerInput = await InputView.readCarName();
    checkValidation.nameInput(playerInput);
    playerInput.forEach((name) => {
      const carModel = new Car(name);
      this.#cars.push(carModel);
    });
    await this.getAttemptNumber();
  }

  async getAttemptNumber() {
    const playerInput = await InputView.readAttemptNumber();
    checkValidation.attemptInput(playerInput);
    this.#attempt = playerInput;
    this.startRace();
  }

  startRace() {
    for (let count = 0; count < this.#attempt; count++) {
      const randomNumber = makeRandomNumber();
      this.#cars.forEach((car) => {
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
