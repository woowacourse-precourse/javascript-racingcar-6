import { Random } from "@woowacourse/mission-utils";
import { GameOutput } from "../view/GameOutput.js";

const GO = 1;

export default class Distance {
  async addDistancePrintArray(attempts, carArray) {
    GameOutput.printResult();
    for (let i = 0; i < attempts; i++) {
      carArray.map((carObject) => {
        let randomNumber = Random.pickNumberInRange(0, 9);
        this.isGoStopAndPrintObject(randomNumber, carObject);
      });
      GameOutput.printEnter();
    }
  }

  isGoStopAndPrintObject(randomNumber, carObject) {
    if (randomNumber > 3) {
      carObject.distance += GO;
    }
    GameOutput.printDistance(carObject);
  }
}
