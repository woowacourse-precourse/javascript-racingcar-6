const checkNumber = {
  checkNumberType(value) {
    return /^[0-9]+$/.test(value);
  },
  checkGreaterThan(number1, number2) {
    return number1 > number2;
  },
};

export default checkNumber;
