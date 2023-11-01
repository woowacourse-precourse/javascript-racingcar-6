import CarModel from '../model/CarModel.js';
import inputView from '../view/inputView.js';
import validation from '../utils/validation.js';

class RaceController {
  #CarModel;

  #moveCount;

  async setCarList() {
    const input = await inputView.carList();
    const carList = input.split(',');
    const splitInput = carList.map((carName) => carName.trim());
    validation.validateCarNames(splitInput);
    this.#CarModel = new CarModel(splitInput);
  }

  async setMoveCount() {
    const input = await inputView.moveCount();
    validation.validateMoveCount(input);
    this.#moveCount = parseInt(input, 10);
  }
}

export default RaceController;
