class Check {
  static isValidCar(carNames) {
    if (carNames.some(name => name.length > 5)) return false;
    if (carNames.some(name => name.replace(/\s/g, '').length === 0))
      return false;
    return true;
  }

  static isValidNumber(userCount) {
    if (Number.isNaN(Number(userCount))) return false;
    if (userCount <= 0) return false;
    return true;
  }
}

export default Check;
