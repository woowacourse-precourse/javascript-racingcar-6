import { Console, MissionUtils } from "@woowacourse/mission-utils";
class Validate {
  tryNumber(tryNumber) {
    if (isNaN(tryNumber)) {
      throw new Error("[ERROR] 시도할 횟수는 숫자로만 입력해주세요!")
    }
  }
  carName(carNames) {
    for (let i = 0; i < carNames.length; i++) {
      if (carNames[i].length > 6) {
        throw new Error("[ERROR] 차량 이름이 너무 길어요. 5글자 이하로 적어주세요")
      }
    }
  }
}
class Controll {
  constructor() {
    this.carNames = [];
    this.carScores = [];
    this.tryNumber = 0;
  }
  async input(Question) {
    const inputString = await Console.readLineAsync(Question);
    return inputString;
  }
  tryNumberValidate() {
    if (isNaN(this.tryNumber)) {
      throw new Error("[ERROR] 시도할 횟수는 숫자로만 입력해주세요!")
    }
  }
  carNameValidate() {
    for (let i = 0; i < this.carNames.length; i++) {
    }
  }
  checkGoOrStop(carScoreIndex) {
    this.carScores[carScoreIndex] += 1;
  }
  makeRandomNumber() {
    for (let i = 0; i < this.carNames.length; i++) {
      let randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      if (4 < randomNumber) {
        this.checkGoOrStop(i);
      };
    }
  }
  initialCarScore() {
    let i = this.carNames.length;
    while (i > 0) {
      this.carScores.push(0);
      i -= 1;
    }
  }
  printCase() {
    this.carNames.map((value, key) => {
      let printData = "";
      for (let i = 0; i < this.carScores[key]; i++) {
        printData += "-"
      }
      Console.print(`${value}:${printData}`)
    })
    Console.print('\n');
  }
}
class App {
  constructor() {
    this.controll = new Controll();
  }
  async play() {
    try {
      this.controll.carNames = await this.controll.input("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
      this.controll.carNames = this.controll.carNames.split(',');
      this.controll.tryNumber = Number(await this.controll.input("시도할 횟수는 몇 회인가요?\n"));
      this.validate.carName(this.controll.carNames);
      this.validate.tryNumber(this.controll.tryNumber);
      this.controll.initialCarScore();
      for (let i = 0; i < this.controll.tryNumber; i++) {
        this.controll.makeRandomNumber();
        this.controll.printCase();
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default App;
