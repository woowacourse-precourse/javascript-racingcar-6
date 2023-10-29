import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const players = await this.getPlayersName();
    const rounds = await this.getNumberOfRounds();
    const results = {}; 

    for (let i = 0; i < rounds; i++) {
      this.performRound(players, results);
    }
    
    this.displayResults(results);
    const winners = this.determineWinners(results);
    this.displayWinners(winners);
  }

  async getPlayersName() {
    const players = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
  
    const playerNames = players.split(",").map((name) => name.trim());
  
    playerNames.forEach((name) => {
      if (name.length > 5) {
        throw new Error("[ERROR] 이름은 5자 이하여야 합니다.");
      }
    });

    if (new Set(playerNames).size !== playerNames.length) {
      throw new Error("[ERROR] 중복된 이름이 있습니다.");
    }
  
    return playerNames;
  }

  async getNumberOfRounds() {
    const rounds = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    return parseInt(rounds, 10);
  }

  performRound(players, results) {
    players.forEach((player) => {
      const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
      const progress = randomValue >= 4 ? "-" : "";

      results[player] = results[player] || "";
      results[player] += progress;
    });
  }

  displayResults(results) {
    Object.entries(results).forEach(([player, progress]) => {
      MissionUtils.Console.print(`${player} : ${progress}`);
    });
  }

  determineWinners(results) {
    let maxDistance = -1;
    const winners = [];

    Object.entries(results).forEach(([player, progress]) => {
      const distance = progress.split("-").length - 1;
      if (distance > maxDistance) {
        winners.length = 0; 
        winners.push(player);
        maxDistance = distance;
      } else if (distance === maxDistance) {
        winners.push(player);
      }
    });

    return winners;
  }

  displayWinners(winners) {
    MissionUtils.Console.print("최종 우승자 : " + winners.join(", "));
  }
}

export default App;