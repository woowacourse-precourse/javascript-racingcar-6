import { Console } from '@woowacourse/mission-utils';

class App {
  #cars = [];
  #number;

  constructor() {
    this.cars = { name: '', move: 0, total: 0 };
  }

  async play() {
    this.startGame();
  }

  startGame() {
    this.inputCarName().then(() => {
      this.inputNumber();
    });
  }

  async inputCarName() {
    await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    ).then((input) => {
      const carNames = input.split(',');
      this.#cars = carNames.map((name) => ({ name, move: 0, total: 0 }));
      console.log(this.#cars);
    });
  }

  async inputNumber() {
    this.#number = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    console.log(this.#number);
  }
}

export default App;
