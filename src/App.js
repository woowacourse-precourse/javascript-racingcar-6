import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async readCar() {
    let inputCar = await MissionUtils.Console.readLineAsync(
      `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)`
    );

    // 입력값 검증
    let temp = inputCar.split(",");
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].length <= 0) {
        throw new Error("[ERROR] 이름이 없는 자동차가 있습니다.");
      }
      if (temp[i].length >= 6) {
        throw new Error("[ERROR] 이름이 6자 이상인 자동차가 있습니다.");
      }
    }

    return temp;
  }
  async play() {
    // const number = MissionUtils.Random.pickNumberInRange(1, 9);
    let carList = await this.readCar();
    console.log(carList);
  }
}

export default App;

const app = new App();
app.play();
