import { Console } from "@woowacourse/mission-utils";
import * as F from "../utility/utilityFunctions.js";

const validateNameLength = (array, limitLength) => {
  return F.go(
    array,
    F.filter((a) => a.length <= limitLength),
  );
};

export default validateNameLength;
