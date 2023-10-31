import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const CAR_NAME = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    const CAR_NAME_ARRAY = CAR_NAME.split(",");

    this.carNameValidity(CAR_NAME_ARRAY);
  }

  carNameValidity(inputCarNameArray) {
    this.numberOfCarValidity(inputCarNameArray);
  }

  numberOfCarValidity(inputCarNameArray) {
    if (inputCarNameArray.length < 2) {
      throw new Error(
        "[ERROR]: 5글자 이하의 경주할 자동차 이름을 ,로 구분하여 입력하시오"
      );
    }
  }
}

export default App;
