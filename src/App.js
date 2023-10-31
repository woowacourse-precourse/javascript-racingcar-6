import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const CAR_NAME = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    const CAR_NAME_ARRAY = CAR_NAME.split(",");

    this.carNameValidity(CAR_NAME_ARRAY);

    const NUMBER_OF_TRY = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    this.numberOfTryValidity(NUMBER_OF_TRY);

    const FINAL_COUNT_ARRAY = this.racing(NUMBER_OF_TRY, CAR_NAME_ARRAY);

    this.printResult(FINAL_COUNT_ARRAY, CAR_NAME_ARRAY);
  }

  carNameValidity(inputCarNameArray) {
    this.numberOfCarValidity(inputCarNameArray);

    for (const INPUT_CAR_NAME of inputCarNameArray) {
      this.carNameLengthValidity(INPUT_CAR_NAME);
    }

    this.carNameDuplicateValidity(inputCarNameArray);
  }

  numberOfCarValidity(inputCarNameArray) {
    if (inputCarNameArray.length < 2) {
      throw new Error(
        "[ERROR]: 5글자 이하의 경주할 자동차 이름을 ,로 구분하여 입력하시오"
      );
    }
  }

  carNameLengthValidity(inputCarName) {
    if (inputCarName.length > 5) {
      throw new Error(
        "[ERROR]: 5글자 이하의 경주할 자동차 이름을 ,로 구분하여 입력하시오"
      );
    }
  }

  carNameDuplicateValidity(inputCarNameArray) {
    const SET = new Set(inputCarNameArray);

    if (inputCarNameArray.length !== SET.size) {
      throw new Error("[ERROR]: 서로 다른 이름을 입력하시오.");
    }
  }

  numberOfTryValidity(numberOfTry) {
    this.isNaNNumberOfTryValidity(numberOfTry);

    this.isNaturalNumberValidity(numberOfTry);
  }

  isNaNNumberOfTryValidity(numberOfTry) {
    if (isNaN(numberOfTry)) {
      throw new Error("[ERROR]: 숫자를 입력하시오.");
    }
  }

  isNaturalNumberValidity(numberOfTry) {
    if (numberOfTry < 1) {
      throw new Error("[ERROR]: 1이상의 숫자를 입력하시오.");
    }
  }

  racing(inputNumberOfTry, inputCarNameArray) {
    const COUNT = Array.from({ length: inputCarNameArray.length }, () => 0);
    MissionUtils.Console.print("\n실행 결과");
    for (let i = 0; i < inputNumberOfTry; i++) {
      this.racingCountIncrement(inputCarNameArray, COUNT);
      MissionUtils.Console.print("");
    }

    return COUNT;
  }

  racingCountIncrement(inputCarNameArray, count) {
    for (let j = 0; j < inputCarNameArray.length; j++) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(0, 9);
      if (NUMBER >= 4) {
        count[j]++;
      }
      MissionUtils.Console.print(
        `${inputCarNameArray[j]} : ${"-".repeat(count[j])}`
      );
    }

    return count;
  }

  printResult(finalCountArray, carNameArray) {
    const MAX = Math.max(...finalCountArray);
    const FINAL_WINNER = [];
    for (let i = 0; i < finalCountArray.length; i++) {
      if (finalCountArray[i] === MAX) {
        FINAL_WINNER.push(carNameArray[i]);
      }
    }
    MissionUtils.Console.print(`최종 우승자 : ${FINAL_WINNER}`);
    return `최종 우승자 : ${FINAL_WINNER}`;
  }
}

export default App;
