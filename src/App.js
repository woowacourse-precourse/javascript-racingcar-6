import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const playersInput =
      await Console.readLineAsync("경주할 자동차 이름을 입력하세요.");
    const players = playersInput.split(",");
    const playersWithMoveNum = {};
    players.forEach((player) => {
      playersWithMoveNum[player] = 0;
    });
  }
}

// const app = new App();
// app.play();

export default App;
