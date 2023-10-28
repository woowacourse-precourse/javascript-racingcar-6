import { MissionUtils } from "@woowacourse/mission-utils";
const { Console, Random } = MissionUtils;

class App {
  async inputName() {
    const input = await Console.readLineAsync(
      "이름을 경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) : "
    );
    return this.getName(input);
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
  async play() {
    await this.inputName();
  }
}
const app = new App();
app.play();

export default App;
