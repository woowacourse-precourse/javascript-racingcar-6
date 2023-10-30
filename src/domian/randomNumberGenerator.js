const { Random } = require("@woowacourse/mission-utils");

// 역할 : 1자리 랜덤 숫자를 만든다
export class RandomNumberGenerator {
  generate() {
    return Random.pickNumberInRange(1, 9);
  }
}
