import { MissionUtils } from "@woowacourse/mission-utils";
import { Text } from "./common/text";
class App {
  async play() {
    const names = await MissionUtils.Console.readLineAsync(Text.INPUT_NAMES);
    const number = await MissionUtils.Console.readLineAsync(Text.INPUT_NUMBER);
    if (!isValidNames(names) || !isValidNumber(number))
      throw new Error(Text.ERROR);

    const result = initResult(names);
    doRace(number, result);

    const maxPoint = getMaxPoint(result);
    const winners = getWinners(result, maxPoint);
    printResult(winners);
  }
}

const isValidNames = (names) => {
  for (let name of names.split(",")) {
    if (name.length > 5) return false;
  }
  return true;
};

const isValidNumber = (number) => !isNaN(number);

const initResult = (names) => {
  const result = [];
  for (let name of names.split(",")) {
    result.push([name, ""]);
  }
  return result;
};

const getMaxPoint = (result) => {
  const points = [];
  for (let j = 0; j < result.length; j++) {
    points.push(result[j][1].length);
  }
  return Math.max(...points);
};

const getWinners = (result, maxPoint) => {
  const winners = [];
  for (let j = 0; j < result.length; j++) {
    if (result[j][1].length === maxPoint) winners.push(result[j][0]);
  }
  return winners;
};

const doRace = (number, result) => {
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
};

const printResult = (winners) =>
  MissionUtils.Console.print(`${Text.WINNER} : ${winners.join(", ")}`);

export default App;
