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
    timesResult(SPLITECARS_NAME, ATTEMPT_COUNT);
    resolve();
  } catch (error) {
    MissionUtils.Console.print(error);
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
    throw new Error("[ERROR] 1대 이상의 자동차를 등록하지 않았습니다.");
  }
  return Error;
}

function carsNameError(car) {
  if (car.length < 1 || car.length > 5) {
    throw new Error("[ERROR] 자동차의 이름을 5자 이하만 가능합니다.");
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
    throw new Error("[ERROR] 시도할 횟수를 잘못 입력했습니다.");
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

function updateDistances(cars, distances) {
  cars.forEach((car, index) => {
    distances[index] += aTimeConditonResult();
  });
}

function printDistances(cars, distances) {
  cars.forEach((car, index) => {
    MissionUtils.Console.print(`${car} : ${distances[index]}`);
  });
  MissionUtils.Console.print("");
}

function findMaxDashes(distances) {
  let maxDashes = { value: 0 };
  let maxIndices = [];

  distances.forEach((distance, index) => {
    updateMaxDashes(distance, index, maxDashes, maxIndices);
  });

  return maxIndices;
}

function updateMaxDashes(distance, index, maxDashes, maxIndices) {
  const DASHES = (distance.match(/-/g) || []).length;
  if (DASHES > maxDashes.value) {
    maxDashes.value = DASHES;
    maxIndices.splice(0, maxIndices.length, index);
  } else if (DASHES === maxDashes.value) {
    maxIndices.push(index);
  }
}

function timesResult(cars, attemptCount) {
  let distances = Array(cars.length).fill("");

  for (let i = 0; i < attemptCount; i++) {
    updateDistances(cars, distances);
    printDistances(cars, distances);
  }

  const MAX_INDICES = findMaxDashes(distances);

  const WINNER = MAX_INDICES.map((index) => cars[index]);
  MissionUtils.Console.print(`최종 우승자: ${WINNER.join(", ")}`);
}

const app = new App();
app.play();

export default App;
