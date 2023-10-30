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
    MissionUtils.Console.print('실행 결과');
    let count = new Array(CarNames.length).fill(0);
    for(let i=0;i<TryNumber;i++) {
      const GetRandomNumber = await this.PlayGame.getRandomNumber(CarNames, count);
      const DisplayResult = await this.PlayGame.displayResult(CarNames, GetRandomNumber);
      count = GetRandomNumber;
      MissionUtils.Console.print('\n');
    }
    const PickWinner = await this.PlayGame.pickWinner(CarNames, count);
    MissionUtils.Console.print('최종 우승자 : ' + PickWinner);
  }
}

export default App;
