import { Console, MissionUtils } from "@woowacourse/mission-utils";
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
      throw new Error("[ERROR]")
    }
  }
  carNameValidate() {
    for (let i = 0; i < this.carNames.length; i++) {
      if (this.carNames[i].length > 6) {
        throw new Error("[ERROR] 차량 이름이 너무 길어요. 5글자 이하로 적어주세요")
      }
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
      this.controll.carNameValidate();
      this.controll.tryNumberValidate();
      this.controll.initialCarScore();
      this.controll.makeRandomNumber();
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default App;
