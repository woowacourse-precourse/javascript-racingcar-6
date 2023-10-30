import { Random, Console } from "@woowacourse/mission-utils";
import NumberGenerator from "./NumberGenerator.js";
import ResultManager from "./ResultManager.js";

class App {
  constructor() {
    this.racingCarMembers = [];
    this.roundNumber = 0;
    this.isMovingForward = [];
  }

  async play() {
    const members = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    this.racingCarMembers = members.split(",");

    const reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/;
    let isAcceptString = true;
    let isProperLength = true;
    this.racingCarMembers.forEach((member) => {
      if (reg.test(member)) {
        isAcceptString = false;
      }
    });
    this.racingCarMembers.forEach((member) => {
      if (member.length > 5) {
        isProperLength = false;
      }
    });

    if (members == "") {
      throw new Error("[ERROR] 경주할 자동차 이름을 1개 이상 입력해주세요.");
    } else if (!isAcceptString || this.racingCarMembers.includes("")) {
      throw new Error("[ERROR] 공백, 빈 문자, 괄호, 따옴표, 특수문자는 포함할 수 없습니다.");
    } else if (!isProperLength) {
      throw new Error("[ERROR] 이름은 5자 이하로 입력 가능합니다.");
    } else if (this.racingCarMembers.length > 10) {
      throw new Error("[ERROR] 이름은 총 10개까지 입력 가능합니다.");
    } else if (new Set(this.racingCarMembers).size !== this.racingCarMembers.length) {
      throw new Error("[ERROR] 중복된 이름은 입력할 수 없습니다.");
    }

    this.roundNumber = Number(await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n"));

    if (this.roundNumber == "") {
      throw new Error("[ERROR] 시도 횟수를 입력해주세요.");
    } else if (!Number.isInteger(this.roundNumber)) {
      throw new Error("[ERROR] 시도 횟수는 자연수여야 합니다.");
    } else if (this.roundNumber < 1 || this.roundNumber > 20) {
      throw new Error("[ERROR] 시도 횟수는 1 이상 20 미만이어야 합니다.");
    }

    this.isMovingForward = new Array(this.racingCarMembers.length).fill(0).map(() => new Array());

    const numberGenerator = new NumberGenerator();

    for (let i = 0; i < this.roundNumber; i++) {
      this.racingCarMembers.forEach((number, index) => {
        this.isMovingForward[index].push(numberGenerator.createRandomNumbers());
      });
    }

    const resultManager = new ResultManager();

    Console.print("\n실행 결과");
    for (let i = 0; i <= this.roundNumber; i++) {
      resultManager.printOneRoundResults(i, this.racingCarMembers, this.isMovingForward);
      Console.print("\n");
    }
  }
}

export default App;
