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

  printWinnerNames() {
    const maxMoveCount = Math.max(...(this.#carList).map(car => car.getMoveCount()));
    const winners = this.#carList.filter((car) => car.getMoveCount() === maxMoveCount);

    const winnerNames = [];
    winners.map((winner) => winnerNames.push(winner.getName()));

    Console.print(`최종 우승자 : ${winnerNames.join(', ')}`);
  }

  async gameLoop() {
    Console.print('게임 결과\n');
    for (let i = 0; i < this.#gameRounds; i++) {
      this.#carList.map((car) => {
        car.tryMoveForward();
        car.printMoveCount();
      });
      Console.print('');
    }
  }

  async play() {
    await this.parseCarNamesInput();
    await this.parseGameRoundsInput();
    await this.gameLoop();
    const winners = this.printWinnerNames();
  }
}

export default App;
