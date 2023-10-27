import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const player = await this.playerRegistration(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)"
    );
    const userAttempts = await this.attempts("시도할 횟수는 몇 회인가요?");
    console.log(player);
    console.log(userAttempts);
  }

  async playerRegistration(answer) {
    const playerList = await MissionUtils.Console.readLineAsync(answer);
    const playerArray = playerList.split(",");
    let player = [];
    for (let i = 0; i < playerArray.length; i++) {
      if (playerArray[i].length <= 5) {
        console.log(playerArray[i].length);
        player.push(playerArray[i]);
      } else {
        throw new Error("[ERROR] 입력은 최대 5글자까지");
      }
    }
    return player;
  }
  async attempts(answer) {
    const userAttempts = await MissionUtils.Console.readLineAsync(answer);
    return userAttempts;
  }
}

const app = new App();
app.play();

export default App;
