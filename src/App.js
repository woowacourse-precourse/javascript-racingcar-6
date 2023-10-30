import GameSettingInput from "./GameSettingInput.js";
import GameProgress from "./GameProgress.js";
import GameResult from "./GameResult.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const gameSetting = await this.setting();

    const gameProgress = new GameProgress(gameSetting);
    Console.print("\n실행 결과");
    for (let i = 0; i < gameSetting.trialCount; i++) {
      gameProgress.proceed();
    }

    const gameResult = new GameResult(gameProgress.getAdvance());
    gameResult.printWinners();
  }

  async setting() {
    const gameSettingInput = new GameSettingInput();
    return await gameSettingInput.collect();
  }
}

export default App;
