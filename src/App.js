import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {}

  /**
   * 경주할 자동차 이름을 입력받아 쉼표 단위로 구분하여 반환
   * @returns 자동차 이름을 담은 배열
   */
  async getInputCarNames() {
    const input = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNames = input.split(",");

    //에러처리
    carNames.forEach((carName) => {
      if (carName.length > 5)
        throw new Error("[ERROR] 자동차 이름은 5자이하여야 합니다.");
    });

    return carNames;
  }

  /**
   * 게임 시도 횟수를 입력받아 반환
   * @returns 게임 시도 횟수
   */
  async getInputCount() {
    const input = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    //에러처리
    if (input.match(/\D/g)) {
      throw new Error("[ERROR]횟수는 숫자여야합니다.");
    }

    return input;
  }

  async play() {
    const carNames = await this.getInputCarNames();
    const count = await this.getInputCount();

    //console.log(carNames);
    //console.log(count);
  }
}

export default App;
