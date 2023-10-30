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

  // 무작위 값을 인수로 넣어 4이상일 경우 전진
  moveCarForwardOrStop() {
    this.cars.forEach((car) => {
      const randomNumber = generateRandomNumber();
      if (randomNumber >= NUMBER.MOVE_FORWARD_REQUIREMENT) {
        car.moveForward();
      }
    });
  }

  // 전진하는 자동차가 출력될 경우, 자동차 이름 같이 출력
  printForwardCarName() {
    this.cars.forEach((car) => {
      printCar(car.getName(), car.getDistance());
    });
    printMessage(STRING.BLANK_SPACE);
  }

  // 시도 횟수만큼 레이스 진행
  raceCar(tryNumber) {
    printResult();
    for (let i = 0; i < tryNumber; i += 1) {
      this.moveCarForwardOrStop(generateRandomNumber());
      this.printForwardCarName();
    }
  }

  // 최종 우승자 연산 후 선정
  getWinner() {
    const maxDistance = Math.max(...this.cars.map((car) => car.getDistance()));
    const winnerArray = this.cars
      .filter((car) => car.getDistance() === maxDistance)
      .map((car) => car.getName());
    return winnerArray;
  }

  // 시도 횟수를 다루는 함수
  async handleTryNumber() {
    const tryNumber = await getUserInputTryNumber();
    if (!isValidTryNumber(tryNumber)) {
      throwError(ERROR_MESSAGE.INCORRECT_TRY_NUMBER);
      return this.handleTryNumber();
    }
    return tryNumber;
  }

  // 자동차 이름들을 다루는 함수
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