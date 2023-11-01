export default class CarProperty {
  constructor() {
    this.carArray = [];
  }

  async makeCarArray(carNames) {
    const carNameArray = CarProperty.splitStringMakeArray(carNames);
    carNameArray.map((carName) => {
      this.carArray.push({ name: carName, distance: 0 });
    });
  }

  static splitStringMakeArray(carNames) {
    const carArray = carNames.split(",");
    return CarProperty.removeSideBlank(carArray);
  }

  static removeSideBlank(array) {
    return array.map((name) => name.trim());
  }
}
