import { MissionUtils } from "@woowacourse/mission-utils";
const { Console, Random } = MissionUtils;

class App {
  constructor() {
    this.participants = [];
  }

  async inputName() {
    const input = await Console.readLineAsync(
      "이름을 경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) : \n"
    );
    const nameArray = this.getName(input);
    this.participants = nameArray.map((name) => ({ name, position: 0 }));
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
    });
  }

  RandomNumber() {
    return MissionUtils.Random.pickNumberInRange(1, 9);
  }

  async playRound() {
    const numParticipants = this.participants.length;
    for (let i = 0; i < numParticipants; i++) {
      const randomNum = await this.RandomNumber();
      if (randomNum >= 4) {
        this.participants[i].position += 1;
      }
    }
  }

  async play() {
    await this.inputName();
    await this.playRound();
  }
}
const app = new App();
app.play();

export default App;
