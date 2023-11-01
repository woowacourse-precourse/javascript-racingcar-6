import { MissionUtils } from "@woowacourse/mission-utils";

const { Random, Console } = MissionUtils;

class App {
  async userInputHandler() {
    const playerBeforeDivide = await Console.readLineAsync(
      "자동차 이름을 입력하세요.(이름은 쉼표(,)으로 구분, 공백없는 5글자 이하)\n"
    );
    const gameRound = await Console.readLineAsync(
      "게임을 시도할 횟수를 입력해 주세요.\n"
    );
  }

  async play() {}
}

export default App;
