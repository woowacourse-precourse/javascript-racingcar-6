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
    MissionUtils.Console.print(gameTryCount);
    for (let i = 0; i < gameTryCount; i++) {
      carList.forEach((carElement) => {
        let randomNumber = MakeRandomNum();
        if (randomNumber >= 4) {
          carElement.plusCount();
        }

        MissionUtils.Console.print(`${carElement.name} : ${"-".repeat(carElement.count)}`);
      });
      MissionUtils.Console.print("\n");
    }

    const winner = await FindWinner(carList);

    const result = [...winner].join(", ");
    await MissionUtils.Console.print(`최종 우승자 : ${result}`);
    return false;
  }
}

export default RacingGame;
