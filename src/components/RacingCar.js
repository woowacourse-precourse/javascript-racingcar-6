import { Console } from "@woowacourse/mission-utils";
import { CreateNumber } from "./CreateNumber.js";
import AppConstants from "../constants/AppConstants.js";
import Messages from "../constants/Messages.js";

export class RacingCar {
  constructor(inputNameArray, inputNumber) {
    this.inputNameArray = inputNameArray;
    this.inputNumber = inputNumber;
  }

  output() {
    const nameArrayLength = this.inputNameArray.length;
    const forwardCounts = new Array(nameArrayLength).fill(0);
    // 실행 결과
    Console.print(Messages.OUTPUT);
    for (let i = 0; i < this.inputNumber; i++) {
      for (let j = 0; j < nameArrayLength; j++) {
        forwardCounts[j] += this.isForward();
        Console.print(`${this.inputNameArray[j]} : ${AppConstants.FORWARD.repeat(forwardCounts[j])}`);
      }
      Console.print("");
    }
    // 최종 우승자
    const maxValue = Math.max(...forwardCounts);
    const winners = this.inputNameArray.filter((_, i) => forwardCounts[i] === maxValue);
    Console.print(winners.map((winner) => winner).join(", "));
  }

  isForward() {
    const randomNumber = new CreateNumber().randomNumber;
    return randomNumber >= AppConstants.FORWARD_CONDITION;
  }
}
