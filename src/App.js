import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    let carNameInput  = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

     // 쉼표(,)로 구분된 자동차 이름을 배열로 분리
     const carNames = carNameInput.split(',');

     // carNames 배열에 자동차 이름이 들어 있음
     console.log(carNames);
  }
}

export default App;

const app = new App();
app.play();