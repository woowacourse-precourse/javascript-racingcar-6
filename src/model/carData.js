import { Random } from "@woowacourse/mission-utils";

class CarData {
  #maxMove;
  #carList;

  constructor(cars) {
    this.#maxMove = 0;

    this.#carList = cars.map((car) => ({ name: car, move: 0 }));
    console.log(this.#carList);
  }

  // moveCar(moveCount) {
  // for (let i = 0; i < moveCount; i++) {
  //   return;
  // }
  // }
}

export default CarData;
