import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    start();
  }
}

async function start() {
  const CARS = await MissionUtils.Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  const CAR_ARRAY = CARS.split(",");
  CAR_ARRAY.forEach((car) => {
    checkCarName(car);
  });
  const ATTEMPS_COUNT = await MissionUtils.Console.readLineAsync(
    "시도할 횟수는 몇 회인가요?\n"
  );
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
    MissionUtils.Console.print("\n");
    // MissionUtils.Console.print(OBJECT);
  }
  // MissionUtils.Console.print(OBJECT);
  // MissionUtils.Console.print(CAR_ARRAY);
  // MissionUtils.Console.print(ATTEMPS_COUNT);
  const maxValue = OBJECT.reduce(
    (max, current) => Math.max(max, current.value),
    -Infinity
  );
  const maxObjects = OBJECT.filter((obj) => obj.value === maxValue);
  const names = maxObjects.map((obj) => obj.name).join(", ");
  MissionUtils.Console.print(`최종 우승자 : ${names}`);
}

function checkCarName(car) {
  try {
    if (car.length > 5 || car.length === 0) {
      throw new Error("[ERROR] 차량 이름 입력이 잘못됨.");
    }
  } catch (error) {
    MissionUtils.Console.print(error.message);
  }
}

function checkAttempsCount(attemps) {
  try {
    if (isNaN(attemps)) {
      throw new Error("[ERROR] 횟수 입력이 잘못됨.");
    }
  } catch (error) {
    MissionUtils.Console.print(error.message);
  }
}

export default App;
