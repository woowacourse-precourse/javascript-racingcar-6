import { Console, Random } from "@woowacourse/mission-utils";
import { ERROR, GUIDE_MESSAGE } from "./Constant/Constant";
import InputView from "./View/InputView";
import OutputView from "./View/OutputView";

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

  printWinner() {
    let maxscore = Math.max(...this.#carscurstat);

    let winner = [];
    this.#carscurstat.map((score, idx) => {
      if (score === maxscore) winner.push(this.#usercars[idx]);
    });

    OutputView.PrintWinner(winner);
  }

  async game() {
    await InputView.readUserCars((input) => this.setUserCars(input));

    await InputView.readUserTrynum((input) => this.setTrynum(input));

    OutputView.PrintGameStart();
    let trynum = this.#gametrynum;
    while (trynum--) {
      this.CarsRandomGenerator();
      OutputView.PrintMoveStat(this.#usercars, this.#carscurstat);
      this.ResetCarsRandom();
    }
    this.printWinner();
  }
}

export default App;
