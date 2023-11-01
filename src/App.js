import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    // 게임 준비

    const cars = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,)기준으로 구분\n"
    );
    if (!cars.includes(",")) {
      throw new Error("[ERROR]: 2개 이상의 자동차가 필요합니다");
    }
    const carList = cars.split(",").map((item) => item.trim());
    for (const car of carList) {
      if (car.length > 5) {
        throw new Error("[ERROR]: 이름은 5자 이하만 가능합니다");
      }
    }
    const round = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    // 결과 담을 딕셔너리 초기화
    let scoreboard = {};
    for (let car of carList) {
      scoreboard[car] = "";
    }
    MissionUtils.Console.print("\n실행 결과");

    // round별 게임 진행하는 함수
    function roundRace(carList, scoreboard) {
      for (let car of carList) {
        const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
        if (randomNum >= 4) {
          scoreboard[car] += "-";
        }
        MissionUtils.Console.print(`${car} : ${scoreboard[car]}`);
      }
      MissionUtils.Console.print("");

      return scoreboard;
    }

    // round 수만큼 게임 진행
    for (let i = 0; i < round; i++) {
      scoreboard = roundRace(carList, scoreboard);
    }

    // 우승자 정하기
    let winner = "";
    let max = 0;
    for (const [key, value] of Object.entries(scoreboard)) {
      if (value.length > max) {
        max = value.length;
        winner = key;
      } else if (value.length === max) {
        winner += ", " + key;
      }
    }
    MissionUtils.Console.print(`최종 우승자 : ${winner}`);
  }
}

export default App;
