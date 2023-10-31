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
    this.players = new Array();
    this.winner = new Array();
  }
  async input(Question) {
    const inputString = await Console.readLineAsync(Question);
    return inputString;
  }
  checkGoOrStop(carScoreIndex) {
    this.players[carScoreIndex].score += 1;
    this.carScores[carScoreIndex] += 1;
  }
  makePlayerObject() {
    for (let i = 0; i < this.carNames.length; i++) {
      let player = new Object();
      player.name = this.carNames[i];
      player.score = 0;
      this.players.push(player);
    }
  }

  findWinners() {
    const winner = this.players.filter((player, index, target) => {
      const maxOfScore = Math.max(...target.map(player => player.score));
      return player.score === maxOfScore;
    })
    winner.map((item) => { this.winner.push(item.name) });
    return this.winner.map(winner => winner).join(', ')
  }
  makeRandomNumber() {
    for (let i = 0; i < this.carNames.length; i++) {
      let randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      if (4 <= randomNumber) {
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
      Console.print(`${value} : ${printData}`)
    })
    Console.print('\n');
  }
}
class App {
  constructor() {
    this.controll = new Controll();
    this.validate = new Validate();
  }
  async play() {
    try {
      this.controll.carNames = await this.controll.input("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
      this.controll.carNames = this.controll.carNames.split(',');
      this.controll.makePlayerObject();
      this.controll.tryNumber = Number(await this.controll.input("시도할 횟수는 몇 회인가요?\n"));
      this.validate.carName(this.controll.carNames);
      this.validate.tryNumber(this.controll.tryNumber);
      this.controll.initialCarScore();
      for (let i = 0; i < this.controll.tryNumber; i++) {
        this.controll.makeRandomNumber();
        this.controll.printCase();
      }
      // Console.print(this.controll.players);
      Console.print("최종 우승자 : " + this.controll.findWinners());
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default App;
