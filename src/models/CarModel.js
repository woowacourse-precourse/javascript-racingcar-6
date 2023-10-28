class CarModel {
  constructor(carName) {
    this.carName = carName;
    this.position = '';
  }

  move() {
    const randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber >= 4) {
      this.position += '-';
    }
  }

  setPosition(position) {
    this.position = position;
  }
}

export default CarModel;
