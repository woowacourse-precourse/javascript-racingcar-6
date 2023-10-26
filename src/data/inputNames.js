import { MissionUtils } from "@woowacourse/mission-utils";
import { TEXT } from "../common/text";

const inputNames = async () => {
  const names = await MissionUtils.Console.readLineAsync(`${TEXT.INPUT_NAMES}`);
  const NamesIsValid = isValidNames(names);
  if (!NamesIsValid) throw Error(TEXT.INPUT_ERROR);
  return names;
};

const isValidNames = (names) => {
  for (let name of names.split(",")) {
    if (name.length > 5) false;
  }
  return true;
};

export default inputNames;
