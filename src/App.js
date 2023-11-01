import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";
import Setting from "./Setting.js";
class App {
  constructor() {
    this.SET_CAR_NAME = "";
    this.SET_PLAY_NUM = "";
    this.NEXT_TRACK = "\n";
    this.MAX_MOVE = "";
    this.WINNERS = "";
    this.WINNERS_LIST = "";
  }

  async play() {
    const setting = new Setting();
    this.SET_CAR_NAME = await setting.inputCarName();
    this.cars = Car.entryPlayer(this.SET_CAR_NAME);
    this.SET_PLAY_NUM = await setting.inputPlay();
    this.racingResult(this.cars, this.SET_PLAY_NUM);
  }

  pickWinner(carList) {
    this.MAX_MOVE = Math.max(...carList.map((player) => player.move));

    this.WINNERS = carList
      .filter((player) => player.move === this.MAX_MOVE)
      .map((player) => player.name);
    return this.winnerResult(this.WINNERS);
  }
  racingResult(carList, playGame) {
    for (let i = 0; i < playGame; i++) {
      carList.forEach((player) => {
        player.setMove();
        Console.print(`${player.getName()} : ${"-".repeat(player.getMove())}`);
      });
      Console.print(this.NEXT_TRACK);
    }

    return this.pickWinner(carList);
  }

  winnerResult(winners) {
    this.WINNERS_LIST = new Array(winners).join(', ');
    return Console.print(`최종 우승자 : ${this.WINNERS_LIST}`);
  }
}

export default App;
