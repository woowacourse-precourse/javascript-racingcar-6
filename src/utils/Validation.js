import Message from '../constant/Message.js';

export default class Validation {
  static carNameInput(carNameList) {
    carNameList.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error(Message.CAR_NAME_INPUT_ERROR);
      }
    });
  }
}
