import { ErrorMessage, PromptMessage } from "../views/Messages.js";
import { Random, Console } from "@woowacourse/mission-utils";

class GameModel {
  constructor() {
    this.carModels = {};
    this;
  }

  async getCarModels() {
    const getCarModels = await Console.readLineAsync(
      PromptMessage.ENTER_CARNAME
    );
    this.carModelsArr = getCarModels.split(",").map((name) => name.trim());
    const carModelsArr = this.carModelsArr;
    carModelsArr.forEach((e) => {
      if (e.length > 5) {
        throw new Error(ErrorMessage.INVALID_LENGTH);
      }
    });

    carModelsArr.forEach((e) => {
      if (e === "") {
        throw new Error(ErrorMessage.SPACE_NAME);
      }
    });

    const set = new Set(carModelsArr);
    if (carModelsArr.length !== set.size) {
      throw new Error(ErrorMessage.DUPLICATE_NAME);
    }

    carModelsArr.forEach((car) => {
      this.carModels[car] = {
        forwardCountArr: [],
      };
    });
  }

  async getRaceAttempt() {
    const getRaceAttempt = await Console.readLineAsync(
      PromptMessage.ENTER_ATTEMPT
    );
    this.attempt = parseInt(getRaceAttempt);

    if (isNaN(getRaceAttempt) !== false) {
      throw new Error(ErrorMessage.INVALID_INPUT);
    }
  }

  getRandomValue() {
    let rand = Random.pickNumberInRange(0, 9);
    return rand;
  }

  getForwardCount(car) {
    let randomValue = this.getRandomValue();
    if (randomValue >= 4) {
      // this.forwardCountArr.push("-");
      this.carModels[car].forwardCountArr.push("-");
    }
    return this.carModels[car].forwardCountArr.join("");
  }

  printCarForward() {
    for (const car in this.carModels) {
      let forwardCount = this.getForwardCount(car);
      Console.print(`${car} : ${forwardCount}`);
    }
  }

  repeatRace() {
    let attempt = this.attempt;
    Console.print(PromptMessage.PRINT_RACESTART);

    while (attempt > 0) {
      this.printCarForward();
      attempt--;
      Console.print(" ");
    }
  }

  // winner 결정
  printWinner() {
    const totalCountArr = [];
    const maxCountIndexArr = [];
    for (const car in this.carModels) {
      let forwardCount = this.carModels[car].forwardCountArr;
      totalCountArr.push(forwardCount.length);
    }
    let formIndex = totalCountArr.indexOf(Math.max(...totalCountArr));

    //최댓값 들어있는 인덱스들의 값 반환
    while (formIndex != -1) {
      maxCountIndexArr.push(formIndex);
      formIndex = totalCountArr.indexOf(
        Math.max(...totalCountArr),
        formIndex + 1
      );
    }

    const winner = maxCountIndexArr.map((idx) => this.carModelsArr[idx]);

    Console.print(`최종 우승자 : ${winner.join(", ")}`);
  }
}

export default GameModel;
