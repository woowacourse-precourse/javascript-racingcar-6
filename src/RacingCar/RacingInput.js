import { Console } from "@woowacourse/mission-utils";

class RacingInput {
  async racingCarInput() {
    const racingCars = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const racingArr = racingCars.split(",");

    if (this.checkValidName(racingArr)) {
      const scoreArr = new Array(racingArr.length).fill(0);
      return { racingArr, scoreArr };
    }
  }

  checkValidName(racingArr) {
    for (let i = 0; i < racingArr.length; i++) {
      if (racingArr[i].length > 5)
        throw new Error("[ERROR] 잘못된 형식의 자동차 이름입니다.");
    }
    return true;
  }

  async attemptNumInput() {
    const attemptNum = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요? "
    );
    this.checkValidNum(attemptNum);
    return Number(attemptNum);
  }

  checkValidNum(attemptNum) {
    if (isNaN(attemptNum)) throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    else if (Number(attemptNum) < 1)
      throw new Error("[ERROR] 1이상의 수를 입력해주세요.");
  }
}

export default RacingInput;
