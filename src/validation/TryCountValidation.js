class TryCountValidation {
  static checkIfInvalid(count) {
    return !count;
  }

  static checkIfZeroOrLess(count) {
    return !(count > 0 && Number.isInteger(count));
  }
}
export default TryCountValidation;
