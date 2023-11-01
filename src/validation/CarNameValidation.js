class CarNameValidation {
  static checkIfEmpty(name) {
    return name.trim() === '';
  }

  static checkIfInvalid(name) {
    return name.split(',').some((val) => val.trim() === '');
  }

  static checkIfDuplicate(name) {
    return new Set(name.split(',')).size !== name.split(',').length;
  }

  static checkIfOverLength(name) {
    return name.split(',').some((val) => val.length >= 6);
  }
}
export default CarNameValidation;
