import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.car = [];
    this.pos = [];
    this.winner = [];
    this.attempt = 0;
  }

  async play() {
    await this.init();
    Console.print("실행 결과\n");
    this.gameStart();
    this.printGame();
  }

  gameStart() {
    for (let i = 0; i < this.car.length; i += 1) {
      const RANDOM_NUM = Random.pickNumberInRange(0, 9);
        if (RANDOM_NUM >= 4) {
          this.pos[i] += "-"; 
        }
      }
    }

  printGame() {
    for (let i = 0;i<this.car.length; i += 1) {
      Console.print(`${this.car[i]} : ${this.pos[i]}`);
    }
    Console.print("");

    this.setWinner();
    Console.print(`최종 우승자 : ${this.getWinner()}`);
  }

  getWinner() {
    return this.winner;
  }
  
  setWinner() {
    const maxPos = Math.max(...this.pos.map((pos) => pos.length));

    for (let i = 0; i < this.car.length; i += 1) {
      if (this.pos[i].length === maxPos) {
        this.winner.push(this.car[i]);
      }
    }
  }
  
  setCar(car) {
    this.car = car;
  }

  setAttempt(attempt) {
    return this.attempt;
  }

  setPos(length) {
    this.pos = new Array(length).fill("");
  }

  async getCarName() {
    const carName = (
      await Console.readLineAsync(
        "자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
      )
    ).split(",");
    return carName;
  }
  
  static CarNameValidator(CarName) {
    if (CarName.filter((car) => car.length <= 5).length < CarName.length) {
      throw new Error("[ERROR] 이름은 5자 이하가 되어야 합니다.");
    }
  }

  async getAttempt() {
    const attempt = (
      await Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?\n"
      )
    );
    return attempt;
  }

  static AttemptValidator(attempt) {
    try {
      if (attempt < 1) {
        throw new Error("[ERROR] 시도 횟수는 1회 이상이어야 합니다.\n");
      }
      Number(attempt)
    }
    catch(e) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.\n");
    }
  }

  async init() { 
    const carName = await this.getCarName();
    App.CarNameValidator(carName);

    this.setCar(carName);

    const attempt = await this.getAttempt();
    App.AttemptValidator(attempt);

    this.setAttempt(attempt);
    this.setPos(this.car.length);
  }
}

export default App;
