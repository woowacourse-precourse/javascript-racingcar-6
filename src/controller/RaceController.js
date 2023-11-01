import CarModel from '../model/CarModel.js';
import inputView from '../view/inputView.js';
import validation from '../utils/validation.js';

class RaceController {
  #CarModel;

  async setCarList() {
    const input = await inputView.carList();
    const carList = input.split(',');
    const splitInput = carList.map((carName) => carName.trim());
    validation.validateCarNames(splitInput);
    this.#CarModel = new CarModel(splitInput);
  }
}

export default RaceController;
