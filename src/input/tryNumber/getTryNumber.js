import { Console } from "@woowacourse/mission-utils";
import validateTryNumber from "./validateTryNumber.js";

const getTryNumber = async () => {
  const try_number = Number(await Console.readLineAsync(""));
  if (!validateTryNumber(try_number)) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  return try_number;
};

export default getTryNumber;
