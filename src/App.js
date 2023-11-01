import { MissionUtils } from "@woowacourse/mission-utils";

// #### 2. 시도 횟수 입력 기능

// - 사용자로부터 시도 횟수를 입력받아 입력한 횟수만큼 자동차게임 진행

// - 입력한 값은 0 이상의 정수 값이어야 함

//   - 0 미만의 값이 입력된 경우 에러 메시지 출력 후 프로그램 종료

class App {
  constructor() {
    this.status = {};
  }

  async play() {
    // 사용자가 입력한 차 이름 배열
    const CAR_LIST = await this.getCarNames();

    // 시도할 횟수 입력
    const GAME_COUNT = await this.getGameCount();

    this.initGame(CAR_LIST, GAME_COUNT);

    while (this.status.gameCount) {
      this.status.gameCount--;
    }
  }

  async getCarNames() {
    // CPMMENT 출력 후 입력된 값을 USER_INPUT에 저장
    const COMMENT =
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n";
    const USER_INPUT = await MissionUtils.Console.readLineAsync(COMMENT);

    // 공백 제거 후 ","로 입력값을 나누어 저장
    const CARS = USER_INPUT.replace(/\s/g, "").split(",");

    // 5자 이하의 이름인지 확인, 아니면 에러
    if (CARS.every((el) => el.length > 5))
      this.throwError("숫자가 잘못된 형식입니다.");

    // 사용자가 입력한 차 이름 배열 리턴
    return CARS;
  }

  async getGameCount() {
    const COMMENT = "시도할 횟수는 몇 회인가요?\n";
    const GAME_COUNT = await MissionUtils.Console.readLineAsync(COMMENT);

    return GAME_COUNT;
  }

  initGame(CAR_LIST, GAME_COUNT) {
    this.status = {
      gameCount: GAME_COUNT,
      gameResult: {},
    };

    CAR_LIST.forEach((e) => {
      this.status.gameResult[e] = 0;
    });
  }

  debug(...args) {
    console.log(...args);
  }

  throwError(COMMENT) {
    throw new Error(`[ERROR] ${COMMENT}`);
  }
}

const app = new App();
app.play();

export default App;
