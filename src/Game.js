import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import CarList from './CarList.js';

class Game {
  async init() {
    const carListInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const carListArr = carListInput.split(',');

    return carListArr;
  }

  async createCars(carListArr) {
    const carList = new CarList();

    carListArr.forEach((carName) => {
      carList.add(new Car(carName));
    });

    return carList.cars;
  }
}

export default Game;
