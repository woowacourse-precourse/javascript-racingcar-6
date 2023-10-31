import { Console } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.name = "";
    this.turn = 0;
  }
  async readUserRacingCars() {
    await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    ).then((input) => (this.name = input));
  }
  async readUserRacingTry() {
    await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n").then(
      (input) => (this.turn = input)
    );
  }

  async play() {
    await this.readUserRacingCars();
    await this.readUserRacingTry();
  }
}
const app = new App();
app.play();

export default App;
