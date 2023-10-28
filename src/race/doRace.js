import { MissionUtils } from "@woowacourse/mission-utils";
import { TEXT } from "../utils/common";

const doRace = (names, number) => {
  const result = initResult(names);
  MissionUtils.Console.print(TEXT.RESULT_MESSAGE);
  for (let i = 0; i < number; i++) {
    for (let j = 0; j < result.length; j++) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (randomNumber >= 4) result[j][1] += "-";
    }
    for (let j = 0; j < result.length; j++) {
      const [name, point] = result[j];
      MissionUtils.Console.print(`${name} : ${point}`);
    }
  }
  return result;
};

const initResult = (names) => {
  const result = [];
  for (let name of names.split(",")) {
    result.push([name, ""]);
  }
  return result;
};

export default doRace;
