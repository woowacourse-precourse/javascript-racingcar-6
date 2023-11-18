import { MESSAGE } from '../constants/index.js';
import { CarList, Round } from '../models/index.js';
import { InputView } from '../view/index.js';

const InputController = {
  async getCarArray() {
    const text = await InputView.readText(MESSAGE.inputName);
    return new CarList(text).getCarArray();
  },
  async getRound() {
    const text = await InputView.readText(MESSAGE.inputRound);
    return new Round(text).getNumber();
  },
};

export default InputController;
