class Validator {
  async validation(num) {
    if (num === 0 || isNaN(num)) return false;
    return true;
  }
}
export default Validator;
