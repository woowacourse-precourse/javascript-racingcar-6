import { Console, Random } from '@woowacourse/mission-utils';

class App {
  #cars = [];
  #number;

  constructor() {
    this.#cars = { name: '', move: 0, total: 0 };
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
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    ).then((input) => {
      const carNames = input.split(',');
      this.#cars = carNames.map((name) => ({ name, move: 0, total: 0 }));
      console.log(this.#cars);
    });
  }

  async inputNumber() {
    this.#number = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    console.log(this.#number);
    this.startRace();
  }

  async startRace() {
    Console.print('실행 결과\n');
    for (let i = 0; i < this.#number; i++) {
      await this.advanceCar();
    }

    this.#cars.forEach((car) => {
      console.log(`${car.name} : ${car.move}`);
    });

    console.log(this.#cars);
  }

  async advanceCar() {
    return new Promise((resolve) => {
      this.#cars.forEach((car) => {
        const randomNumber = Random.pickNumberInRange(0, 9);
        if (randomNumber >= 4) {
          this.move(car);
          console.log(`${car.name} : ${randomNumber}`);
        }
      });
      setTimeout(resolve, 1000);
    });
  }

  move(car) {
    car.move += 1;
  }
}

export default App;
