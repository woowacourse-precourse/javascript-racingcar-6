import GameMessage from "./GameMessage.js";

class Validator {
  isValidCarName(input) {
    if (!this.isValidNameLength(input))
      throw new Error(GameMessage.INVALID_CAR_NAME);
    if (!this.isNumber(input)) throw new Error(GameMessage.INVALID_CAR_NAME);
    return true;
  }

  isValidNameLength(input) {
    if (input.length <= 5) return true;
  }

  isNumber(input) {
    if (isNaN(input)) return true;
  }
}

export default Validator;
