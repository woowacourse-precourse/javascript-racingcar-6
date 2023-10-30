import { Console } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.name = "";
  }
  async readUserRacingCars() {
    await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    ).then((input) => (this.name = input));
  }
  async play() {
    await this.readUserRacingCars();
    console.log(this.name);
  }
}
const app = new App();
app.play();

export default App;
