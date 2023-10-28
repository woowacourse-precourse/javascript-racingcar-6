import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const inputName = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const carNames = inputName.split(",");
    this.nameValidation(carNames);
  }

  nameValidation(carNames) {
    for (let i = 0; i < carNames.length; i++) {
      if (carNames[i].length > 5 || carNames[i].length < 1) {
        throw new Error ("[ERROR] 1 ~ 5글자의 자동차 이름을 입력해주세요.")
      }
    }
  }
}

export default App;
