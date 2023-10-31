import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const USER_INPUT_CARS_NAME = await Console.readLineAsync("");
    const CARS = USER_INPUT_CARS_NAME.split(",");

    if (CARS.length !== 3) {
      throw new Error("[Error] 경주할 자동차는 총 3대입니다.");
    }

    for (let car of CARS) {
      if (car.length > 5) {
        throw new Error("[Error] 각 자동차의 이름은 5글자 이하여야 합니다.");
      }
    }

    Console.print("실행할 횟수는 몇 회인가요?");
    const USER_INPUT_PLAYTIME = await Console.readLineAsync("");
    const PLAYTIME = +USER_INPUT_PLAYTIME;

    if (Number.isNaN(PLAYTIME) || PLAYTIME === 0) {
      throw new Error("[ERROR] 실행횟수는 1이상의 숫자만 입력 가능합니다.");
    }

    const [CAR1, CAR2, CAR3] = CARS;

    const RACE_RESULT = {
      car1: {
        name: CAR1,
        forwardingCount: 0,
      },
      car2: {
        name: CAR2,
        forwardingCount: 0,
      },
      car3: {
        name: CAR3,
        forwardingCount: 0,
      },
    };

    Console.print("실행 결과");

    for (let i = 1; i <= PLAYTIME; i++) {
      let random_number = Random.pickNumberInRange(1, 9);
      if (random_number >= 4) {
        RACE_RESULT["car1"]["forwardingCount"]++;
      }
      random_number = Random.pickNumberInRange(1, 9);
      if (random_number >= 4) {
        RACE_RESULT["car2"]["forwardingCount"]++;
      }
      random_number = Random.pickNumberInRange(1, 9);
      if (random_number >= 4) {
        RACE_RESULT["car3"]["forwardingCount"]++;
      }

      Console.print(
        `${RACE_RESULT["car1"]["name"]} : ${"-".repeat(
          RACE_RESULT["car1"]["forwardingCount"]
        )}`
      );
      Console.print(
        `${RACE_RESULT["car2"]["name"]} : ${"-".repeat(
          RACE_RESULT["car2"]["forwardingCount"]
        )}`
      );
      Console.print(
        `${RACE_RESULT["car3"]["name"]} : ${"-".repeat(
          RACE_RESULT["car3"]["forwardingCount"]
        )}`
      );
      Console.print("");
    }

    let winner;
    if (
      RACE_RESULT["car1"]["forwardingCount"] -
        RACE_RESULT["car2"]["forwardingCount"] >
      0
    ) {
      if (
        RACE_RESULT["car1"]["forwardingCount"] -
          RACE_RESULT["car3"]["forwardingCount"] >
        0
      ) {
        winner = RACE_RESULT["car1"]["name"];
      } else if (
        RACE_RESULT["car1"]["forwardingCount"] -
          RACE_RESULT["car3"]["forwardingCount"] ===
        0
      ) {
        winner = `${RACE_RESULT["car1"]["name"]}, ${RACE_RESULT["car3"]["name"]}`;
      } else {
        winner = RACE_RESULT["car3"]["name"];
      }
    } else if (
      RACE_RESULT["car1"]["forwardingCount"] -
        RACE_RESULT["car2"]["forwardingCount"] ===
      0
    ) {
      if (
        RACE_RESULT["car1"]["forwardingCount"] -
          RACE_RESULT["car3"]["forwardingCount"] >
        0
      ) {
        winner = `${RACE_RESULT["car1"]["name"]}, ${RACE_RESULT["car2"]["name"]}`;
      } else if (
        RACE_RESULT["car1"]["forwardingCount"] -
          RACE_RESULT["car3"]["forwardingCount"] ===
        0
      ) {
        winner = `${RACE_RESULT["car1"]["name"]}, ${RACE_RESULT["car2"]["name"]}, ${RACE_RESULT["car3"]["name"]}`;
      } else {
        winner = RACE_RESULT["car3"]["name"];
      }
    } else {
      if (
        RACE_RESULT["car2"]["forwardingCount"] -
          RACE_RESULT["car3"]["forwardingCount"] >
        0
      ) {
        winner = RACE_RESULT["car2"]["name"];
      } else if (
        RACE_RESULT["car2"]["forwardingCount"] -
          RACE_RESULT["car3"]["forwardingCount"] ===
        0
      ) {
        winner = `${RACE_RESULT["car2"]["name"]}, ${RACE_RESULT["car3"]["name"]}`;
      } else {
        winner = RACE_RESULT["car3"]["name"];
      }
    }
    Console.print(`최종 우승자 : ${winner}`);
  }
}

export default App;

new App().play();
