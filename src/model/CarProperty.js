export default class CarProperty {
  constructor() {
    this.carArray = [];
  }

  async makeCarArray(carNames) {
    const removeSpaceCommaNames = this.removeSpaceComma(carNames);
    removeSpaceCommaNames.map((carName) => {
      this.carArray.push({ name: carName, distance: 0 });
    });
  }

  removeSpaceComma(carNames) {
    return carNames.replaceAll(" ", "").split(",");
  }
}
