import { Console } from "@woowacourse/mission-utils";
import Game from "./Game.js";

class App {
  async play() {
    const game = new Game();
    await game.inputCarName();
    await game.inputAttemptNumber();
    // 시도할 횟수만큼 시도
    Console.print("실행 결과");
    for (let i = 0; i < game.getAttemptNumber(); i++) {
      for (const car of game.getCarList()) {
        car.calculatePosition();
        App.printResultMessage(car);
      }
      Console.print(""); // 개행해줌
    }
    // 최종 우승자 결정 후 출력
    game.decideFinalWinner();
    App.printFinalResultMessage(game);
  }

  static printResultMessage(car) {
    let resultMessage = car.generateResultMessage();
    Console.print(resultMessage);
  }

  static printFinalResultMessage(game) {
    let finalResultMessage = game.generateFinalResultMessage();
    Console.print(finalResultMessage);
  }
}

export default App;
