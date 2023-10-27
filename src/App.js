import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const carArray = await getCarInput();
    validateCarArray(carArray);
    MissionUtils.Console.print(carArray);
  }
}

async function getCarInput() {
  const message = new Message();
  const input = await MissionUtils.Console.readLineAsync(
    `${message.carInputMessage}`
  );
  const carArray = input.split(`,`);
  return carArray;
}

async function validateCarArray(carArray) {
  const message = new Message();
  if (carArray.length < MIN_CAR_COUNT) {
    throw new Error(`${message.carInputErrorMessage4}`);
  }
  if (carArray.length > MAX_CAR_COUNT) {
    throw new Error(`${message.carInputErrorMessage5}`);
  }
  if (carArray.some((car) => car.length > MAX_NAME_LENGTH)) {
    throw new Error(`${message.carInputErrorMessage}`);
  }
  if (carArray.some((car) => car.trim().length === 0)) {
    throw new Error(`${message.carInputErrorMessage2}`);
  }
  if (carArray.some((car, index) => carArray.indexOf(car) !== index)) {
    throw new Error(`${message.carInputErrorMessage3}`);
  }
}

const app = new App();
app.play();

export default App;
