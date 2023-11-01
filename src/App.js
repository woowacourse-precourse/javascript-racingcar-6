import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    const RACING_CARS = await this.inputRacingCars();
    const TRY_NUMBER = await this.inputTryNumer();
    const RESULT_OF_PROCESS = await this.progressGameProcess(
      RACING_CARS,
      TRY_NUMBER
    );

    this.printGameResult(RACING_CARS, RESULT_OF_PROCESS);
  }

  async inputRacingCars() {
    let racingCars = Array();

    try {
      racingCars = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );

      if (!racingCars.includes(",")) {
        throw new Error("[ERROR] 쉼표가 없습니다.");
      }

      racingCars = racingCars.split(",");

      const ERROR_FLAG = racingCars.some((item) => {
        return item.length > 5;
      });

      if (ERROR_FLAG) {
        throw new Error("[ERROR] 자동차 이름이 5자 이하인 것이 존재합니다.");
      } else if (racingCars.length <= 1) {
        throw new Error("[ERROR] 경주할 자동차가 부족합니다.");
      }

      return racingCars;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async inputTryNumer() {
    let tryNumber = 0;

    try {
      tryNumber = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
      tryNumber = parseInt(tryNumber);

      if (isNaN(tryNumber)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }

      return tryNumber;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  progressGameProcess(racingCars, tryNumber) {
    Console.print("\n실행 결과");

    let forwardProcess = Array(racingCars.length);
    let LengthOfForwardProces = Array(racingCars.length);
    forwardProcess.fill("");

    for (let i = 0; i < tryNumber; i++) {
      for (let j = 0; j < racingCars.length; j++) {
        let forwardNumber = Random.pickNumberInRange(0, 9);

        if (forwardProcess[j] == "") {
          LengthOfForwardProces[j] = 0;
        }

        if (forwardNumber >= 4) {
          forwardProcess[j] += "-".repeat(1);
          LengthOfForwardProces[j] = forwardProcess[j].length;
        }

        Console.print(racingCars[j] + " : " + forwardProcess[j]);
      }

      Console.print("");
    }

    return LengthOfForwardProces;
  }

  printGameResult(racingCars, LengthOfForwardProces) {
    const FORWARD_NUMBER_OF_WINNER = Math.max.apply(
      null,
      LengthOfForwardProces
    );
    let result = Array();

    for (let location = 0; location < racingCars.length; location++) {
      if (LengthOfForwardProces[location] === FORWARD_NUMBER_OF_WINNER) {
        result.push(racingCars[location]);
      }
    }

    Console.print("최종 우승자" + " : " + result.join(","));
  }
}

const app = new App();
app.play();

export default App;
