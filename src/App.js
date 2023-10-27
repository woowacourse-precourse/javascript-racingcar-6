import { MissionUtils } from "@woowacourse/mission-utils";

// #### 1. 자동차 생성 기능

// - 사용자로부터 자동차 이름을 입력받아 쉼표(,)로 구분하여 자동차 객체를 생성

// - 이름은 5자 이하로 제한

//   - 5자를 초과하는 경우 에러 메시지 출력 후 프로그램 종료

class App {
  constructor() {
    this.carList = [];
  }

  async play() {
    // 사용자가 입력한 차 이름 배열
    this.carList = this.getCarNames();
  }

  async getCarNames() {
    // CPMMENT 출력 후 입력된 값을 USER_INPUT에 저장
    const COMMENT =
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n";
    const USER_INPUT = await MissionUtils.Console.readLineAsync(COMMENT);

    // 공백 제거 후 ","로 입력값을 나누어 저장
    const CARS = USER_INPUT.replace(/\s/g, "").split(",");

    this.debug(CARS);

    // 사용자가 입력한 차 이름 배열 리턴
    return CARS;
  }

  debug(...args) {
    console.log(...args);
  }
}

const app = new App();
app.play();

export default App;
