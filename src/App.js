import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.carsName = new Array();
    this.tryNum;
    this.carsRun;
  }

  async play() {
    await this.getInputCarsName().then(() => this.setCarsRunArray());
    await this.getInputTryNum();

    Console.print("\n실행결과\n");
    for (let i = 0; i < this.tryNum; i++) {
      this.carsRunProcess();
      this.printConsole();
    }
    this.printAnswer();
  }

  async getInputCarsName() {
    try {
      const inputCarsName = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(쉼표(,) 기준으로 구분\n"
      ).then((result) => (this.carsName = result.split(",")));
      for (let i = 0; i < this.carsName.length; i++) {
        if (this.carsName[i].length > 5) {
          throw new Error("[ERROR] 이름은 5자 이하만 가능합니다.");
        }
      }
    } catch (e) {
      throw e;
    }
  }

  async getInputTryNum() {
    try {
      this.tryNum = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
      if (isNaN(this.tryNum)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    } catch (e) {
      throw e;
    }
  }

  setCarsRunArray() {
    this.carsRun = new Array(this.carsName.length);
    for (let i = 0; i < this.carsRun.length; i++) {
      this.carsRun[i] = "";
    }
  }

  carsRunProcess() {
    for (let i = 0; i < this.carsRun.length; i++) {
      const randNum = Random.pickNumberInRange(0, 9);
      if (randNum >= 4) {
        this.carsRun[i] = this.carsRun[i] + "-";
      }
    }
  }

  printConsole() {
    for (let i = 0; i < this.carsName.length; i++) {
      Console.print(`${this.carsName[i]} : ${this.carsRun[i]}`);
    }
    Console.print("");
  }

  printAnswer() {
    let maxRun = 0;
    let saveIndex = new Array();

    for (let i = 0; i < this.carsRun.length; i++) {
      if (maxRun < this.carsRun[i].length) {
        maxRun = this.carsRun[i].length;
      }
    }

    for (let i = 0; i < this.carsRun.length; i++) {
      if (this.carsRun[i].length == maxRun) {
        saveIndex.push(i);
      }
    }

    let answer = `${this.carsName[saveIndex[0]]}`;

    for (let i = 1; i < saveIndex.length; i++) {
      answer = answer + `, ${this.carsName[saveIndex[i]]}`;
    }

    Console.print(`최종 우승자 : ${answer}`);
  }
}

export default App;
