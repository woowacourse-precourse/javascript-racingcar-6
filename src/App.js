import { MissionUtils } from "@woowacourse/mission-utils";
import { Text } from "./common/text";
class App {
  async play() {
    const names = await MissionUtils.Console.readLineAsync(Text.INPUT_NAMES);
    if (!isValidNames(names)) throw new Error(Text.ERROR);
    const number = await MissionUtils.Console.readLineAsync(Text.INPUT_NUMBER);
    if (!isValidNumber(number)) throw new Error(Text.ERROR);
    const result = initResult(names);
    MissionUtils.Console.print(Text.RESULT);
    for (let i = 0; i < number; i++) {
      for (let j = 0; j < result.length; j++) {
        const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
        if (randomNumber >= 4) result[j][1] += "-";
      }
      for (let j = 0; j < result.length; j++) {
        MissionUtils.Console.print(`${result[j][0]} : ${result[j][1]}`);
      }
    }
    const points = [];
    const winners = [];
    for (let j = 0; j < result.length; j++) {
      points.push(result[j][1].length);
    }
    const max_point = Math.max(...points);
    for (let j = 0; j < result.length; j++) {
      if (result[j][1].length == max_point) winners.push(result[j][0]);
    }
    MissionUtils.Console.print(`${Text.WINNER} : ${winners.join(", ")}`);
  }
}

const isValidNames = (names) => {
  names = names.split(",");
  for (let name of names) {
    if (name.length > 5) return false;
  }
  return true;
};

const isValidNumber = (number) => {
  if (isNaN(number)) return false;
  return true;
};

const initResult = (names) => {
  const result = [];
  for (let name of names.split(",")) {
    result.push([name, ""]);
  }
  return result;
};

export default App;
