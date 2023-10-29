import Car from '../models/Car.js';
import RaceManager from '../models/RaceManager.js';
import CarRaceView from '../views/CarRaceView.js';
import { repeatFunctionNTimes } from '../utils/repeatFunctionNTimes.js';
import {
  validateCarNames,
  valiadateDuplicteName,
  validateCountNumber,
} from '../utils/validateValue.js';

class CarRaceController {
  async initializeGame() {
    const carNames = await this.promptCarNames();
    const moveCount = await this.promptMoveCount();
    const carList = carNames.map(carName => new Car(carName));

    this.raceManager = new RaceManager(carList);
    this.raceManager.setMoveCount(moveCount);
  }

  palyRace() {
    this.raceManager.race();
    this.printRaceProgress();
  }

  printRaceProgress() {
    const { printNewline, printProgress } = CarRaceView;
    this.raceManager.carModels.forEach(carModel => {
      const carName = carModel.carName;
      const position = carModel.getPosition();
      printProgress(carName, position);
    });
    printNewline();
  }

  playGame() {
    repeatFunctionNTimes(this.raceManager.moveCount, this.palyRace.bind(this));
  }

  getGameResult() {
    this.raceManager.calcultateWinner();
  }

  async promptMoveCount() {
    const { readMoveCount } = CarRaceView;

    const moveCountInput = await readMoveCount();
    const moveCount = Number(moveCountInput);
    validateCountNumber(moveCount);

    return moveCount;
  }

  async promptCarNames() {
    const { readCarNames } = CarRaceView;

    const carListInput = await readCarNames();
    const inputCarList = carListInput.split(',').map(carName => carName.trim());
    validateCarNames(inputCarList);
    valiadateDuplicteName(inputCarList);

    return inputCarList;
  }

  /**
   * @param {string[]} inputCarList - 입력된 차 이름 목록
   * @throws {Error} 차 이름이 중복되는 경우
   */

  printWinner() {
    const { printOutput } = CarRaceView;
    const gameWinner = this.raceManager.getGameWinner();

    printOutput('실행 결과');
    printOutput(`최종 우승자 : ${gameWinner}`);
  }
}

export default CarRaceController;
