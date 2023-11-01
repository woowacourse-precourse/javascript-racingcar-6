import { Console } from '@woowacourse/mission-utils';
import Car from './Model/Car.js';
import Output from './View/Output.js';
import Input from './View/Input.js';

class App {
  /**
   *
   * @param {Car[]} cars
   */
  constructor(cars, tryNum) {
    this.cars = cars;
    this.tryNum = tryNum;
  }

  async play() {
    //* 자동차 이름들을 입력받습니다.
    const carNames = await Input.inputCarNames();

    //* 입력받은 자동차 이름으로 자동차를 생성합니다.
    this.cars = carNames.map((carName) => new Car(carName));

    //* 시도할 횟수를 입력받습니다.
    this.tryNum = await Input.inputTryNum();

    //* 경주를 실행하고 이에 대한 결과를 출력합니다.
    this.playRacing();

    //* 우승자를 출력합니다.
    Output.printWinners(this.cars);
  }

  playRacing() {
    Console.print('\n실행 결과');

    while (this.tryNum > 0) {
      this.cars.forEach((car) => {
        car.addDistance();
        Output.printCarState(car.name, car.distance);
      });

      Console.print('');

      this.tryNum -= 1;
    }
  }
}

export default App;
