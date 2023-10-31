import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const USER_INPUT_CARS_NAME = await Console.readLineAsync("");
    const CARS = USER_INPUT_CARS_NAME.split(",");

    if (CARS.length <= 1) {
      throw new Error("[ERROR] 경주할 자동차는 2대 이상이어야 합니다.");
    }

    for (let car of CARS) {
      if (car.length > 5 || car.length < 1) {
        throw new Error(
          "[ERROR] 각 자동차의 이름은 1글자 이상 5글자 이하여야 합니다."
        );
      }
    }

    Console.print("실행할 횟수는 몇 회인가요?");
    const USER_INPUT_PLAYTIME = await Console.readLineAsync("");
    const PLAYTIME = +USER_INPUT_PLAYTIME;

    if (Number.isNaN(PLAYTIME) || PLAYTIME === 0) {
      throw new Error("[ERROR] 실행횟수는 1이상의 숫자만 입력 가능합니다.");
    }

    const RACE_RESULT = [];

    for (let i = 0; i < CARS.length; i++) {
      RACE_RESULT.push({ name: CARS[i], forwardingCount: 0 });
    }

    Console.print("실행 결과");

    for (let i = 1; i <= PLAYTIME; i++) {
      for (let j = 0; j < CARS.length; j++) {
        let random_number = Random.pickNumberInRange(1, 9);
        if (random_number >= 4) {
          RACE_RESULT[j]["forwardingCount"]++;
        }
      }

      for (let j = 0; j < CARS.length; j++) {
        Console.print(
          `${RACE_RESULT[j]["name"]} : ${"-".repeat(
            RACE_RESULT[j]["forwardingCount"]
          )}`
        );
      }

      Console.print("");
    }

    let winner = RACE_RESULT[0]["name"];
    let max = RACE_RESULT[0]["forwardingCount"];

    for (let i = 0; i < CARS.length; i++) {
      if (RACE_RESULT[i]["forwardingCount"] > max) {
        max = RACE_RESULT[i]["forwardingCount"];
        winner = RACE_RESULT[i]["name"];
      } else if (i !== 0 && RACE_RESULT[i]["forwardingCount"] === max) {
        winner = `${winner}, ${RACE_RESULT[i]["name"]}`;
      }
    }

    Console.print(`최종 우승자 : ${winner}`);
  }
}

export default App;
