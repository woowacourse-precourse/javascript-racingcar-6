import { Random } from "@woowacourse/mission-utils";

class CarData {
  #maxMove;
  #carList;

  constructor(cars) {
    this.#maxMove = 0;
    this.#carList = cars.map((car) => ({ name: car, move: 0 }));
  }

  moveOrNot() {
    const moveOrNot = Random.pickNumberInRange(0, 9);
    if (moveOrNot >= 4) return true;
    return false;
  }

  updateMaxMove(moveCount) {
    this.#maxMove = Math.max(this.#maxMove, moveCount);
  }

  moveCar() {
    this.#carList.forEach((car) => {
      if (this.moveOrNot()) car.move += 1;
      this.updateMaxMove(car.move);
    });
    return this.#carList;
  }

  findWinner() {
    const winners = this.#carList.filter((car) => car.move === this.#maxMove);
    return winners.map((car) => car.name);
  }
}

export default CarData;
