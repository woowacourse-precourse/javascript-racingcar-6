import { Console, Random } from '@woowacourse/mission-utils';

class CarSet {
  #carSet;
  #maxPostion;

  constructor(carsArray) {
    this.#maxPostion = 0;
    this.#carSet = {};

    carsArray.map((car) => {
      this.#carSet[car] = 0;
    });
  }

  race() {
    for (const car in this.#carSet) {
      if (isMove()) {
        this.#carSet[car] += 1;
      }
      if (this.#maxPostion < this.#carSet[car])
        this.#maxPostion = this.#carSet[car];

      const resultText = `${car} : ${'-'.repeat(this.#carSet[car])}\n`;
      Console.print(resultText);
    }
  }

  findWinners() {
    const winnerLength = Math.max(...Object.values(this.#carSet));
    let winnerList = [];
    for (let car in this.#carSet) {
      if (this.#carSet[car] === winnerLength) {
        winnerList.push(car);
      }
    }
    return winnerList;
  }
}

export default CarSet;
function isMove() {
  const randomNumber = Random.pickNumberInRange(0, 9);
  return randomNumber >= 4 ? true : false;
}
