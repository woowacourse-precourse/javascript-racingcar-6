import { Random } from "@woowacourse/mission-utils";

const RandomNumberGenerator = {
  async getRandomNumber() {
    return await Random.pickNumberInRange(0, 9);
  }
}

export default RandomNumberGenerator;