export default class CarProperty {
  constructor() {
    this.carArray = [];
  }

  async makeCarArray(carNames) {
    const removeSpaceCommaNames = carNames.replaceAll(" ", "").split(",");
  }
}
