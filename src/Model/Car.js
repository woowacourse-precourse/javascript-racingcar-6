class Car {
  constructor(carNames, tryCount) {
    this.cars = {};
    this.tryCount = tryCount;

    this.initCars(carNames);
  }

  initCars(carNames) {
    this.cars = carNames.map((name) => ({
      name,
      position: 0,
    }));
  }
}

export default Car;
