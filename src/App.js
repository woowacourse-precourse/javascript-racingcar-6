import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  play() {
    const [carName, cnt] = userInput();
    const carLength = carName.length;
    let carForward = Array.from({ carLength }, () => 0);

    MissionUtils.Console.print("\n실행 결과");
    while(cnt -= 1) {
      const randomNumber = generateRandomNumber(carLength);
      carForward = carForward.map((value, idx) => (randomNumber[idx] >= 4 ? value + 1 : value));
      printResult(carName, carForward);
    }

    printTotalResult(carName, carForward);
  }

  async userInput() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      const carName = input.split(',');
      if (!this.areElementsFiveCharactersOrLess(carName)) {
        throw new Error("[ERROR] 5자가 넘는 자동차 이름이 존재합니다.")
      }
      if (!this.areCarNamesUnique(carName)) {
        throw new Error("[ERROR] 중복된 자동차 이름이 존재합니다.")
      }
      const cnt = await MissionUtils.Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?\n"
      );
    } catch(error) {
      MissionUtils.Console.print(error.message);
      return;
    }

    return carName, cnt;
  }

  areElementsFiveCharactersOrLess(carName) {
    return carName.every(e => e.length <= 5);
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
