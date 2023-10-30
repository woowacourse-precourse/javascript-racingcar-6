import Message from '../constant/Message.js';

export default class Validation {
  static carNameInput(carNameList) {
    carNameList.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error(Message.CAR_NAME_INPUT_ERROR);
      }
    });
  }

  static tryCountInput(tryCountInput) {
    const NUMBER_RANGE_REGEXP = /^\d+$/;
    if (!NUMBER_RANGE_REGEXP.test(tryCountInput)) {
      throw new Error(Message.TRY_COUNT_INPUT_ERROR);
    }
  }
}
