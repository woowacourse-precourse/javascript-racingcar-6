import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    await racingStart();
  }
}

function racingStart() {
  return new Promise(async (resolve, reject) => {
    racingProcess(resolve, reject);
  });
}

function startSentence() {
  MissionUtils.Console.print(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
  );
}

function attemptCountSentence() {
  MissionUtils.Console.print("시도할 횟수는 몇 회인가요?");
}

async function racingProcess(resolve, reject) {
  try {
    startSentence();
    const CARSE_NAME = await MissionUtils.Console.readLineAsync("");
    const SPLITECARS_NAME = splitCars(CARSE_NAME);
    carsForEach(SPLITECARS_NAME);
    carsNumberError(SPLITECARS_NAME);
    attemptCountSentence();
    const ATTEMPT_COUNT = await MissionUtils.Console.readLineAsync("");
    attemptCount(ATTEMPT_COUNT);
    resolve();
  } catch (error) {
    console.error(error + ` 레이싱 자동차 등록에 실패했습니다.`);
    reject(new Error("[ERROR]"));
  }
}

function splitCars(cars) {
  const SPLIT_CARSARRAY = cars.split(",");
  return SPLIT_CARSARRAY;
}

function carsNumberError(cars) {
  const CARSNUMBER_COUNT = cars.length;
  if (CARSNUMBER_COUNT < 1) {
    throw new Error("[ERROR]");
  }
  return Error;
}

function carsNameError(car) {
  if (car.length < 1 || car.length > 6) {
    throw new Error("[ERROR]");
  }
  return Error;
}

function carsForEach(cars) {
  cars.forEach((car) => {
    carsNameError(car);
  });
}

function attemptCount(count) {
  if (count < 2 || typeof count !== number) {
    throw new Error("[ERROR]");
  }
}

const app = new App();
app.play();

export default App;
