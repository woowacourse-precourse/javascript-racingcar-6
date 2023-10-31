import { ERROR_MESSAGE } from "../constant/errorMessage"
import { messagePrinter } from "../utils/messagePrinter"

export class Car {
  static CAR_NAME_MAX_LENGTH = 5
  constructor(car) {
    this.car = car
    this.validateLength()
  }

  validateLength() {
    if (this.car.length > CAR_NAME_MAX_LENGTH) {
        messagePrinter.errorPrint(ERROR_MESSAGE.more_than_five_letters)
    }
  }
}