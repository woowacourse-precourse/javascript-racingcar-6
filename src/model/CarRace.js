import Car from './Car';

class CarRace {
  constructor() {
    this.carList = [];
  }

  makeCarList(carArr) {
    carArr.forEach(car => {
      this.carList.push(new Car(car));
    });
  }
}

export default CarRace;
