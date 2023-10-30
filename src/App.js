import { Console } from "@woowacourse/mission-utils";
import Game from "./Game.js";

class App {
  async play() {
    const game = new Game();
    await game.inputCarName();
    await game.inputAttemptNumber();
    // 시도할 횟수만큼 시도
    Console.print("실행 결과");
    for (let i = 0; i < game.attemptNumber; i++) {
      for (const car of game.carList) {
        car.calculatePosition();
        this.printResultMessage(car);
      }
      Console.print(""); // 개행해줌
    }
    // 최종 우승자 결정 후 출력
    game.decideFinalWinner();
    this.printFinalResultMessage(game.finalWinnerList);
  }

  printResultMessage(car) {
    let resultMessage = car.name + " : ";
    for (let i = 0; i < car.position; i++) {
      resultMessage += "-";
    }
    Console.print(resultMessage);
  }

  printFinalResultMessage(finalWinnerList) {
    let finalResultMessage = "최종 우승자 : ";
    for (const finalWinner of finalWinnerList) {
      finalResultMessage += finalWinner + ", ";
    }
    finalResultMessage = finalResultMessage.slice(0, -2);
    Console.print(finalResultMessage);
  }
}

export default App;
