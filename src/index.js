import { Console, MissionUtils } from "@woowacourse/mission-utils";
import App from "./App.js";

class GamePlay {
  async getUserInput(message) {
    const INPUT = await Console.readLineAsync(message);

    return INPUT;
  }

  setInitialMovePoint(Cars) {
    const CAR_POINT = {};
    Cars.map((el) => (CAR_POINT[el] = 0));

    return CAR_POINT;
  }

  async calculateCarMove(cars) {
    const CAR_LIST = cars.split(",");
    const CAR_POINT = this.setInitialMovePoint(CAR_LIST);

    const CAR_MOVEPOINT = [];
    const TRY_TIMES = await this.getTryTimes();

    for (let i = 0; i < TRY_TIMES; i++) {
      CAR_LIST.map((el) => {
        const number = MissionUtils.Random.pickNumberInRange(0, 9);
        CAR_MOVEPOINT.push(number);

        if (number >= 4) CAR_POINT[el] += 1;
        const MOVE_COUNT = "-".repeat(CAR_POINT[el]);

        Console.print(`${el} : ${MOVE_COUNT}`);
      });

      // 콘솔 화면 상 각 횟수별 결과 구별위한 출력
      Console.print("");
    }
    this.selectWinner(CAR_POINT);
    console.log(CAR_POINT);
    // console.log(TRY_TIMES);
  }

  selectWinner(result) {
    // const MOVE_RESULT = Object.keys(result);
    const WINNERS = [];

    const RANK = Object.keys(result).sort((a, b) => result[b] - result[a]);
    WINNERS.push(RANK[0]);

    for (let i = 0; i < RANK.length; i++) {
      if (result[RANK[i]] !== result[RANK[i + 1]]) break;
      WINNERS.push(RANK[i + 1]);
    }

    const ANSWER = WINNERS.join(", ");
    Console.print(`최종 우승자 : ${ANSWER}`);
  }

  async getCarNames() {
    const INPUT = await this.getUserInput(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );

    const CARS = INPUT.split(",");

    for (let i = 0; i < CARS.length; i++) {
      if (CARS[i].length > 5)
        throw new Error("[ERROR] 이름은 5자 이하로 입력해주세요.");

      const regex = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
      if (regex.test(CARS[i]))
        throw new Error("[ERROR] 이름이 잘못된 형식입니다.");
    }

    await this.calculateCarMove(INPUT);
  }

  async getTryTimes() {
    const TIMES = await this.getUserInput("시도할 횟수는 몇 회인가요?");

    return TIMES;
  }
}

export default GamePlay;
