const checkNumber = {
  checkNumberType(value) {
    return !Number.isNaN(parseInt(value, 10));
  },
};
export default checkNumber;
