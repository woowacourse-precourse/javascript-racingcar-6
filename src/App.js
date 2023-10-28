import { MissionUtils } from "@woowacourse/mission-utils";

const ERROR_MESSAGES = {
  CAR_NAME_OVER: "[ERROR] 차량 이름은 5자 이하로 입력해 주세요",
  CAR_NAME_ZERO: "[ERROR] 숫자만 입력해 주세요",
  INPUT_ATTEMPT_NOT_STRING: "[ERROR] 1 또는 2의 숫자만 입력해 주세요.",
};

class App {
  async play() {
    const CARS = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const ATTEMPS_COUNT = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    const CAR_ARRAY = CARS.split(",");
    CAR_ARRAY.forEach((car) => {
      checkCarName(car);
    });
    checkAttempsCount(ATTEMPS_COUNT);

    MissionUtils.Console.print("실행 결과");
    //각 변수를 object화 해서 값을 1씩 증가시키는 방법이 있음.
    const OBJECT = CAR_ARRAY.map((car) => ({ name: car, value: 0 }));

    for (let i = 0; i < ATTEMPS_COUNT; i++) {
      OBJECT.forEach((car, index) => {
        const RANDOMNUMBER = MissionUtils.Random.pickNumberInRange(0, 9);
        if (RANDOMNUMBER >= 4) {
          OBJECT[index].value++;
        }
        let value = "-".repeat(OBJECT[index].value);
        MissionUtils.Console.print(`${OBJECT[index].name} : ${value}`);
      });
      MissionUtils.Console.print("");
    }

    const maxValue = OBJECT.reduce(
      (max, current) => Math.max(max, current.value),
      -Infinity
    );
    const maxObjects = OBJECT.filter((obj) => obj.value === maxValue);
    const names = maxObjects.map((obj) => obj.name).join(", ");
    MissionUtils.Console.print(`최종 우승자 : ${names}`);
  }
}

function checkCarName(car) {
  if (car.length > 5) {
    throw new Error(ERROR_MESSAGES.CAR_NAME_OVER);
  }
  if (car.length === 0) {
    throw new Error(ERROR_MESSAGES.CAR_NAME_ZERO);
  }
}

function checkAttempsCount(attemps) {
  if (isNaN(attemps)) {
    throw new Error(ERROR_MESSAGES.INPUT_ATTEMPT_NOT_STRING);
  }
}

export default App;
