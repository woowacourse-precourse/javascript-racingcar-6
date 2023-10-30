import { MissionUtils } from "@woowacourse/mission-utils";
import UserInput from "./UserInput.js";
import PlayGame from "./PlayGame.js";

class App {
  constructor() {
    this.UserInput = new UserInput();
    this.PlayGame = new PlayGame();
  }
  async play() {
    const CarNames = await this.UserInput.inputCarNames();
    const TryNumber = await this.UserInput.inputTryNum();
    MissionUtils.Console.print('\n 실행 결과');
    let Count = new Array(CarNames.length).fill(0);
    for (let i = 0; i < TryNumber; i++) {
      const StepForward = await this.PlayGame.getStepForward(CarNames, Count);
      await this.PlayGame.displayResult(CarNames, StepForward);
      Count = StepForward;
      MissionUtils.Console.print('\n');
    }
    const PickWinner = await this.PlayGame.pickWinner(CarNames, Count);
    MissionUtils.Console.print('최종 우승자 : ' + PickWinner);
  }
}

export default App;