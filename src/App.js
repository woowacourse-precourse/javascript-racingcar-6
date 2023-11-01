import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      let [carName, cnt] = await this.userInput();
  
      const carLength = carName.length;
      let carForward = Array.from({ length: carLength }, () => 0);
      MissionUtils.Console.print("\n실행 결과");
      while(cnt) {
        cnt -= 1
        const randomNumber = this.generateRandomNumber(carLength);
        carForward = carForward.map((value, idx) => ((randomNumber[idx] >= 4 ? value + 1 : value)));
        this.printResult(carName, carForward);
      }
      
      this.printTotalResult(carName, carForward);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }

  async userInput() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      const carName = input.split(',');

      if (!this.areElementsFiveCharactersOrLess(carName)) {
        throw new Error("[ERROR] 1자 이상 5자 이하의 자동차 이름을 입력해주세요.")
      }
      if (!this.areCarNamesUnique(carName)) {
        throw new Error("[ERROR] 중복된 자동차 이름이 존재합니다.")
      }

      const cnt = await MissionUtils.Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?\n"
      );
      return [carName, +cnt];
    } catch(error) {
      throw error;
    }
  }

  areElementsFiveCharactersOrLess(carName) {
    return carName.every(e => e.length <= 5 && e.length >= 1);
  }

  areCarNamesUnique(carName) {
    const uniqueElements = new Set(carName);
    return uniqueElements.size === carName.length;
  }

  generateRandomNumber(len) {
    const random = [];
    while (random.length < len) {
      const number = MissionUtils.Random.pickNumberInRange(0, 9);
      random.push(number);
    }
    return random;
  }

  printResult(name, forward) {
    name.map((n, idx) => {
      MissionUtils.Console.print(`${n} : ${'-'.repeat(forward[idx])}`);
    })
    MissionUtils.Console.print(""); //개행 추가
  }

  printTotalResult(name, forward) {
    const maxNumber = Math.max(...forward);
    const winner = name.filter((n, idx) => forward[idx] == maxNumber);
    MissionUtils.Console.print(`최종 우승자 : ${winner.join(", ")}`);
  }
}

export default App;
