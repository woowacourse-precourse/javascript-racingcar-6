import { Console, MissionUtils } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.name = "";
    this.turn = 0;
    this.cars = {};
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

  splitRacingCarBy(ch) {
    const racingCars = this.name.split(ch);
    for (let i = 0; i < racingCars.length; i++) {
      const name = racingCars[i];
      this.validateUserRacingCars(name);
      this.cars[name] = "";
    }
  }

  validateUserRacingCars(input) {
    const length = input.length;
    if (length > 5) {
      throw new Error("[ERROR] 차의 이름은 5자 이하만 가능합니다.");
    }
  }
  get getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }
  get isMoveForward() {
    if (this.getRandomNumber >= 4) {
      return 1;
    }
    return 0;
  }

  async play() {
    await this.readUserRacingCars();
    await this.readUserRacingTry();
    this.splitRacingCarBy(",");
    console.log(this.cars);
  }
}
const app = new App();
app.play();

export default App;
