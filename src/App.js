import Car from './car/Car';
import print from './utils/print';

class App {
  constructor() {
    this.cars = [];
    this.winners = [];
  }

  createCar(nameString) {
    const nameArr = nameString.split(',');

    nameArr.forEach((name) => {
      const newCar = new Car(name);
      this.cars.push(newCar);
    });
  }

  startRace(attemp) {
    print();
    print('실행 결과');

    while (this.winners.length === 0) {
      this.cars.forEach((car) => {
        car.move();
      });

      this.printMoveResult();

      this.winners = this.cars.filter((car) => {
        return car.getPosition() === Number(attemp);
      });
    }
  }

  async play() {}
}

export default App;
