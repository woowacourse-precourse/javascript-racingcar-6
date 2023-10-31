import { Random } from "@woowacourse/mission-utils";
import CONDITIONS from "../constants/Conditions";

const createRandomNumber = () => {
  let carNumber = Random.pickNumberinRange(
    CONDITIONS.RANGE.MIN,
    CONDITIONS.RANGE.MAX
  );
  return carNumber;
};

export default createRandomNumber;
