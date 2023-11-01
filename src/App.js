import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    // 게임 준비
    const cars = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,)기준으로 구분\n"
    );
    const carList = cars.split(",");
    const round = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    // 결과 담을 딕셔너리 초기화
    const result = {};
    for (let car of carList) {
      result[car] = "";
    }
    MissionUtils.Console.print("\n실행 결과");

    // round 수만큼 게임 진행
    for (let i = 0; i < round; i++) {
      // 라운드 게임 진행
      for (let car of carList) {
        const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
        if (randomNum >= 4) {
          result[car] += "-";
        }
        // 라운드별 결과 출력
        MissionUtils.Console.print(`${car} : ${result[car]}`)
      }
      MissionUtils.Console.print("")
    }
}

export default App;
