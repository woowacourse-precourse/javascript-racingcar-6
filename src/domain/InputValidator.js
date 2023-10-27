const InputValidator = {
  isNumeric(input) {
    const numberRegExp = /^\d+$/;
    return numberRegExp.test(input);
  },

  hasValidCountCars(count) {
    return count >= 2 && this.isNumeric(count);
  },

  hasValidCarName(name) {
    return name.length >= 1 && name.length <= 5;
  },

  hasValidRoundNumber(round) {
    return round >= 1 && this.isNumeric(round);
  },
};

export default InputValidator;
