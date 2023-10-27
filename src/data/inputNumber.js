import { MissionUtils } from "@woowacourse/mission-utils";
import { TEXT } from "../common/index";

const inputNumber = async () => {
  const number = await MissionUtils.Console.readLineAsync(
    `${TEXT.INPUT_NUMBER}`
  );
  if (isNaN(number)) throw Error(TEXT.INPUT_ERROR);
  return number;
};

export default inputNumber;
