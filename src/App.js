import { Console, MissionUtils } from "@woowacourse/mission-utils";
import InitGame from "./classes/InitGame.js";
import PlayGame from "./classes/PlayGame.js";

class App {
  
  async play() {
    const game = new InitGame();
    const playGame = new PlayGame();
    await game.initCarListAndGameCount();
    this.findWinner(playGame.gamePlay(game.carList, game.gameCount));
  }

  findWinner(carList) {
    let winnerList = [];
    carList.sort((a, b) => b[1] - a[1]);
    carList.forEach((car) => {
      if (car[1] != carList[0][1]) return winnerList;
      winnerList.push(car[0]);
    });
    Console.print("최종 우승자 : " + winnerList.join(", "));
  }
}
const app = new App();
app.play();

export default App;
