import { Random, Console } from "@woowacourse/mission-utils";

class RacingScore {
  randomScore(attemptNum, racingArr, scoreArr) {
    for (let i = 0; i < attemptNum; i++) {
      for (let j = 0; j < racingArr.length; j++) {
        const random = Random.pickNumberInRange(0, 9);
        if (random >= 4) {
          scoreArr[j]++;
        }
        Console.print(`${racingArr[j]} : ${"-".repeat(scoreArr[j])}`);
      }
    }
  }
}

export default RacingScore;
