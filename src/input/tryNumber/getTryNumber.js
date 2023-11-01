import { Console } from "@woowacourse/mission-utils";
import validateTryNumber from "./validateTryNumber.js";

const getTryNumber = async () => {
  const tryNumber = Number(await Console.readLineAsync(""));
  if (!validateTryNumber(tryNumber)) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  return tryNumber;
};

export default getTryNumber;
