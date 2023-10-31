import { InputService } from './Input.service.js';
import { OutputService } from './Output.service.js';
import { ValidationController } from '../validation/Validation.controller.js';

export class IOController {
  #inputService;
  #outputService;
  #validationController;

  constructor() {
    this.#inputService = new InputService();
    this.#outputService = new OutputService();
    this.#validationController = new ValidationController();
  }

  async readCarName() {
    const INPUT = await this.#inputService.readCarName();
    const CARS = INPUT.split(',');
    this.#validationController.validateCars(CARS);
    return CARS;
  }

  async readCarTries() {
    const INPUT = await this.#inputService.readCarTries();
    this.#validationController.validateTries(+INPUT);
    return +INPUT;
  }

  printResultIntro() {
    this.#outputService.printResultIntro();
  }

  printCurrentResult(car, position, isLast) {
    this.#outputService.printCurrentResult(car, position, isLast);
  }

  printFinalResult(result) {
    this.#outputService.printFinalResult(result);
  }
}
