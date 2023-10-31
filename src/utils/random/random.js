import IncorrectFormatError from "../../error/IncorrectFormatError.js";
import IncorrectParameterError from "../../error/IncorrectParameterError.js";
import { MissionUtils } from "@woowacourse/mission-utils";

// start ~ end 사이의 무작위 값 리턴
const getRandomNumber = (start, end) => {
  // parameter의 타입이 올바르지 않을 경우
  if (typeof start !== "number" || typeof end !== "number") {
    throw new IncorrectFormatError();
  }

  // parameter가 올바르지 않을 경우
  if (start > end) {
    throw new IncorrectParameterError();
  }

  return MissionUtils.Random.pickNumberInRange(start, end);
};

export { getRandomNumber };
