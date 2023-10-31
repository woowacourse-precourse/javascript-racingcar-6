import { Console } from '@woowacourse/mission-utils';
import { readCarsInput } from '../view/InputView.js';

class CarRacingController {
  inputCars = async () => {
    const cars = await readCarsInput();

    Console.print(cars);
  };
}

export default CarRacingController;
