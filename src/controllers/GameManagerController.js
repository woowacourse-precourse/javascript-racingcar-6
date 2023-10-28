import CarModel from '../models/CarModel.js';
import RaceManagerModel from '../models/RaceManagerModel.js';
import CarRaceView from '../views/CarRaceView.js';
import { repeatFunctionNTimes } from '../utils/repeatFunctionNTimes.js';
import {
  validateCarName,
  hasDuplicate,
  validateCountNumber,
} from '../utils/validateValue.js';

class CarRaceController {
  constructor() {
    this.carModels = [];
    this.raceManagerModel = new RaceManagerModel([]);
    this.gameProgress = {};
    this.gameWinner = '';
  }

  async initializeGame() {
    const carNames = await this.promptCarNames();
    this.carModels = carNames.map(carName => new CarModel(carName));
    this.raceModel = new RaceManagerModel(this.carModels);
    const moveCount = await this.promptMoveCount();
    this.raceModel.setMoveCount(moveCount);
  }

  palyRace() {
    this.raceModel.race();
    this.printRaceProgress();
  }

  printRaceProgress() {
    const { printNewline, printProgress } = CarRaceView;
    this.carModels.forEach(carModel => {
      const { carName, position } = carModel;
      printProgress(carName, position);
    });
    printNewline();
  }

  playGame() {
    repeatFunctionNTimes(this.raceModel.moveCount, this.palyRace.bind(this));
  }

  getGameResult() {
    this.gameWinner = this.raceModel.calcultateWinner();
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
    this.validateCarNames(inputCarList);

    return inputCarList;
  }

  /**
   * @param {string[]} inputCarList - 입력된 차 이름 목록
   * @throws {Error} 차 이름이 중복되는 경우
   */
  validateCarNames(inputCarList) {
    inputCarList.forEach(carName => validateCarName(carName));

    const isDuplicte = hasDuplicate(inputCarList);
    if (isDuplicte) {
      throw new Error('[ERROR] car 이름은 중복이 불가합니다.');
    }
  }

  printWinner() {
    const { printOutput } = CarRaceView;

    printOutput('실행 결과');
    printOutput(`최종 우승자 : ${this.gameWinner}`);
  }
}

export default CarRaceController;
