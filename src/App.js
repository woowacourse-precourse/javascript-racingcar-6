import { Random, Console } from '@woowacourse/mission-utils';
import Cars from './model/Cars.js';
import View from './view/View.js';

class App {
  constructor() {
    this.cars = new Cars();
    this.view = new View();
    this.winnerList = [];
  }

  async receiveUserInputAndSave() {
    const carList = await this.view.userInputCar();
    this.cars.setList(carList);
    const times = await this.view.userInputTimes();
    this.cars.setTimes(times);
  }

  createObjectDistance() {
    this.cars.list.forEach((car) => {
      const RandomNum = Random.pickNumberInRange(0, 9);
      if (RandomNum >= 4) {
        car.distance += '-';
      }
    });
  }

  updateAsTimes() {
    const { list } = this.cars;
    for (let i = 0; i < this.cars.times; i += 1) {
      this.createObjectDistance();
      this.view.printCarListAsTimes(list);
    }
  }

  findMaxDistance() {
    let max = 0;
    this.cars.list.forEach((car) => {
      if (max < car.distance.length) {
        max = car.distance.length;
      }
    });
    return max;
  }

  whoIsWinner() {
    const max = this.findMaxDistance();
    this.cars.list.forEach((car) => {
      if (car.distance.length === max) {
        this.winnerList.push(car.name);
      }
    });
    return this.winnerList;
  }

  async play() {
    await this.receiveUserInputAndSave();
    Console.print('');
    Console.print('실행 결과');
    this.updateAsTimes();
    this.whoIsWinner();
    this.view.printWinner(this.winnerList);
  }
}

export default App;
