import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';

class App {
  #carList = [];
  #gameRounds;

  async parseCarNamesInput() {
    const input = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carNames = input.split(',');
    carNames.map((carName) => this.#carList.push(new Car(carName)));
  }

  async parseGameRoundsInput() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    this.#gameRounds = Number(input);
  }


  async play() {
    await this.parseCarNamesInput();
    await this.parseGameRoundsInput();
  }
}

export default App;
