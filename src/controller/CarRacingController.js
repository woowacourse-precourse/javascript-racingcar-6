import { readCarsInput, readCountInput } from '../view/InputView.js';
import { printResulString, printResultStartString } from '../view/OutputView.js';
import Car from '../model/Car.js';
import { Console } from '@woowacourse/mission-utils';
import findWinners from '../utils/findWinners.js';

class CarRacingController {
  #carInstances;

  inputCars = async () => {
    const cars = await readCarsInput();

    this.inputCount(cars);
  };

  inputCount = async cars => {
    const count = await readCountInput();

    this.printRacingResult(cars, count);
  };

  printRacingResult = (cars, count) => {
    printResultStartString();
    const carsArray = cars.split(',').map(car => car.trim());
    this.#carInstances = carsArray.map(car => (car = new Car(car)));
    printResulString(this.#carInstances, count);

    this.printRacingWinners();
  };

  printRacingWinners = () => {
    Console.print(findWinners(this.#carInstances));
  };
}

export default CarRacingController;
