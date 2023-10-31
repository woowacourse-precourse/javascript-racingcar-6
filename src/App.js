import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    let driven = {};

    const ATTENDANTS = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    this.confirmInput(ATTENDANTS);

    let attemptCounts = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    if (attemptCounts.match(/[\D(\s+)]/g)) {
      throw new Error("[ERROR] 입력값은 공백이나 문자가 아닌 숫자여야 합니다!");
    }

    MissionUtils.Console.print("\n실행 결과");

    while (attemptCounts > 0) {
      driven = this.process(driven, ATTENDANTS);
      attemptCounts -= 1;
    }

    const WINNER = this.findWinner(driven);
    MissionUtils.Console.print(`최종 우승자 : ${WINNER}`);
  }

  /**게임 진행*/
  process(driven, attendants) {
    let data = driven;
    let members = attendants.split(",").map((el) => el.replaceAll(" ", ""));

    for (let member of members) {
      !data[member] && (data[member] = 0);
      this.goOrNot() && data[member]++;
    }

    for (let member of members) {
      members.indexOf(member) === members.length - 1
        ? MissionUtils.Console.print(
            `${member} : ${"-".repeat(data[member])}\n`
          )
        : MissionUtils.Console.print(`${member} : ${"-".repeat(data[member])}`);
    }
    return data;
  }

  /**전진-정지 판별 */
  goOrNot() {
    let result;
    const NUM = MissionUtils.Random.pickNumberInRange(0, 9);
    NUM >= 4 ? (result = true) : (result = false);
    return result;
  }

  /**우승자 찾기 */
  findWinner(driven) {
    let temp = [];
    const NUM_DATA = Object.values(driven).sort((a, b) => a - b);
    const WINNER_NUM = NUM_DATA[NUM_DATA.length - 1];

    for (let el in driven) {
      if (driven[el] === WINNER_NUM) temp.push(el);
    }

    return temp.toString().replaceAll(",", ", ");
  }

  /**입력값 검사*/
  confirmInput(attendants) {
    const ATTENDANTS = attendants.split(",");
    if (ATTENDANTS.length < 2) {
      throw new Error(
        "[ERROR] 자동차 이름은 최소 두개 이상 설정해주셔야 해요!"
      );
    }
    for (let el of ATTENDANTS) {
      if (el.length > 5 || el.length < 1) {
        throw new Error(
          "[ERROR] 자동차 이름은 최소 1글자 이상 최대 5글자 이하로 만들어주세요!"
        );
      }
    }
  }
}

export default App;
