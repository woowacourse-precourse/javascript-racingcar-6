import { readCarsInput, readCountInput } from '../view/InputView.js';
import { printResultStartString } from '../view/OutputView.js';

class CarRacingController {
  inputCars = async () => {
    const cars = await readCarsInput();

    this.inputCount();
  };

  inputCount = async () => {
    const count = await readCountInput();

    this.printRacingResult();
  };

  printRacingResult = () => {
    printResultStartString();
  };
}

export default CarRacingController;
