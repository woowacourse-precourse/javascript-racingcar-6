class Car {
  constructor() {
    this.cars = [];
    this.tryCount = 0;
  }

  initCars(carNames, tryCount) {
    carNames.forEach((name) => {
      this.cars.push({
        name,
        position: 0,
      });
    });

    this.tryCount = tryCount;
  }
}

const carInstance = new Car();

export default carInstance;
