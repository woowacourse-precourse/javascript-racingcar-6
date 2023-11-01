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
    MissionUtils.Console.print("");
    MissionUtils.Console.print("실행 결과");
    MissionUtils.Console.print("");

    timesResult(SPLITECARS_NAME, ATTEMPT_COUNT);

    resolve();
  } catch (error) {
    MissionUtils.Console.print(error + ` 레이싱 자동차 등록에 실패했습니다.`);
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
  if (car.length < 1 || car.length > 5) {
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
  if (count < 1) {
    throw new Error("[ERROR]");
  }
}

function racingCondition() {
  const CONDITION = MissionUtils.Random.pickNumberInRange(0, 9);
  if (CONDITION >= 4) {
    return "MOVING_FORWARD";
  } else return "STOP";
}

function aTimeConditonResult() {
  const RECIVEDCONDTION = racingCondition();
  if (RECIVEDCONDTION === "MOVING_FORWARD") {
    return "-";
  } else if (RECIVEDCONDTION === "STOP") {
    return "";
  }
}

function readyCars(cars) {
  const racingCars = [...cars];
  let startedCars = racingCars.map((car) => {
    return `${car} : `;
  });

  return startedCars;
}

function updateDistances(cars, distances) {
  cars.forEach((car, index) => {
    distances[index] += aTimeConditonResult();
  });
}

function printDistances(cars, distances) {
  cars.forEach((car, index) => {
    MissionUtils.Console.print(`${car}${distances[index]}`);
  });
  MissionUtils.Console.print("");
}

function timesResult(cars, attemptCount) {
  let distances = Array(cars.length).fill("");

  for (let i = 0; i < attemptCount; i++) {
    updateDistances(readyCars(cars), distances);
    printDistances(readyCars(cars), distances);
  }
}

const app = new App();
app.play();

export default App;
