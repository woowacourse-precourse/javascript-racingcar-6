import { Console, MissionUtils } from "@woowacourse/mission-utils";
import InitGame from "./classes/initGame.js";

class App {
  async play() {
    const game = new InitGame();
    await game.initCarListAndGameCount();
    this.findWinner(this.gamePlay(game.carList, game.gameCount));
  }

  showCount(count) {
    let temp_count = "";
    while (count > 0) {
      temp_count += "-";
      count--;
    }
    return temp_count;
  }
  gamePlay(carList, gameCount) {
    let carMovingCountList = carList.map((e) => [e, 0]);
    Console.print("\n실행 결과");
    while (gameCount > 0) {
      carMovingCountList = this.moveCar(carMovingCountList);
      gameCount--;
    }
    return carMovingCountList;
  }

  moveCar(carMovingCountList) {
    carMovingCountList.forEach((car) => {
      const number = MissionUtils.Random.pickNumberInRange(0, 9);
      if (number >= 4) car[1]++;
      Console.print(car[0] + " : " + this.showCount(car[1]));
    });
    Console.print("\n");
    return carMovingCountList;
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
