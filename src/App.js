import { Console } from "@woowacourse/mission-utils";
import GameSettingInput from "./GameSettingInput";
import GameProgress from "./GameProgress";
import GameResult from "./GameResult";

class App {
  // eslint-disable-next-line class-methods-use-this
  async play() {
    const gameSetting = await App.setting();

    const gameProgress = new GameProgress(gameSetting);
    Console.print("\n실행 결과");
    for (let i = 0; i < gameSetting.trialCount; i += 1) {
      gameProgress.proceed();
    }

    const gameResult = new GameResult(gameProgress.getAdvance());
    gameResult.printWinners();
  }

  static async setting() {
    return GameSettingInput.collect();
  }
}

export default App;
