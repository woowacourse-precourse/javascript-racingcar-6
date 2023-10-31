import { Random } from "@woowacourse/mission-utils";
import { STATIC_NUMBER } from "../Constant/constant";

const CarForwardRandomNumberGenerator = {
  RandomNumberGenerator() {
    return Random.pickNumberInRange(
      STATIC_NUMBER.randomMinNumber,
      STATIC_NUMBER.randomMaxNumber
    );
  },
};
export default CarForwardRandomNumberGenerator;
