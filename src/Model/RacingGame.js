import OutputView from "../View/OutputView";
import Car from "./Car";

class RacingGame {
  // Car은 name으로 생성하고, move(random)으로 전진.
  #cars;
  #roundnum;

  constructor(cars, gametrynum) {
    this.#cars = cars.map((item) => new Car(item));
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

  getWinner(stats) {
    let maxscore = Math.max(...stats);

    let winner = [];
    this.#cars.map((car) => {
      if (car.getMoveStat() === maxscore) winner.push(car.getName());
    });

    return winner;
  }

  end() {
    let movingStat = this.#cars.map((item) => item.getMoveStat());

    OutputView.PrintWinner(this.getWinner(movingStat));
  }
}

export default RacingGame;
