import { Console } from "@woowacourse/mission-utils";
import { CreateNumber } from "./CreateNumber.js";
import AppConstants from "../constants/AppConstants.js";
import Messages from "../constants/Messages.js";

class RacingCar {
  constructor(inputNameArray, inputNumber) {
    this.inputNameArray = inputNameArray;
    this.inputNumber = inputNumber;
  }
  output() {
    const nameArrayLength = this.inputNameArray.length;
    const forwardCountsArray = new Array(nameArrayLength).fill(0);

    Console.print(Messages.OUTPUT);
    for (let i = 0; i < this.inputNumber; i++) {
      for (let j = 0; j < nameArrayLength; j++) {
        forwardCountsArray[j] += this.isForward();
        Console.print(`${this.inputNameArray[j]} : ${AppConstants.FORWARD.repeat(forwardCountsArray[j])}`);
      }
      Console.print("\t");
    }

    const maxValue = Math.max(...forwardCountsArray);
    const winnerArray = [];
    for (let i = 0; i < nameArrayLength; i++) {
      if (forwardCountsArray[i] == maxValue) {
        winnerArray.push(this.inputNameArray[i]);
      }
    }
    Console.print(winnerArray.map((winner) => winner).join(", "));
  }
  isForward() {
    const randomNumber = new CreateNumber().randomNumber;
    return randomNumber >= AppConstants.FORWARD_CONDITION;
  }
}

export default RacingCar;
