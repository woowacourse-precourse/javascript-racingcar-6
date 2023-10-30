import { Console, Random } from "@woowacourse/mission-utils";
import { MSG } from "./message.js"

function game(carNames, cnt) {
    Console.print(MSG.RESULT)
    var carDistance = Array.from({length : carNames.length}, ()=> 0)
    for (let i = 0; i < cnt; i++) {
      const gameResult = race(carNames, carDistance)
      for (let i = 0; i < carNames.length; i++) {
        Console.print(carNames[i] + " : " + "-".repeat(gameResult[i]))
      }
      Console.print("")
    }
    printWinner(carNames, carDistance)
}

function race(carNames, carDistance) {    
    for (let i = 0; i < carNames.length; i++) {
      let num = Random.pickNumberInRange(0, 9);
      if (num > 3) {
        carDistance[i] += 1;
      }
    }
    return carDistance    
}

function printWinner(carNames, carDistance) {
    const maxDistance = Math.max(...carDistance)
    var winner = new Array()
    for (let i = 0; i < carNames.length; i++) {
      if (carDistance[i] === maxDistance) {
        winner.push(carNames[i])
      }
    }
    Console.print(`${MSG.WINNER} ${winner.join(", ")}`)
}

export default game;