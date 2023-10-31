import { MissionUtils } from "@woowacourse/mission-utils";

const ERROR_MESSAGES = {
  CAR_NAME_OVER: "[ERROR] 차량 이름은 5자 이하로 입력해 주세요",
  CAR_NAME_ZERO: "[ERROR] 차량 이름은 공백을 사용할 수 없습니다.",
  INPUT_ATTEMPT_ZERO: "[ERROR] 횟수는 양의 정수만 입력할 수 있습니다.",
  INPUT_ATTEMPT_NOT_INTEGER: "[ERROR] 숫자만 입력해 주세요.",
};

class App {
  async play() {
    const CAR_ARRAY = await this.inputCarNames();
    const ATTEMPT_COUNT = +(await this.inputAttempt());

    this.checkCarName(CAR_ARRAY);
    this.checkAttemptCount(ATTEMPT_COUNT);

    const CAR_OBJECT_ARRAY = this.makeCarObject(CAR_ARRAY);
    this.showRaceResults(CAR_OBJECT_ARRAY, ATTEMPT_COUNT);
    this.showWinner(CAR_OBJECT_ARRAY);
  }

  showRaceResults(car_object_array, attempt_count) {
    for (let i = 0; i < attempt_count; i++) {
      car_object_array.forEach((car) => {
        const RANDOMNUMBER = MissionUtils.Random.pickNumberInRange(0, 9);
        if (RANDOMNUMBER >= 4) {
          car.value++;
        }
        let value = "-".repeat(car.value);
        MissionUtils.Console.print(`${car.name} : ${value}`);
      });
      MissionUtils.Console.print("");
    }
  }

  showWinner(car_object_array) {
    const MAX_VALUE = car_object_array.reduce(
      (max, current) => Math.max(max, current.value),
      -Infinity
    );
    const WINNERS = car_object_array.filter((car) => car.value === MAX_VALUE);
    MissionUtils.Console.print(
      `최종 우승자 : ${WINNERS.map((car) => car.name).join(", ")}`
    );
  }

  makeCarObject(CAR_ARRAY) {
    //각 변수를 object화 해서 값을 1씩 증가시키는 방법이 있음.
    const CAR_OBJECT_ARRAY = CAR_ARRAY.map((car) => ({ name: car, value: 0 }));
    return CAR_OBJECT_ARRAY;
  }

  async inputCarNames() {
    const CARS = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const CAR_ARRAY = CARS.split(",");
    return CAR_ARRAY;
  }

  inputAttempt() {
    const ATTEMPT_COUNT =
      MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    return ATTEMPT_COUNT;
  }

  checkCarName(CAR_ARRAY) {
    CAR_ARRAY.forEach((car) => {
      if (car.length > 5) {
        throw new Error(ERROR_MESSAGES.CAR_NAME_OVER);
      }
      if (car.length === 0) {
        throw new Error(ERROR_MESSAGES.CAR_NAME_ZERO);
      }
    });
    return CAR_ARRAY;
  }

  checkAttemptCount(attempt) {
    if (
      isNaN(attempt) ||
      !Number.isInteger(attempt) ||
      Math.sign(attempt) !== 1
    ) {
      throw new Error(ERROR_MESSAGES.INPUT_ATTEMPT_NOT_INTEGER);
    }
    if (attempt === 0) {
      throw new Error(ERROR_MESSAGES.INPUT_ATTEMPT_ZERO);
    }
  }
}

export default App;
