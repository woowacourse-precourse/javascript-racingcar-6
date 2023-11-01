import { MissionUtils } from "@woowacourse/mission-utils";

// #### 4. 경주 진행 기능

// - 입력한 시도 횟수만큼 게임 진행, 각 단계의 우승횟수 저장

class App {
  constructor() {
    this.carNames = [];
    this.gameResults = {};
    this.gameCount = 0;
  }

  async play() {
    // 사용자가 입력한 차 이름 배열
    this.carNames = await this.getCarNames();

    // 시도할 횟수 입력
    this.gameCount = await this.getGameCount();

    this.initGame();

    MissionUtils.Console.print("\n실행 결과");

    while (this.gameCount > 0) {
      for (const name in this.gameResults) {
        if (this.moveRandomly()) this.gameResults[name]++;
      }

      this.showGameResult();

      this.gameCount--;
    }

    this.showWinner();
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
    // 게임 진행 횟수 입력 받음
    const COMMENT = "시도할 횟수는 몇 회인가요?\n";
    const GAME_COUNT = await MissionUtils.Console.readLineAsync(COMMENT);

    // 정규표현식으로 0이상의 정수인지 판별 후 아니면 에러
    const REGEX = /^(0|[1-9]\d*)$/;
    if (!REGEX.test(GAME_COUNT)) this.throwError();

    // 판별 통과시 입력된 게임 횟수 반환
    return GAME_COUNT;
  }

  initGame() {
    this.carNames.forEach((e) => {
      this.gameResults[e] = 0;
    });
  }

  moveRandomly() {
    const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(1, 10);

    return RANDOM_NUMBER > 3;
  }

  showGameResult() {
    for (const name in this.gameResults) {
      const RESULT = "-".repeat(this.gameResults[name]);

      MissionUtils.Console.print(`${name} : ${RESULT}`);
    }

    MissionUtils.Console.print("");
  }

  showWinner() {
    const MAX = Math.max(...Object.values(this.gameResults));
    const RESULT = Object.keys(this.gameResults).filter(
      (key) => this.gameResults[key] === MAX
    );

    MissionUtils.Console.print(`최종 우승자 : ${RESULT.join(", ")}`);
  }

  debug(...args) {
    console.log(...args);
  }

  throwError(COMMENT = "") {
    throw new Error(`[ERROR] ${COMMENT}`);
  }
}

const app = new App();
app.play();

export default App;
