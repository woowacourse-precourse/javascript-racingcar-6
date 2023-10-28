// controllers/CarRaceController.js

import CarRaceModel from '../models/CarRaceModel.js';
import CarRaceView from '../views/CarRaceView.js';
import { repeatFunctionNTimes } from '../utils/repeatFunctionNTimes.js';
import {
  validateCarName,
  hasDuplicate,
  validateCountNumber,
} from '../utils/validateValue.js';

class CarRaceController {
  constructor() {
    this.model = new CarRaceModel();
  }

  async initializeGame() {
    const { model, playGameRound } = this;

    const inputCarList = await this.promptCarNames();
    model.setCarList(inputCarList);

    const moveCount = await this.promptMoveCount();
    model.setMoveCount(moveCount);

    model.carList.forEach(carName => model.initGameProgress(carName));

    repeatFunctionNTimes(model.moveCount, playGameRound.bind(this));

    model.calculateWinner();

    this.printWinner();
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
    const { model } = this;
    const { printOutput } = CarRaceView;

    printOutput('실행 결과');
    printOutput(`최종 우승자 : ${model.gameWinner}`);
  }

  playGameRound() {
    const { printProgress, printNewline } = CarRaceView;
    const { model } = this;

    model.calculateCarMove();
    for (const key in model.gameProgress) {
      printProgress(key, model.gameProgress[key]);
    }

    printNewline();
  }
}

export default CarRaceController;
