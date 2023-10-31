import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      const input = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
      const cars = this.inputValidation(input);
      const howManyTry = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
      this.game(cars, howManyTry);
    }
    catch (error) {
      throw new Error("[ERROR]")
    }
  }

  /** input 쪼개고 검증 */
  inputValidation(input) {
    if (input.length === null || input.length === "") {
      throw new Error("[ERROR] 잘못된 형식의 이름입니다.")
    } else {
      const cars = input.split(',');
      for (let i = 0; i < cars.length; i++) {
        this.eachInputValidaion(cars[i]);
      }
      return cars;
    }
  }

  /** 각 자동차에 대한 검증 */
  eachInputValidaion(input) {
    if (input === null || input === "") {
      throw new Error("[ERROR] 잘못된 형식의 이름입니다.")
    } else if (input.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하로 입력해주세요.")
    } else {
      return 0;
    }
  }

  /** 경기 진행 */
  game(cars, howManyTry) {
    const raceCount = new Array(cars.length).fill(0);
    for (let i = 0; i < howManyTry; i++) {
      race(cars, raceCount);
      printRound(cars, raceCount);
    }
    const winners = this.getWinnerIndex(raceCount);
    const winnerNames = winners.map(index => cars[index]).join(', ');
    // 우승자가 2명 이상인 경우에만 join으로 연결
    MissionUtils.Console.print(`최종 우승자 : ${winnerNames}`);
  }

  /** 한 라운드 진행 */
  race(cars, raceCount) {
    for (let i = 0; i < cars.length; i++) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomNumber > 3) {
        raceCount[i]++;
      }
    }
  }

  /** 한 라운드 출력 */
  printRound(cars, raceCount) {
    for (let i = 0; i < cars.length; i++) {
      MissionUtils.Console.print(`${cars[i]} : ${"-".repeat(raceCount[i])}\n`)
    }
  }

  /** raceCount[]의 최대값 인덱스를 winnerIndex[]에 저장 */
  getWinnerIndex(raceCount) {
    let maxVal = -Infinity;
    const winnerIndex = [];

    raceCount.forEach((value, index) => {
        // 현재 값 > 최대값; winnerIndex 초기화 후 push
        if (value > maxVal) {
            maxVal = value;
            winnerIndex.length = 0;
            winnerIndex.push(index);
        } 
        // 현재 값 === 최대 값; winnerIndex에 push
        else if (value === maxVal) {
            winnerIndex.push(index);
        }
    });

    return winnerIndex;
  }
}

export default App;
