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

class InputValidator {
  static validateMemberNameSpace(memberInput) {
    if (memberInput.includes(" ")) {
      throw new Error("[ERROR] 띄어쓰기는 허용되지 않습니다.");
    }
  }

  static validateMemberNameForm(member) {
    const regexMember = /^[A-Za-z가-힣]{1,5}$/;
    if (!regexMember.test(member)) {
      throw new Error("[ERROR] 멤버는 영,숫자 5자까지 가능합니다.");
    }
  }

  static validateTryInputForm(tryInput) {
    const regexTry = /^\d+$/;
    if (!regexTry.test(tryInput)) {
      throw new Error("[ERROR] 숫자 형식의 입력만 가능합니다.");
    }
  }
}
class App {
  getMemberData = async () => {
    const memberInput = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
    );

    InputValidator.validateMemberNameSpace(memberInput);

    const members = memberInput.split(",");
    members.forEach(InputValidator.validateMemberNameForm);

    return members;
  };

  getTryNumber = async () => {
    const tryInput = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n",
    );

    InputValidator.validateTryInputForm(tryInput);

    return tryInput;
  };

  async play() {
    const memberData = await this.getMemberData();
    const tryData = await this.getTryNumber();
    const progress = memberData.map((member) => new MemberProgress(member));

    MissionUtils.Console.print("\n실행 결과");

    for (let i = 0; i < tryData; i++) {
      progress.forEach((progressItem) => {
        progressItem.updateProgress();
        MissionUtils.Console.print(
          progressItem.name + " : " + progressItem.currentProgress,
        );
      });
      MissionUtils.Console.print("");
    }

    const winner = [];
    let winnerCount = 0;

    progress.forEach(({ name, currentProgress }) => {
      if (currentProgress.length >= winnerCount) winner.push(name);
    });

    MissionUtils.Console.print("최종 우승자 : " + winner.join(","));
  }
}

export default App;
