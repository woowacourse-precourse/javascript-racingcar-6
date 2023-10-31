import { Random, Console } from "@woowacourse/mission-utils";

class RacingInput {
  async racingCarInput() {
    const racingCars = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const racingArr = racingCars.split(",");
    return racingArr;
  }

  async attemptNumInput() {
    const attemptNum = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );
    return attemptNum;
  }
}

export default RacingInput;
