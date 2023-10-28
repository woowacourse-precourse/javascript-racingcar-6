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

  /**
   * 0 ~ 9의 임의의 수를 생성하여 4이상인 경우 true, 그렇지 않은 경우 false 반환
   * @returns boolean
   */
  getRandomNumber() {
    const random = MissionUtils.Random.pickNumberInRange(0, 9);
    const result = random >= 4 ? true : false;
    return result;
  }

  /**
   * 게임 진행 결과 출력
   * @param {*} carNames 자동차 이름 배열
   * @param {*} carPositions 자동차 위치 배열
   */
  printCarPositions(carNames, carPositions) {
    carNames.forEach((carName, index) =>
      MissionUtils.Console.print(
        carName + " : " + "-".repeat(carPositions[index])
      )
    );
    MissionUtils.Console.print("\n");
  }

  /**
   * 우승자 확인
   * @param {*} carNames 자동차 이름 배열
   * @param {*} carPositions 자동차 위치 배열
   * @returns 우승자
   */
  checkWinner(carNames, carPositions) {
    let winners = []; //우승자 배열
    const maxPosition = Math.max(...carPositions);
    carNames.forEach((carName, index) => {
      if (carPositions[index] === maxPosition) winners.push(carName);
    });

    return winners;
  }

  async play() {
    const carNames = await this.getInputCarNames();
    const count = await this.getInputCount();

    MissionUtils.Console.print("\n실행결과");
    let carsPositions = new Array(carNames.length).fill(0);
    for (let i = 0; i < parseInt(count); i++) {
      carNames.forEach((carName, index) => {
        if (this.getRandomNumber()) carsPositions[index]++;
      });
      this.printCarPositions(carNames, carsPositions);
    }

    const winners = this.checkWinner(carNames, carsPositions);
    MissionUtils.Console.print("최종 우승자: " + winners.join(", "));
  }
}

export default App;
