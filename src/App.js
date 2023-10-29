import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const player = await this.playerRegistration(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)"
    );
    const userAttempts = await this.attempts("시도할 횟수는 몇 회인가요?");
    const raceStart = this.race(player, userAttempts);
    const playWinner = winner(raceStart);
    MissionUtils.Console.print(`최종 우승자 : ${playWinner}`);
  }

  async playerRegistration(answer) {
    const playerList = await MissionUtils.Console.readLineAsync(answer);
    const playerArray = playerList.split(",");
    let player = [];
    for (let i = 0; i < playerArray.length; i++) {
      if (playerArray[i].length <= 5) {
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

  race(player, userAttempts) {
    let results = {};

    MissionUtils.Console.print("실행 결과");
    for (let i = 1; i <= userAttempts; i++) {
      this.calculate(player, results);
    }
    return results;
  }

  calculate(player, results) {
    for (let j = 0; j < player.length; j++) {
      let result = "";
      if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
        result += "-";
      }
      if (!results[player[j]]) {
        results[player[j]] = result;
      } else {
        results[player[j]] += result;
      }
      MissionUtils.Console.print(`${player[j]} : ${results[player[j]]} `);
    }

    return results;
  }
  winner(result) {
    let maxHyphenCount = 0;
    let winners = [];

    for (const player in result) {
      const hyphenCount = (result[player].match(/-/g) || []).length;

      if (hyphenCount > maxHyphenCount) {
        maxHyphenCount = hyphenCount;
        winners = [player];
      } else if (hyphenCount === maxHyphenCount) {
        winners.push(player);
      }
    }

    return winners.join(", ");
  }
}

const app = new App();
app.play();

export default App;
