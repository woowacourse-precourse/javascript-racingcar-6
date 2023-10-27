// controllers/CarRaceController.js

import CarRaceModel from '../models/CarRaceModel.js';
import CarRaceView from '../views/CarRaceView.js';
import { repeatFunctionNTimes } from '../utils/repeatFunctionNTimes.js';
import { validateCarName, hasDuplicate, validateCountNumber } from '../validtate/validate.js';
class CarRaceController {
  constructor() {
    this.model = new CarRaceModel();
  }

  async init() {
    const { model } = this;

    const carListInput = await CarRaceView.readCarNames();
    const inputCarList = carListInput.split(',').map(carName => carName.trim());

    inputCarList.forEach(carName => validateCarName(carName));
    const isDuplicte = hasDuplicate(inputCarList);

    if (isDuplicte) {
      throw new Error('[ERROR] car 이름은 중복이 불가합니다.');
    }

    this.model.setCarList(inputCarList);
    const moveCountInput = await CarRaceView.readMoveCount();

    const moveCount = Number(moveCountInput);
    validateCountNumber(moveCount);

    model.setMoveCount(moveCount);
    model.carList.forEach(carName => model.initGameProgress(carName));

    repeatFunctionNTimes(model.moveCount, this.gamePlay.bind(this));

    model.calculateWinner();
    CarRaceView.printOutput('실행 결과');
    CarRaceView.printOutput(`최종 우승자 : ${model.gameWinner}`);
  }

  gamePlay() {
    this.model.calculateCarMove();
    for (const key in this.model.gameProgress) {
      CarRaceView.printProgress(key, this.model.gameProgress[key]);
    }
    CarRaceView.printNewline();
  }

  validateCount() {}
}

export default CarRaceController;
