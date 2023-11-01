import { MissionUtils } from "@woowacourse/mission-utils";
import { Car } from './Car.js';
import { GameOptions } from './GameOptions.js';

export class Game {
  /**
   * @type {Car[]}
   */
  #cars = [];
  #totalGameMoves;

  constructor(gameOptions) {
    if (!(gameOptions instanceof GameOptions)) {
        throw new Error('[Game] gameOptions - invalid argument');
    }
    const { cars, totalMoves } = gameOptions;
    
    this.#cars = cars;
    this.#totalGameMoves = totalMoves;
  }
  
  async startPlay() {
    MissionUtils.Console.print("실행 결과");
    while (this.#totalGameMoves > 0) {
      for (const car of this.#cars) {
        this.#playCar(car);
        this.#printCarScore(car);
        MissionUtils.Console.print("");
      }
      this.#totalGameMoves--;
    }
    this.#printWinners();
  }

  #playCar(car) {
    const myNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (myNumber >= 4) {
      car.moveForward();
    }
  }

  #printCarScore(car) {
    const { name, moves } = car.score();
    const sticks = this.#drawSticks(moves);
    MissionUtils.Console.print(`${name} : ${sticks}`);
  }

  #printWinners() {
    const scores = this.#cars.map((car) => car.score());
    const maxMoves = Math.max(...scores.map(({ moves }) => moves));
    const winners = scores.filter(({ moves }) => moves === maxMoves);
    const winnerNames = winners.map(({ name }) => name).join(", ");
    MissionUtils.Console.print(`최종 우승자 : ${winnerNames}`);
  }

  #drawSticks(moves) {
    let str = "";
    for (let i = 0; i < moves; i++) {
      str += "-";
    }
    return str;
  }
}
