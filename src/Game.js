import { Console } from '@woowacourse/mission-utils';

import Car from './Car.js';
import Input from './Input.js';
import Validator from './utils/Validator.js';

class Game {
  #cars = [];
  #count = 0;

  async play() {
    await this.setCars();
    await this.setCount();

    Console.print('실행결과');

    for (let i = 0; i < this.#count; i++) {
      this.#cars.forEach((car) => {
        car.move();
        Console.print(`${car.getName()} : ${car.getPath()}`);
      });
      Console.print('');
    }

    this.showWinner();
  }

  async setCars() {
    const input = new Input();

    const value = await input.readLine(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      {
        validator: Validator.validCarList,
      }
    );
    // TODO: 쉼표로 구분된 자동자 이름를 배열로 변환해주는 유틸함수 작성
    this.#cars = value.split(',').map((name) => new Car(name));
  }

  async setCount() {
    const input = new Input();

    const value = await input.readLine('시도할 횟수는 몇 회인가요?\n', {
      validator: Validator.rangeOverZero,
    });

    this.#count = Number(value);
  }

  showWinner() {
    let maximumPathLength = 0;
    this.#cars.forEach((car) => {
      const path = car.getPath();
      maximumPathLength = Math.max(maximumPathLength, path.length);
    });

    const winners = this.#cars
      .filter((car) => {
        const path = car.getPath();
        return maximumPathLength === path.length;
      })
      .map((car) => car.getName());

    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default Game;
