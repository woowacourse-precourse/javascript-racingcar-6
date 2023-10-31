import { MissionUtils } from "@woowacourse/mission-utils";
import { getCarName, getRoundNum, compete } from "./Computer.js";

class App {
  async play() {
    let carNames = await getCarName();
    let round = await getRoundNum();

    compete(carNames, round);
  }
}

// const myApp = new App(); // App 클래스의 인스턴스 생성
// myApp.play(); // play 메소드 실행

export default App;
