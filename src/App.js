import { MissionUtils } from "@woowacourse/mission-utils";

class App {

  validateCarNames = (carNames) => {
    for(let carName of carNames) {
      if(carName.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }
    }
  }

  initializeCarLocations = (carNames) => {
    let locations = new Map();
    for(let carName of carNames) {
      locations.set(carName, 0);
    }
    return locations;
  }

  playRound = (carNames, locations) => {
    for(let carName of carNames) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      let move = 0;
      if(randomNumber >= 4) {
        move = 1;
      }
      locations.set(carName, locations.get(carName) + move);
    }
  }

  showRoundResult = (carNames, locations) => {
    for(let carName of carNames) {
      const location = locations.get(carName);
      let result = "";
      for(let i = 0; i < location; i++) {
        result += "-";
      }
      MissionUtils.Console.print(carName + " : " + result);
    }
    MissionUtils.Console.print("");
  }

  findWinner = (carNames, locations) => {
    let maxLocation = this.findMaxLocation(locations);
    let winner = [];
    let index = 0;
    for(let carName of carNames) {
      const location = locations.get(carName);
      if(location == maxLocation) {
        winner[index] = carName;
        index++;
      }
    }
    return winner;
  }

  findMaxLocation = (locations) => {
    let max = -1;
    for (let location of locations.values()) {
      if (location > max) {
        max = location;
      }
    }
    return max;
  }

  showWinner = (winners) => {
    let result = ""
    for (let winner of winners) {
      result += winner + ", ";
    }
    result = result.substring(0, result.length - 2);
    MissionUtils.Console.print("최종 우승자 : " + result);
  }
 
  async play() {
    const input = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const carNames = input.split(",");
    this.validateCarNames(carNames);

    let tryCount = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    let locations = this.initializeCarLocations(carNames);
    MissionUtils.Console.print("\n실행 결과");
    while(tryCount > 0) {
      this.playRound(carNames, locations);
      this.showRoundResult(carNames, locations);
      tryCount--;
    }
    const winner = this.findWinner(carNames, locations);
    this.showWinner(winner);
  }
}

export default App;
