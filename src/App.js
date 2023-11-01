import { Console, Random } from "@woowacourse/mission-utils";
import { ERROR, GUIDE_MESSAGE } from "./Constant/Constant";

class App {
  #usercars;
  #gametrynum;
  #carsgoorstop;
  #carscurstat;
  #winner;

  constructor() {
    this.#carsgoorstop = [];
  }

  async play() {
    await this.game();
  }

  async readUserCars() {
    await Console.readLineAsync(GUIDE_MESSAGE.READ_CARS).then((input) => {
      this.readCarsValidate(input);
      this.setUserCars(input);
    });
  }
  async readUserTrynum() {
    await Console.readLineAsync(GUIDE_MESSAGE.READ_TRYNUM).then((input) => {
      this.readTrynumValidate(input);
      this.setTrynum(input);
    });
  }
  readCarsValidate(input) {
    let inputCars = input.split(",");
    if (inputCars.some((item) => item.length > 5))
      throw new Error(ERROR.CARS_LENGTH_ERROR);
    let set = new Set(inputCars);
    if (set.size !== inputCars.length)
      throw new Error(ERROR.CARS_SAMEINPUT_ERROR);
    if (inputCars.some((item) => item.includes(" "))) {
      throw new Error(ERROR.CARS_SPACE_ERROR);
    }
    if (inputCars.length <= 1) throw new Error(ERROR.CARS_SIZE_ERROR);
  }
  readTrynumValidate(input) {
    if (!input.match(/\d+/g)) throw new Error(ERROR.TRYNUM_TYPE_ERROR);
    if (+input <= 0) throw new Error(ERROR.TRYNUM__SIZE_ERROR);
  }

  setTrynum(input) {
    this.#gametrynum = input;
  }

  setUserCars(input) {
    const cars = input.split(",");
    this.#usercars = cars;
    let len = cars.length;

    this.#carscurstat = new Array(len).fill(0); // 점수 배열 생성
  }

  CarsRandomGenerator() {
    for (let i = 0; i < this.#usercars.length; ++i) {
      let randomnum = Random.pickNumberInRange(0, 9);
      this.#carsgoorstop.push(randomnum);
    }

    this.#carsgoorstop.map((random, idx) => {
      if (random >= 4) {
        this.#carscurstat[idx]++;
      }
    });
  }

  ResetCarsRandom() {
    this.#carsgoorstop = [];
  }

  printCurrentStatus() {
    for (let i = 0; i < this.#usercars.length; ++i) {
      Console.print(
        `${this.#usercars[i]} : ${this.printStatProgress(
          this.#carscurstat[i]
        )}\n`
      );
    }
  }

  printStatProgress(number) {
    let progress = "";
    for (let i = 0; i < number; ++i) {
      progress += "-";
    }
    return progress;
  }

  printWinner() {
    let maxscore = Math.max(...this.#carscurstat);

    let winner = [];
    this.#carscurstat.map((score, idx) => {
      if (score === maxscore) winner.push(this.#usercars[idx]);
    });

    Console.print(`${GUIDE_MESSAGE.WINNER_RESULT} : ${winner.join(", ")}`);
  }

  async game() {
    await this.readUserCars();

    await this.readUserTrynum();

    Console.print(GUIDE_MESSAGE.GAME_START);
    let trynum = this.#gametrynum;
    while (trynum--) {
      this.CarsRandomGenerator();
      this.printCurrentStatus();
      this.ResetCarsRandom();
    }
    this.printWinner();
  }
}

export default App;
