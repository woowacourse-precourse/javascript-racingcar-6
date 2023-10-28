class Car {
  constructor(carName) {
    this.carName = carName;
    this.forwardCount = 0;
  }

  forwardCar() {
    this.forwardCar += 1;
  }
}

export default Car;
