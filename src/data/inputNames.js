import { MissionUtils } from "@woowacourse/mission-utils";
import { TEXT } from "../utils/common";

const inputNames = async () => {
  const names = await MissionUtils.Console.readLineAsync(`${TEXT.INPUT_NAMES}`);
  validateNames(names);
  return names;
};

const validateNames = (names) => {
  for (let name of names.split(",")) {
    if (name.length > 5) throw Error(TEXT.INPUT_ERROR);
  }
};

export default inputNames;
