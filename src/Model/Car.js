class Car {
  constructor(carNames, tryCount) {
    this.cars = [];
    this.tryCount = tryCount;

    this.initCars(carNames);
  }

  initCars(carNames) {
    carNames.forEach((name) => {
      this.cars.push({
        name,
        position: 0,
      });
    });
  }
}

export default Car;
