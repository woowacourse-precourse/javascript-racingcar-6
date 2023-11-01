class App {
  async play() {}

  /**
   * 쉼표(,)를 기준으로 구분하여, 자동차의 이름을 입력받습니다
   * @throw 5자 초과 or 중복 이름이 있으면 예외
   * @return {{name: string, position: number}[]} 자동차 초기 상태 배열 */
  async getCarNames() {

  }

  /**
   * 이동 횟수를 입력받습니다
   * @throw 숫자가 아닌 경우 예외
   * @return {number} 이동 횟수 */
  async getMovingCount() {

  }

  /**
   * 전진 조건을 판별합니다. 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우 전진
   * @return {boolean} 전진 조건을 만족하면 true, 아니면 false */
  isMovingForward() {

  }

  /**
   * 자동차의 위치를 전진시킵니다
   * @param {{name: string, position: number}[]} cars 자동차의 위치를 전진시킬 자동차 배열
   * @return {{name: string, position: number}[]} 전진시킨 자동차 배열 */
  moveCars(cars) {

  }

  /**
   * 자동차의 이름과 현재 위치를 출력합니다
   * @param {{name: string, position: number}[]} cars 현재 자동차 배열 */
  printCurrentCarPosition(cars) {

  }

  /**
   * 자동차 경주 게임을 완료한 후, 우승한 자동차 배열을 반환합니다
   * @param {{name: string, position: number}[]} cars 현재 자동차 배열
   * @return {{name: string, position: number}[]} 우승한 자동차 배열 */
  getWinners(cars) {

  }

  /**
   * 우승한 자동차 이름을 출력합니다
   * @param {{name: string, position: number}[]} winners 우승한 자동차 배열 */
  printWinners(winners) {

  }
}

export default App;
