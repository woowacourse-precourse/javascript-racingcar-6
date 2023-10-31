import { MissionUtils } from "@woowacourse/mission-utils";
import InputCarName from "./Input/inputCarName.js";
import InputTryAmount from "./Input/inputTryAmount.js";
import MakeRandomNum from "./RandomNum/makeRandomNum.js";
import createCarList from "./Car/createCarList.js";
import FindWinner from "./Process/findWinner.js";

class RacingGame {
  constructor() {
    this.gameObject = {
      carList: [],
      carNameList: [],
      gameTryCount: 0,
    };
  }

  async start() {
    this.gameObject.carNameList = await InputCarName();
    this.gameObject.gameTryCount = await InputTryAmount();

    this.gameObject.carList = await createCarList(this.gameObject.carNameList);
    await this.racing(this.gameObject);
  }

  async racing({ gameTryCount, carList }) {
    MissionUtils.Console.print("실행 결과\n");
    MissionUtils.Console.print(carList);
    MissionUtils.Console.print(gameTryCount);
    for (let i = 0; i < gameTryCount; i++) {
      carList.forEach((carElement) => {
        let randomNumber = MakeRandomNum();
        if (randomNumber >= 4) {
          carElement.plusCount();
        }

        MissionUtils.Console.print(`${carElement.name} : ${"-".repeat(carElement.count)}`);
      });
    }

    const winner = await FindWinner(carList);

    const result = [...winner].join(", ");
    await MissionUtils.Console.print(`최종 우승자 : ${result}`);
    return false;
  }

  // printWinner({ carList }) {
  //   let winner = [];
  //   let winnerCount = 0;

  //   carList.forEach((winCarElement) => {
  //     if (winnerCount < winCarElement.count) {
  //       winnerCount = winCarElement.count;
  //       winner = [winCarElement.name];
  //     } else if (winnerCount === winCarElement.count) {
  //       winner.push(winCarElement.name);
  //     }
  //   });

  //   return winner;
  // }
}

export default RacingGame;
