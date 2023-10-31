import { Random } from "@woowacourse/mission-utils";

const CarForwardRandomNumberGenerator = {
  RandomNumberGenerator() {
    return Random.pickNumberInRange(1, 9);
  },
};
export default CarForwardRandomNumberGenerator;
