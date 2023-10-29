class Car {
  constructor(carName) {
    this.carName = carName;
    this.forwardCount = 0;
  }

  forwardCar() {
    this.forwardCount += 1;
  }
}

export default Car;
