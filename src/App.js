import { Console, Random } from "@woowacourse/mission-utils";
import { ERROR, GUIDE_MESSAGE } from "./Constant/Constant";
import InputView from "./View/InputView";

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
    await InputView.readUserCars((input) => this.setUserCars(input));

    await InputView.readUserTrynum((input) => this.setTrynum(input));

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
