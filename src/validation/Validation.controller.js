import { ValidationService } from './Validation.service.js';

export class ValidationController {
  #validationService;

  constructor() {
    this.#validationService = new ValidationService();
  }
  validateCars(cars) {
    this.#validationService.validateCarNamesLength(cars);
    this.#validationService.validateCarsUnique(cars);
  }

  validateTries(tries) {
    this.#validationService.validateTriesIsNumber(tries);
    this.#validationService.validateTriesInRange(tries);
  }
}
