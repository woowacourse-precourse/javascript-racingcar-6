import OutputView from "../View/OutputView";
import Car from "./Car";

class RacingGame {
  // Car은 name으로 생성하고, move(random)으로 전진.
  #cars;
  #roundnum;

  constructor(carinputs, gametrynum) {
    this.#cars = carinputs.split(",").map((item) => new Car(item)); // Car의 배열
    this.#roundnum = gametrynum;
  }

  start() {
    let trynum = this.#roundnum;
    while (trynum--) {
      this.#cars.forEach((car) => car.move());
      OutputView.PrintMoveStat(this.#cars);
    }

    this.end();
  }

  end() {
    let scorearr = this.#cars.map((item) => item.getMoveStat());
    let maxscore = Math.max(...scorearr);

    let winner = [];

    this.#cars.map((car, idx) => {
      if (car.getMoveStat() === maxscore) winner.push(car.getName());
    });

    OutputView.PrintWinner(winner);
  }
}

export default RacingGame;
