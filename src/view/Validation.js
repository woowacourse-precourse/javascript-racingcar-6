export default class Validation {
  static hasSpace(carNames) {
    if (carNames.includes(' ')) {
      return true;
    }
    return false;
  }
}
