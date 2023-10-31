import { readCarsInput, readCountInput } from '../view/InputView.js';
import {
  printResulString,
  printResultStartString,
  printWinnersString,
} from '../view/OutputView.js';
import Car from '../model/Car.js';

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
    printWinnersString(this.#carInstances);
  };
}

export default CarRacingController;
