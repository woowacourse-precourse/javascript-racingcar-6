import { MissionUtils } from "@woowacourse/mission-utils";
import MSG from "./message.js"
import nameValidation from "./validation.js"

class App {
  async play() {
    const inputName = await MissionUtils.Console.readLineAsync(MSG.GAMESTART);
    const carNames = inputName.split(",");
    nameValidation(carNames);
    const cnt = await MissionUtils.Console.readLineAsync(MSG.INPUTCOUNT);
    MissionUtils.Console.print(MSG.RESULT)
    this.printResult(carNames, cnt)

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
    this.printWinner(carNames, carDistance)
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
}

export default App;
