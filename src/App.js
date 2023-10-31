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
  }

  isNaNNumberOfTryValidity(numberOfTry) {
    if (isNaN(numberOfTry)) {
      throw new Error("[ERROR]: 숫자를 입력하시오.");
    }
  }
}

export default App;
