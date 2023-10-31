import Car from '../model/Car.js';
import generateRandomNumber from '../common/utils/randomGenerator.js';
import { getUserInputCarName, getUserInputTryNumber } from '../view/inputView.js'
import { printResult, printCar, printWinner } from '../view/outputView.js';
import throwError from '../common/utils/errorHandler.js';
import isValidCarName from '../common/utils/carNameValidator.js';
import isValidTryNumber from '../common/utils/tryNumberValidator.js';
import { ERROR_MESSAGE } from '../common/utils/constants/message.js';
import { STRING, NUMBER } from '../common/utils/constants/value.js';
import printMessage from '../common/utils/messagePrinter.js';

class GameController {

  cars = [];

  moveCarForwardOrStop() {
    this.cars.forEach((car) => {
      const randomNumber = generateRandomNumber();
      if (randomNumber >= NUMBER.MOVE_FORWARD_REQUIREMENT) {
        car.moveForward();
      }
    });
  }

  printForwardCarName() {
    this.cars.forEach((car) => {
      printCar(car.getName(), car.getPosition());
    });
    printMessage(STRING.BLANK_SPACE);
  }

  raceCar(tryNumber) {
    printResult();
    for (let i = 0; i < tryNumber; i += 1) {
      this.moveCarForwardOrStop();
      this.printForwardCarName();
    }
  }

  getWinner() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
    const winnerArray = this.cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());
    return winnerArray;
  }

  async handleTryNumber() {
    const tryNumber = await getUserInputTryNumber();
    if (!isValidTryNumber(tryNumber)) {
      throwError(ERROR_MESSAGE.INCORRECT_TRY_NUMBER);
      return this.handleTryNumber();
    }
    return tryNumber;
  }

  async setCars() {
    const names = await getUserInputCarName();
    if (!isValidCarName(names)) {
      throwError(ERROR_MESSAGE.INCORRECT_CAR_NAME);
      await this.setCars();
      return;
    }

    this.cars = names.split(',').map((name) => new Car(name));
  }

  async play() {
    await this.setCars();
    const tryNumber = await this.handleTryNumber();
    this.raceCar(tryNumber);
    const winner = this.getWinner();
    printWinner(winner);
  }
}

export default GameController;
