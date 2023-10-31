import { Random, Console } from "@woowacourse/mission-utils";

class RacingOutput {
  printScore(racingArr, scoreArr) {
    for (let j = 0; j < racingArr.length; j++) {
      const random = Random.pickNumberInRange(0, 9);
      if (random >= 4) scoreArr[j]++;
      Console.print(`${racingArr[j]} : ${"-".repeat(scoreArr[j])}`);
    }
  }

  printAnswer(answer) {
    Console.print(
      `최종 우승자 : ${answer.length > 1 ? answer.join(", ") : answer}`
    );
  }
}

export default RacingOutput;
