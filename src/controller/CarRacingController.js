import { Console } from '@woowacourse/mission-utils';
import { readCarsInput, readCountInput } from '../view/InputView.js';

class CarRacingController {
  inputCars = async () => {
    const cars = await readCarsInput();

    this.inputCount();
  };

  inputCount = async () => {
    const count = await readCountInput();

    Console.print(count);
  };
}

export default CarRacingController;
