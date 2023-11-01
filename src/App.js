import { Console } from "@woowacourse/mission-utils";
import GameSetting from "./gameSetting.js";
import { GAME_MESSAGE } from "./constants/gameConstant.js";
import GameMainLogic from "./GameMainLogic.js";

class App {
  constructor() {
    this.playersData = [];
    this.roundNumber = 0;
    this.winners = [];
  }
  async play() {
    await this.initGame();
    this.startGame();
  }

  async initGame(){
    const players = await GameSetting.getCarsName();
//    Console.print(`players : ${players}`);
    this.roundNumber = await GameSetting.getRound();
//    Console.print(`round : ${this.roundNumber}`);
    this.playersData = await GameSetting.getPlayersData(players);
//    Console.print(`playersData : ${this.playersData}`);
  }

  startGame() {
    Console.print(GAME_MESSAGE.ROUND_START);
    for (let round = 0; round < this.roundNumber; round++) {
      const findData = GameMainLogic.roundLogic(this.playersData);
//      Console.print(`이게 뭔지 알고 싶다. ${GameMainLogic.roundLogic(this.playersData)}`)
//      Console.print(`startGame round : ${round}`);
//      Console.print(`startGame playersData : ${this.playersData}`);
//      Console.print(`startGame findData : ${findData}`)
      GameMainLogic.printRoundResult(this.playersData);
    }

    this.winners = GameMainLogic.findWinner(this.playersData);
    GameMainLogic.printWinner(this.winners);
  }
}

const app = new App();
app.play();

export default App;
