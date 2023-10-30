const checkNumber = {
  checkNumberType(value) {
    return !Number.isNaN(parseInt(value, 10));
  },
  checkGreaterThan(number1, number2) {
    return number1 > number2;
  },
};
export default checkNumber;
