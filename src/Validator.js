class Validator {
  static checkHasDuplicate(userInput) {
    return new Set(userInput).size === userInput.length;
  }
}

export default Validator;
