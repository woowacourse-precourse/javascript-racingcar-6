import { Random } from "@woowacourse/mission-utils";
import { GameOutput } from "../view/GameOutput.js";

const GO = 1;

export default class Distance {
  isGoStop(carObject) {
    const num = Random.pickNumberInRange(0, 9);
    if (num > 3) {
      carObject.distance += GO;
    }
  }
  async addDistancePrintArray(attempts, carArray) {
    GameOutput.printResult();
    for (let i = 0; i < attempts; i++) {
      carArray?.map((carObject) => {
        this.isGoStop(carObject);
        GameOutput.printDistance(carObject);
      });
      GameOutput.printEnter();
    }
  }
}
