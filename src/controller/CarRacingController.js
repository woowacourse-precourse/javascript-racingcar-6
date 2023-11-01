import { readCarsInput, readCountInput } from '../view/InputView.js';
import {
  printResulString,
  printResultStartString,
  printWinnersString,
} from '../view/OutputView.js';
import Car from '../model/Car.js';

class CarRacingController {
  #carInstances;

  startCarRacing = async () => {
    await this.inputCars();
  };

  inputCars = async () => {
    const cars = await readCarsInput();

    this.createCarInstances(cars);
    this.inputCount();
  };

  createCarInstances = cars => {
    const carsArray = cars.split(',').map(car => car.trim());
    this.#carInstances = carsArray.map(car => new Car(car));

    return this.#carInstances;
  };

  inputCount = async () => {
    const count = await readCountInput();

    this.printRacingResult(count);
  };

  printRacingResult = count => {
    printResultStartString();
    printResulString(this.#carInstances, count);

    this.printRacingWinners();
  };

  printRacingWinners = () => {
    printWinnersString(this.#carInstances);
  };
}

export default CarRacingController;
