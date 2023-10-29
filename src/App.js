import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const inputName = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const carNames = inputName.split(",");
    this.nameValidation(carNames);
    const cnt = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    MissionUtils.Console.print("실행 결과")
    this.printResult(carNames, cnt)

  }

  printResult(carNames, cnt) {
    var carDistance = Array.from({length : carNames.length}, ()=> 0)
    for (let i = 0; i < cnt; i++) {
      const gameResult = this.race(carNames, carDistance)
      for (let i = 0; i < carNames.length; i++) {
        MissionUtils.Console.print(carNames[i] + " : " + "-".repeat(gameResult[i]))
      }
      MissionUtils.Console.print("")
    }
  }

  race(carNames, carDistance) {    
    for (let i = 0; i < carNames.length; i++) {
      let num = MissionUtils.Random.pickNumberInRange(0, 9);
      if (num > 3) {
        carDistance[i] += 1;
      }
    }
    return carDistance    
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
