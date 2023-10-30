import { MissionUtils } from "@woowacourse/mission-utils";
import MSG from "./message.js"

class App {
  async play() {
    const inputName = await MissionUtils.Console.readLineAsync(MSG.GAMESTART);
    const carNames = inputName.split(",");
    this.nameValidation(carNames);
    const cnt = await MissionUtils.Console.readLineAsync(MSG.INPUTCOUNT);
    MissionUtils.Console.print(MSG.RESULT)
    const carDistance = this.printResult(carNames, cnt)
    this.printWinner(carNames, carDistance)

  }

  printWinner(carNames, carDistance) {
    const maxDistance = Math.max(...carDistance)
    var winner = new Array()
    for (let i = 0; i < carNames.length; i++) {
      if (carDistance[i] === maxDistance) {
        winner.push(carNames[i])
      }
    }
    MissionUtils.Console.print(`${MSG.WINNER} ${winner.join(", ")}`)
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
    return carDistance
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
