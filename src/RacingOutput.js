import { Random, Console } from "@woowacourse/mission-utils";

class ScoreOutput {
  printScore(racingArr, scoreArr) {
    for (let j = 0; j < racingArr.length; j++) {
      const random = Random.pickNumberInRange(0, 9);
      if (random >= 4) scoreArr[j]++;
      Console.print(`${racingArr[j]} : ${"-".repeat(scoreArr[j])}`);
    }
  }
}

export default RacingOutput;
