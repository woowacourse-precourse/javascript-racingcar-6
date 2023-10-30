import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  //자동차 이름 입력받기
  async carName() {
    let carNameInput = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNames = carNameInput.split(",");
  }

  //시도할 횟수 입력받기
  async try() {
    let tryInput = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
  }

  async play() {
    await this.carName();
    await this.try();
  }
}

export default App;

const app = new App();
app.play();
