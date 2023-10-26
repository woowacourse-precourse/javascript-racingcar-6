import { MissionUtils } from "@woowacourse/mission-utils";
import { TEXT } from "../common/text";

const inputNumber = async () => {
  const number = await MissionUtils.Console.readLineAsync(
    `${TEXT.INPUT_NUMBER}`
  );
  const numberIsValid = isValidnumber(number);
  if (!numberIsValid) throw Error(TEXT.INPUT_ERROR);
  return number;
};

const isValidnumber = (number) => !isNaN(number);

export default inputNumber;
