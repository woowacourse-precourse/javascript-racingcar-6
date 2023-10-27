import { MissionUtils } from "@woowacourse/mission-utils";
import { Message } from "./message.js";

class App {
  async play() {}
}

async function getCarInput() {
  const message = new Message();
  const input = await MissionUtils.Console.readLineAsync(
    `${message.carInputMessage}`
  );
  const carArray = input.split(",");
  return carArray;
}

async function inputToArray(input) {
  const carArray = input.split(",");
  return carArray;
}

async function validateCarArray(carArray) {
  const message = new Message();
  if (carArray.length < 2) {
    throw new Error(`${message.carInputErrorMessage4}`);
  }
  if (carArray.length > 10) {
    throw new Error(`${message.carInputErrorMessage5}`);
  }
  if (carArray.some((car) => car.length > 10)) {
    throw new Error(`${message.carInputErrorMessage}`);
  }
  if (carArray.some((car) => car.trim().length === 0)) {
    throw new Error(`${message.carInputErrorMessage2}`);
  }
  if (carArray.some((car, index) => carArray.indexOf(car) !== index)) {
    throw new Error(`${message.carInputErrorMessage3}`);
  }
}

export default App;
