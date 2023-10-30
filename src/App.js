import { MissionUtils } from "@woowacourse/mission-utils";

class App {

  validateCarNames = (carNames) => {
    for(let carName of carNames) {
      if(carName.length > 5) {
        throw new Error("[Error] 자동차 이름은 5자 이하만 가능합니다.");
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

  async play() {
    const input = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const carNames = input.split(",");
    this.validateCarNames(carNames);

    let tryCount = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    let locations = this.initializeCarLocations(carNames);
    while(tryCount > 0) {
      this.playRound(carNames, locations);
      //MissionUtils.Console.print(locations);
      tryCount--;
    }
  }
}

export default App;
