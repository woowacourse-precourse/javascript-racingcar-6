import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    await start();
  }
}

function start() {
  return new Promise(async (resolve, reject) => {
    beforeStart(resolve, reject);
  });
}

function startMent() {
  MissionUtils.Console.print(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
  );
}

async function beforeStart(resolve, reject) {
  try {
    startMent();
    const CARSE_NAME = await MissionUtils.Console.readLineAsync("");
    const SPLITECARS_NAME = splitCars(CARSE_NAME);
    carsForEach(SPLITECARS_NAME);
    carsNumberError(SPLITECARS_NAME);
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

const app = new App();
app.play();

export default App;
