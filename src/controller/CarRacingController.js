import { readCarsInput, readCountInput } from '../view/InputView.js';
import { printResultStartString } from '../view/OutputView.js';
import Car from '../model/Car.js';
import { Console } from '@woowacourse/mission-utils';

class CarRacingController {
  #carInstances;

  inputCars = async () => {
    const cars = await readCarsInput();

    this.inputCount(cars);
  };

  inputCount = async cars => {
    const count = await readCountInput();

    this.printRacingResult(cars);
  };

  printRacingResult = cars => {
    printResultStartString();
    const carsArray = cars.split(',').map(car => car.trim());
    this.#carInstances = carsArray.map(car => (car = new Car(car)));
    Console.print(this.#carInstances);
  };
}

export default CarRacingController;
