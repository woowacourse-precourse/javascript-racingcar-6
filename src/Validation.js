import { ERROR } from "./env/Message.js";

export default function Validation() {
  this.InputCarNameLengthValidation = (value) => {
    value.forEach((carName) => {
      if (carName.length > 5) throw new Error(ERROR.CAR_NAME_LENGTH + carName);
    });
  };

  this.InputValueDuplicatedValidation = (value, n) => {
    const set = new Set(value);
    if (set.size !== n) {
      throw new Error(ERROR.INVALID_DUPLICATE);
    }
  };

  this.InputValueTypeOfValidation = (value) => {
    if (isNaN(value)) {
      throw new Error(ERROR.INVALID_INPUT);
    }
  };
}
