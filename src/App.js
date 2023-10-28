import { Console, Random } from "@woowacourse/mission-utils";

const CAR_NAMES_MESSAGE = "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)";
const ROUNDS_MESSAGE = "시도할 횟수는 몇 회인가요?";
const CAR_NAME_ERROR = "[ERROR] 자동차 이름은 5자 이하만 가능하고, 쉼표로 구분해야 합니다.";
const ROUNDS_ERROR = "[ERROR] 시도할 횟수는 양의 정수여야 합니다.";
const RACE_THRESHOLD = 4;
const RANDOM_MIN = 0;
const RANDOM_MAX = 9;

class App {
  async play() {
    const names = await this.getInputCarNames();
    const rounds = await this.getInputRounds();
    this.race(names, rounds);
  };

  async getInputCarNames() {
    const names = await Console.readLineAsync(CAR_NAMES_MESSAGE);

    if(!this.isValidNames(names)) {
      throw new Error(CAR_NAME_ERROR);
    }
    return names.split(",");
  };

  async getInputRounds() {
    const rounds = await Console.readLineAsync(ROUNDS_MESSAGE);
    if (!this.isValidRounds(rounds)) {
      throw new Error(ROUNDS_ERROR);
    }
    return Number(rounds);
  };

  isValidNames(names) {
    const nameArray = names.split(",");

    return nameArray.every(name => name.length > 0 && name.length <= 5);
  };

  isValidRounds(rounds) {
    const numberRounds = Number(rounds);
    return Number.isInteger(numberRounds) && numberRounds > 0;
  };

  //레이스 부분 

  race(names, rounds) {
    let results = this.initializeResults(names);
    for (let i = 0; i < rounds; i++) {
      results = this.runRound(results);
      this.displayRoundResults(results);
    }
    this.displayWinners(results);
  };
  
  initializeResults(names) {
    let results = {};
    names.forEach(name => results[name] = "");
    return results;
  };
  
  runRound(results) {
    const updatedResults = { ...results };
    for (let name in results) {
      if (Random.pickNumberInRange(RANDOM_MIN, RANDOM_MAX) >= RACE_THRESHOLD) {
        updatedResults[name] += "-";
      }
    }
    return updatedResults;
  };
  
  displayRoundResults(results) {
    for (let name in results) {
      Console.print(`${name} : ${results[name]}`);
    }
    Console.print("\n");
  };
  
  displayWinners(results) {
    const maxDistance = Math.max(...Object.values(results).map(result => result.length));
    const winners = Object.keys(results).filter(name => results[name].length === maxDistance);
    Console.print(`최종 우승자: ${winners.join(", ")}`);
  };

}


export default App;
