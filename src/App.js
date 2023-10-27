import { Console } from "@woowacourse/mission-utils";
import { ERROR_LABEL, ERROR_MSG, MAX_LENGTH_OF_NAME } from "./constants";

class App {
  #TRY = 0; // 시도 횟수
  #RACE_CARS = []; // 경주 자동차 정보

  async play() {
    try {
      await this.game();
    } catch (error) {
      Console.print(`[${ERROR_LABEL.default}] ${error.message}`);
    }
  }

  /**
   * 시도 횟수를 사용자에게 입력받은 후 이를 리턴하는 함수
   *
   * 입력받은 숫자에 대한 검증 과정도 포함한다
   * @returns {int} try
   */
  async get_try_input() {}

  /**
   * 사용자로부터 자동차 이름을 입력받은 후 이를 리턴한다.
   *
   * 입력받은 문자열에 대한 검증 과정도 포함한다.
   * @returns {string[]}
   */
  async get_car_input() {}

  /**
   * 각 회차마다 실행할 자동차 경주 메소드
   *
   * RACE_CARS 배열 내부 값들을 갱신한다.
   */
  race() {}

  /**
   * 자동차 경주 게임을 실행하는 메소드
   */
  async game() {}
}

export default App;
