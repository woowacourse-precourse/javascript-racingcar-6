import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      const CAR_NAMES = await this.getCarNames();
      const TRY_COUNT = await this.getTryCount();
      const CAR_RESULT = this.initializeCarResult(CAR_NAMES);

      for (let i = 0; i < TRY_COUNT; i++) {
        this.runRace(CAR_RESULT);
        this.printResults(CAR_RESULT);
      }
      this.printWinners(CAR_RESULT);
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  async getCarNames() {
    const CAR_NAMES_INPUT = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): "
    );
    const CAR_NAMES = CAR_NAMES_INPUT.split(",");

    if (!CAR_NAMES_INPUT) {
      throw new Error("[ERROR] 자동차 이름을 입력해야 합니다.");
    }
    if (CAR_NAMES.some((name) => name.length > 5 || name.trim() === "")) {
      throw new Error(
        "[ERROR] 자동차 이름은 1자에서 5자 사이이고, 공백이 없어야 합니다."
      );
    }
    return CAR_NAMES;
  }

  async getTryCount() {
    const TRY_COUNT_INPUT = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요? "
    );
    const TRY_COUNT = parseInt(TRY_COUNT_INPUT);
    return TRY_COUNT;
  }

  initializeCarResult(CAR_NAMES) {
    return CAR_NAMES.map((carName) => ({
      name: carName,
      progress: "",
    }));
  }

  runRace(CAR_RESULT) {
    const getRandomNumber = () => MissionUtils.Random.pickNumberInRange(1, 9);
    CAR_RESULT.forEach((car) => {
      const RANDOM_NUMBER = getRandomNumber();
      if (RANDOM_NUMBER >= 4) {
        car.progress += "-";
      }
    });
  }

  printResults(CAR_RESULT) {
    MissionUtils.Console.print("\n실행 결과");
    CAR_RESULT.forEach((car) => {
      MissionUtils.Console.print(`${car.name} : ${car.progress}`);
    });
  }

  printWinners(CAR_RESULT) {
    const MAX_PROGRESS = Math.max(
      ...CAR_RESULT.map((car) => car.progress.length)
    );
    const WINNER = CAR_RESULT.filter(
      (car) => car.progress.length === MAX_PROGRESS
    ).map((car) => car.name);

    if (WINNER.length === 1) {
      MissionUtils.Console.print(`최종 우승자: ${WINNER[0]}`);
    } else {
      MissionUtils.Console.print(`최종 우승자: ${WINNER.join(", ")}`);
    }
  }
}

export default App;
