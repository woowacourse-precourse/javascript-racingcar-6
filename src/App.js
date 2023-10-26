import { MissionUtils } from "@woowacourse/mission-utils";

class MemberProgress {
  constructor(memberName) {
    this.name = memberName;
    this.currentProgress = "";
  }

  updateProgress() {
    const isMemberStop = MissionUtils.Random.pickNumberInRange(0, 9) < 4;
    if (!isMemberStop) this.currentProgress += "-";
  }
}
class App {
  async play() {
    const getMemberData = async () => {
      const memberInput = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
      );
      const members = memberInput.split(",");

      return members;
    };

    const getTryNumber = async () => {
      const tryInput = await MissionUtils.Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?\n",
      );

      return tryInput;
    };

    const memberData = await getMemberData();
    const tryData = await getTryNumber();
    const MEMBER_COUNT = memberData.length;
    const progress = memberData.map((member) => new MemberProgress(member));
    let i = 0;

    MissionUtils.Console.print("\n실행 결과");

    while (i < tryData) {
      for (let j = 0; j < MEMBER_COUNT; j++) {
        progress[j].updateProgress();
        MissionUtils.Console.print(
          progress[j].name + " : " + progress[j].currentProgress,
        );
      }

      MissionUtils.Console.print("");
      i++;
    }
  }
}

export default App;
