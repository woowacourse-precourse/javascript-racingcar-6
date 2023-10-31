import { MissionUtils } from "@woowacourse/mission-utils";
const { Console, Random } = MissionUtils;

class App {
  constructor() {
    this.participants = [];
  }

  async inputName() {
    const input = await Console.readLineAsync(
      "이름을 경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const nameArray = this.getName(input);
    this.participants = nameArray.map((name) => ({ name, position: 0 }));
  }

  async inputRound() {
    const inputNum = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요? \n"
    );
    return inputNum;
  }

  getName(input) {
    const nameArray = input.split(",").map((name) => name.trim());
    this.validateInput(nameArray);
    return nameArray;
  }

  validateInput(nameArray) {
    nameArray.forEach((name) => {
      if (name.length > 5) {
        throw new Error("[ERROR] 5자 이하로 입력해주세요.");
      }
      if (nameArray.length < 2) {
        throw new Error("[ERROR] 2명이상으로 입력해주세요.");
      }
      if (nameArray.some((name) => name === "")) {
        throw new Error("[ERROR] 올바른 이름을 입력해주세요.");
      }
    });
  }

  getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(1, 9);
  }

  async playRound() {
    const numParticipants = this.participants.length;
    for (let i = 0; i < numParticipants; i++) {
      const randomNum = await this.getRandomNumber();
      if (randomNum >= 4) {
        this.participants[i].position++;
      }
    }
  }

  findWinners() {
    const maxPosition = Math.max(
      ...this.participants.map((participant) => participant.position)
    );
    const winners = this.participants.filter(
      (participant) => participant.position === maxPosition
    );
    return winners;
  }

  createLine(num) {
    let result = "";
    for (let i = 0; i < this.participants[num].position; i++) {
      result += "-";
    }
    return result;
  }

  async play() {
    await this.inputName();
    const rounds = await this.inputRound();

    Console.print("\n실행결과");
    for (let i = 0; i < rounds; i++) {
      await this.playRound();
      this.participants.forEach((eachParticipant, num) => {
        const line = this.createLine(num);
        Console.print(`${eachParticipant.name} : ${line}`);
      });
      Console.print(" ");
    }
    const winners = this.findWinners();
    const winnerNames = winners.map((winner) => winner.name);
    Console.print(`최종 우승자: ${winnerNames.join(",")}`);
  }
}
const app = new App();
app.play();

export default App;
