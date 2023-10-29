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
<<<<<<< HEAD

=======
    //5 자 이하여야 한다.
>>>>>>> a42ea4848b0a6b242fa83e8a9d4c12f97b178e3d
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
<<<<<<< HEAD

=======
    //공백이면 안된다.
    carModelsArr.forEach((e) => {
      if (e === "") {
        throw new Error("[ERROR] 공백인 이름이 있습니다.");
      }
    });
    //중복되면 안된다.
>>>>>>> a42ea4848b0a6b242fa83e8a9d4c12f97b178e3d
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
<<<<<<< HEAD
    let attempt = this.attempt;
    Console.print(PromptMessage.PRINT_RACESTART);
=======
    let attempt = this.attempt; // 5
    Console.print("\n실행 결과");
>>>>>>> a42ea4848b0a6b242fa83e8a9d4c12f97b178e3d
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
<<<<<<< HEAD

    Console.print(PromptMessage.PRINT_WINNER(winner.join(", ")));
=======
    Console.print(`최종 우승자 : ${winner.join(", ")}`);
>>>>>>> a42ea4848b0a6b242fa83e8a9d4c12f97b178e3d
  }
}

export default GameModel;
