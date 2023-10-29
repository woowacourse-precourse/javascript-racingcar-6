class TryCountValidation {
  static checkIfEmpty(count) {
    return !count;
  }

  static checkIfZeroOrLess(count) {
    return !(count > 0);
  }
}
export default TryCountValidation;
