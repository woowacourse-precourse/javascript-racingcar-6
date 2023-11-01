import { Console, Random } from "@woowacourse/mission-utils";
import { FORWARD_CRITERIA } from "./Constants.js";

class CarList {
  constructor(nameList) {
    this.names = nameList;
    this.positions = new Array(nameList.length).fill(0);
  }

  race(tryCount) {
    for (let count = 0; count < tryCount; count += 1) {
      const numbers = this.generateRandomNumbers();
      this.move(numbers);
      this.printPositions();
    }
  }

  printPositions() {
    Console.print("\n");

    const moveSign = this.positions.map((move) => "-".repeat(move));
    this.names.forEach((name, index) => {
      Console.print(`${name} : ${moveSign[index]}`);
    });
  }

  generateRandomNumbers() {
    const carMoves = Array.from({ length: this.names.length }, () =>
      Random.pickNumberInRange(0, 9)
    );

    return carMoves;
  }

  move(numberList) {
    this.positions.forEach((position, index) => {
      if (numberList[index] >= FORWARD_CRITERIA) {
        this.positions[index] += 1;
      }
    });
  }
}

export default CarList;
