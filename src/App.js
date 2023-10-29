import { MissionUtils } from "@woowacourse/mission-utils";

const ERROR_MESSAGES = {
  CAR_NAME_OVER: "[ERROR] 차량 이름은 5자 이하로 입력해 주세요",
  CAR_NAME_ZERO: "[ERROR] 정수만 입력해 주세요",
  INPUT_ATTEMPT_ZERO: "[ERROR] 횟수는 0을 입력할 수 없습니다.",
  INPUT_ATTEMPT_NOT_INTEGER: "[ERROR] 숫자만 입력해 주세요.",
};

class App {
  async play() {
    const CAR_ARRAY = await inputCarNames();
    const ATTEMPT_COUNT = +(await inputAttempt());

    checkCarName(CAR_ARRAY);
    checkAttemptCount(ATTEMPT_COUNT);

    const CAR_OBJECT_ARRAY = makeCarObject(CAR_ARRAY);
    showRaceResults(CAR_OBJECT_ARRAY, ATTEMPT_COUNT);
    showWinner(CAR_OBJECT_ARRAY);
  }
}

function showRaceResults(car_object_array, attempt_count) {
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

function showWinner(car_object_array) {
  const MAX_VALUE = car_object_array.reduce(
    (max, current) => Math.max(max, current.value),
    -Infinity
  );
  const WINNERS = car_object_array.filter((car) => car.value === MAX_VALUE);
  MissionUtils.Console.print(
    `최종 우승자 : ${WINNERS.map((car) => car.name).join(", ")}`
  );
}

function makeCarObject(CAR_ARRAY) {
  //각 변수를 object화 해서 값을 1씩 증가시키는 방법이 있음.
  const CAR_OBJECT_ARRAY = CAR_ARRAY.map((car) => ({ name: car, value: 0 }));
  return CAR_OBJECT_ARRAY;
}

async function inputCarNames() {
  const CARS = await MissionUtils.Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  const CAR_ARRAY = CARS.split(",");
  return CAR_ARRAY;
}

function inputAttempt() {
  const ATTEMPT_COUNT =
    MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  return ATTEMPT_COUNT;
}

function checkCarName(CAR_ARRAY) {
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

function checkAttemptCount(attempt) {
  if (isNaN(attempt) || !Number.isInteger(attempt)) {
    throw new Error(ERROR_MESSAGES.INPUT_ATTEMPT_NOT_INTEGER);
  }
  if (attempt === 0) {
    throw new Error(ERROR_MESSAGES.INPUT_ATTEMPT_ZERO);
  }
}

export default App;
