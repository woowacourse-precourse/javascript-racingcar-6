import { MissionUtils } from "@woowacourse/mission-utils";

class App {

  validateCarNames = (carNames) => {
    for(var carName of carNames) {
      if(carName.length > 5) {
        throw new Error("[Error] 자동차 이름은 5자 이하만 가능합니다.")
      }
    }
  }

  async play() {
    const input = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n")
    const carNames = input.split(",")
    this.validateCarNames(carNames)
  }
}

export default App;
